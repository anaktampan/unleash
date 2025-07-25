import type { FC, ReactNode } from 'react';
import { Box, Paper, styled, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import MuiTimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import type {
    ChangeRequestSchedule,
    ChangeRequestState,
    ChangeRequestType,
} from '../../changeRequest.types';
import { HtmlTooltip } from '../../../common/HtmlTooltip/HtmlTooltip.tsx';
import ErrorIcon from '@mui/icons-material/Error';
import { useLocationSettings } from 'hooks/useLocationSettings';
import { formatDateYMDHM } from 'utils/formatDate.ts';

export type ISuggestChangeTimelineProps = {
    timestamps?: ChangeRequestType['stateTransitionTimestamps']; // todo: update with flag `timestampsInChangeRequestTimeline`
} & (
    | {
          state: Exclude<ChangeRequestState, 'Scheduled'>;
          schedule?: undefined;
      }
    | {
          state: 'Scheduled';
          schedule: ChangeRequestSchedule;
      }
);

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(2),
    borderRadius: `${theme.shape.borderRadiusLarge}px`,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: `-${theme.spacing(4)}`,
}));

const StyledSubtitle = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
}));

const StyledTimeline = styled(Timeline)(() => ({
    [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
    },
}));

const steps: ChangeRequestState[] = [
    'Draft',
    'In review',
    'Approved',
    'Applied',
];
const rejectedSteps: ChangeRequestState[] = ['Draft', 'In review', 'Rejected'];
const scheduledSteps: ChangeRequestState[] = [
    'Draft',
    'In review',
    'Approved',
    'Scheduled',
    'Applied',
];

export const determineColor = (
    changeRequestState: ChangeRequestState,
    changeRequestStateIndex: number,
    displayStage: ChangeRequestState,
    displayStageIndex: number,
) => {
    if (changeRequestState === 'Cancelled') return 'grey';

    if (changeRequestState === 'Rejected')
        return displayStage === 'Rejected' ? 'error' : 'success';
    if (
        changeRequestStateIndex !== -1 &&
        changeRequestStateIndex >= displayStageIndex
    )
        return 'success';

    if (changeRequestStateIndex + 1 === displayStageIndex) return 'primary';
    return 'grey';
};

export const ChangeRequestTimeline: FC<ISuggestChangeTimelineProps> = ({
    state,
    schedule,
    timestamps,
}) => {
    let data: ChangeRequestState[];
    switch (state) {
        case 'Rejected':
            data = rejectedSteps;
            break;
        case 'Scheduled':
            data = scheduledSteps;
            break;
        default:
            data = steps;
    }
    const activeIndex = data.findIndex((item) => item === state);

    return (
        <StyledPaper elevation={0}>
            <StyledBox>
                <StyledTimeline>
                    {data.map((title, index) => {
                        const timestampComponent =
                            index <= activeIndex && timestamps?.[title] ? (
                                <Time dateTime={timestamps?.[title]} />
                            ) : undefined;

                        if (schedule && title === 'Scheduled') {
                            return (
                                <TimelineScheduleItem
                                    key={title}
                                    schedule={schedule}
                                    timestamp={timestampComponent}
                                />
                            );
                        }

                        const color = determineColor(
                            state,
                            activeIndex,
                            title,
                            index,
                        );
                        let timelineDotProps = {};

                        // Only add the outlined variant if it's the next step after the active one, but not for 'Draft' in 'Cancelled' state
                        if (
                            activeIndex + 1 === index &&
                            !(state === 'Cancelled' && title === 'Draft')
                        ) {
                            timelineDotProps = { variant: 'outlined' };
                        }

                        return (
                            <TimelineItem
                                key={title}
                                color={color}
                                title={title}
                                shouldConnectToNextItem={
                                    index < data.length - 1
                                }
                                timestamp={timestampComponent}
                                timelineDotProps={timelineDotProps}
                            />
                        );
                    })}
                </StyledTimeline>
            </StyledBox>
        </StyledPaper>
    );
};

const Time = styled(({ dateTime, ...props }: { dateTime: string }) => {
    const { locationSettings } = useLocationSettings();
    const displayTime = formatDateYMDHM(
        new Date(dateTime || ''),
        locationSettings.locale,
    );
    return (
        <time {...props} dateTime={dateTime}>
            {displayTime}
        </time>
    );
})(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
}));

const TimelineItem = ({
    color,
    title,
    shouldConnectToNextItem,
    timestamp,
    timelineDotProps = {},
}: {
    color: 'primary' | 'success' | 'grey' | 'error' | 'warning';
    title: string;
    shouldConnectToNextItem: boolean;
    timestamp?: ReactNode;
    timelineDotProps: { [key: string]: string | undefined };
}) => {
    return (
        <MuiTimelineItem key={title}>
            <TimelineSeparator>
                <TimelineDot color={color} {...timelineDotProps} />
                {shouldConnectToNextItem && <TimelineConnector />}
            </TimelineSeparator>
            <StyledTimelineContent>
                {title}
                {timestamp}
            </StyledTimelineContent>
        </MuiTimelineItem>
    );
};

export const getScheduleProps = (schedule: ChangeRequestSchedule) => {
    const Subtitle = ({ prefix }: { prefix: string }) => (
        <>
            {prefix} <Time dateTime={schedule.scheduledAt} />
        </>
    );

    switch (schedule.status) {
        case 'suspended':
            return {
                title: 'Schedule suspended',
                subtitle: <Subtitle prefix='was' />,
                color: 'grey' as const,
                reason: (
                    <HtmlTooltip title={schedule.reason} arrow>
                        <ErrorIcon color={'disabled'} fontSize={'small'} />
                    </HtmlTooltip>
                ),
            };
        case 'failed':
            return {
                title: 'Schedule failed',
                subtitle: <Subtitle prefix='at' />,
                color: 'error' as const,
                reason: (
                    <HtmlTooltip
                        title={`Schedule failed because of ${
                            schedule.reason || schedule.failureReason
                        }`}
                        arrow
                    >
                        <ErrorIcon color={'error'} fontSize={'small'} />
                    </HtmlTooltip>
                ),
            };
        default:
            return {
                title: 'Scheduled',
                subtitle: <Subtitle prefix='for' />,
                color: 'warning' as const,
                reason: null,
            };
    }
};

const TimelineScheduleItem = ({
    schedule,
    timestamp,
}: {
    schedule: ChangeRequestSchedule;
    timestamp: ReactNode;
}) => {
    const { title, subtitle, color, reason } = getScheduleProps(schedule);

    return (
        <MuiTimelineItem key={title}>
            <TimelineSeparator>
                <TimelineDot color={color} />
                <TimelineConnector />
            </TimelineSeparator>
            <StyledTimelineContent>
                {title}
                {timestamp}
                <StyledSubtitle>
                    <Typography color={'text.secondary'} sx={{ mr: 1 }}>
                        ({subtitle})
                    </Typography>
                    {reason}
                </StyledSubtitle>
            </StyledTimelineContent>
        </MuiTimelineItem>
    );
};
