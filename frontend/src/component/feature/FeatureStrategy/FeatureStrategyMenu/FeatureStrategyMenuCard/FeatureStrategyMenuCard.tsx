import type { IStrategy } from 'interfaces/strategy';
import { Link } from 'react-router-dom';
import {
    getFeatureStrategyIcon,
    formatStrategyName,
} from 'utils/strategyNames';
import { formatCreateStrategyPath } from 'component/feature/FeatureStrategy/FeatureStrategyCreate/FeatureStrategyCreate';
import StringTruncator from 'component/common/StringTruncator/StringTruncator';
import { styled } from '@mui/material';
import { usePlausibleTracker } from 'hooks/usePlausibleTracker';
import { Truncator } from 'component/common/Truncator/Truncator';

interface IFeatureStrategyMenuCardProps {
    projectId: string;
    featureId: string;
    environmentId: string;
    strategy: Pick<IStrategy, 'name' | 'displayName' | 'description'> &
        Partial<IStrategy>;
    defaultStrategy?: boolean;
}

const StyledIcon = styled('div')(({ theme }) => ({
    width: theme.spacing(4),
    height: 'auto',
    '& > svg': {
        // Styling for SVG icons.
        fill: theme.palette.primary.main,
    },
    '& > div': {
        // Styling for the Rollout icon.
        height: theme.spacing(2),
        marginLeft: '-.75rem',
        color: theme.palette.primary.main,
    },
}));

const StyledContentContainer = styled('div')(() => ({
    overflow: 'hidden',
    width: '100%',
}));

const StyledName = styled(StringTruncator)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.caption.fontSize,
    display: 'block',
    marginBottom: theme.spacing(0.5),
}));

const StyledCard = styled(Link)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '2.5rem 1fr',
    width: '100%',
    maxWidth: '30rem',
    padding: theme.spacing(2),
    color: 'inherit',
    textDecoration: 'inherit',
    lineHeight: 1.25,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    '&:hover, &:focus': {
        borderColor: theme.palette.primary.main,
    },
}));

export const FeatureStrategyMenuCard = ({
    projectId,
    featureId,
    environmentId,
    strategy,
    defaultStrategy,
}: IFeatureStrategyMenuCardProps) => {
    const StrategyIcon = getFeatureStrategyIcon(strategy.name);
    const strategyName = formatStrategyName(strategy.name);
    const { trackEvent } = usePlausibleTracker();

    const createStrategyPath = formatCreateStrategyPath(
        projectId,
        featureId,
        environmentId,
        strategy.name,
        defaultStrategy,
    );

    const openStrategyCreationModal = () => {
        trackEvent('strategy-add', {
            props: {
                buttonTitle: strategy.displayName || strategyName,
            },
        });
    };

    return (
        <StyledCard to={createStrategyPath} onClick={openStrategyCreationModal}>
            <StyledIcon>
                <StrategyIcon />
            </StyledIcon>
            <StyledContentContainer>
                <StyledName
                    text={strategy.displayName || strategyName}
                    maxWidth='200'
                    maxLength={25}
                />
                <Truncator
                    lines={1}
                    title={strategy.description}
                    arrow
                    sx={{
                        fontSize: (theme) => theme.typography.caption.fontSize,
                        width: '100%',
                    }}
                >
                    {strategy.description}
                </Truncator>
            </StyledContentContainer>
        </StyledCard>
    );
};
