import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  '@global': {
    body: {
      height: '100vh',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      justifyContent: 'space-between',
      margin: '64px auto 0',
      maxWidth: 800,
      padding: theme.spacing(3),
    },
    a: {
      textDecoration: 'none',
    },
    '#root': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    '.fade-enter': {
      opacity: 0,
      zIndex: 1,
    },
    '.fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 250ms ease-in',
    }
  },
  category: {
    flex: '1 1 auto',
  },
  divider: {
    backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
    opacity: '0.6',
  },
  home: {
    lineHeight: 2,
    margin: theme.spacing(2),
    transition: '200ms ease',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
    }
  },
  list: {
    padding: theme.spacing(2, 0),
    width: 250,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedFont: {
    fontSize: 14,
  },
  title: {
    color: theme.palette.common.white,
    '&:hover': {
      textDecoration: 'underline',
    }
  },
}));
