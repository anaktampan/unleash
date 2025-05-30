import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material';
import { disabledStrategyClassName } from 'component/common/StrategyItemContainer/disabled-strategy-utils';

export type StrategyEvaluationItemProps = {
    type?: ReactNode;
    children?: ReactNode;
};

const StyledContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    minHeight: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
    },
}));

const StyledContent = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    [`.${disabledStrategyClassName} &`]: {
        filter: 'grayscale(1)',
        color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

const StyledType = styled('span')(({ theme }) => ({
    display: 'block',
    flexShrink: 0,
    fontSize: theme.fontSizes.smallerBody,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
    width: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}));

/**
 * Abstract building block for a list of constraints, segments and other items inside a strategy
 */
export const StrategyEvaluationItem: FC<StrategyEvaluationItemProps> = ({
    type,
    children,
}) => {
    return (
        <StyledContainer>
            <StyledType>{type}</StyledType>
            <StyledContent>{children}</StyledContent>
        </StyledContainer>
    );
};
