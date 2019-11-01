import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  authorContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
    color: theme.palette.common.white,
    marginRight: theme.spacing(1),
  },
  chip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    marginRight: theme.spacing(0.5),
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    }
  },
  date: {
    lineHeight: '1.1',
  },
  divider: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
    margin: theme.spacing(2),
    opacity: '0.6',
  },
  hero: {
    width: '100%',
  },
  listItem: {
    marginTop: theme.spacing(1),
  },
  markdown: {
    ...theme.typography.body2,
  },
  notFound: {
    marginBottom: theme.spacing(3),
  }
}));
