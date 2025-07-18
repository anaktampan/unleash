import { styled, Tab } from '@mui/material';
import { FavoriteIconButton } from 'component/common/FavoriteIconButton/FavoriteIconButton';

export const StyledDiv = styled('div')(() => ({
    display: 'flex',
}));

export const StyledTopRow = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    width: '100%',
}));

export const StyledColumn = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const StyledName = styled('span')(({ theme }) => ({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
}));

export const StyledTitle = styled('span')(({ theme }) => ({
    fontSize: theme.fontSizes.smallBody,
    fontWeight: 'normal',
}));

export const StyledText = styled(StyledTitle)(({ theme }) => ({
    color: theme.palette.neutral.dark,
}));

export const StyledFavoriteIconButton = styled(FavoriteIconButton)(
    ({ theme }) => ({
        marginLeft: theme.spacing(-1.5),
    }),
);

export const StyledHeader = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadiusLarge,
    marginBottom: theme.spacing(2),
}));

export const StyledInnerContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(2.5, 5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
}));

export const StyledProjectTitle = styled('h1')(({ theme }) => ({
    margin: 0,
    width: '100%',
    fontSize: theme.typography.h1.fontSize,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    overflow: 'hidden',
    lineHeight: 1.5,
}));

export const StyledSeparator = styled('div')(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.divider,
    height: '1px',
}));

export const StyledTabContainer = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 4),
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontSize: theme.fontSizes.bodySize,
    flexBasis: 0,
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        minWidth: 170,
    },
    [theme.breakpoints.up('md')]: {
        minWidth: 170,
    },
}));
