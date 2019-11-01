import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  chip: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
    marginRight: theme.spacing(0.5),
  },
}));
