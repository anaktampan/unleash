import { getFeatureStrategyIcon } from 'utils/strategyNames';
import StringTruncator from 'component/common/StringTruncator/StringTruncator';
import { Button, styled } from '@mui/material';
import type { IReleasePlanTemplate } from 'interfaces/releasePlans';
import { Truncator } from 'component/common/Truncator/Truncator';

const StyledIcon = styled('div')(({ theme }) => ({
    width: theme.spacing(4),
    height: 'auto',
    '& > svg': {
        fill: theme.palette.primary.main,
    },
    '& > div': {
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

const StyledCard = styled(Button)(({ theme }) => ({
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
    textAlign: 'left',
    overflow: 'hidden',
    '&:hover, &:focus': {
        borderColor: theme.palette.primary.main,
    },
}));

interface IFeatureReleasePlanCardProps {
    template: IReleasePlanTemplate;
    onClick: () => void;
}

export const FeatureReleasePlanCard = ({
    template: { name, description },
    onClick,
}: IFeatureReleasePlanCardProps) => {
    const Icon = getFeatureStrategyIcon('releasePlanTemplate');

    return (
        <StyledCard onClick={onClick}>
            <StyledIcon>
                <Icon />
            </StyledIcon>
            <StyledContentContainer>
                <StyledName text={name} maxWidth='200' maxLength={25} />
                <Truncator
                    lines={1}
                    title={description}
                    arrow
                    sx={{
                        fontSize: (theme) => theme.typography.caption.fontSize,
                        fontWeight: (theme) =>
                            theme.typography.fontWeightRegular,
                        width: '100%',
                    }}
                >
                    {description}
                </Truncator>
            </StyledContentContainer>
        </StyledCard>
    );
};
