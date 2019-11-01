import * as constants from '../../utils/constants';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import posts from '../../posts';
import React from 'react';
import Slide from '@material-ui/core/Slide';
import styles from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

const scrollTop = () => {
  window.scrollTo(0, 0)
};

const categories = posts.reduce((acc, post) => {
  post.tags.forEach((tag) => {
    acc[tag] = (acc[tag] || []).concat(post)
  });
  return acc;
}, []);

export default (props) => {
  const classes = styles();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpand] = React.useState(Object.keys(categories).reduce((acc, c) => {
    acc[c] = false;
    return acc
  }, {}));

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const expand = (category) => () => {
    setExpand({
      ...expanded,
      [category]: !expanded[category]
    })
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <IconButton
              aria-label='menu'
              className={classes.menuButton}
              color='inherit'
              edge='start'
              id='menu-button'
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={classes.title}
              component={Link}
              id='site-logo'
              onClick={scrollTop}
              to='/'
              variant='h5'
            >
              {constants.SITE_TITLE}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        variant='temporary'
      >
        <div
          className={classes.list}
          role='presentation'
        >
          <Typography
            className={classes.home}
            color='textSecondary'
            component={Link}
            onClick={toggleDrawer}
            to='/'
            variant='h5'
          >
            {constants.SITE_TITLE}
          </Typography>
          <Divider className={classes.divider} />
          <List component='div' disablePadding>
            {Object.keys(categories).map((category) => (
              <React.Fragment key={category}>
                <ListItem button onClick={expand(category)}>
                  <Typography className={classes.category} variant='body1'>
                    <strong>{category}</strong>
                  </Typography>
                  {expanded[category] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={expanded[category]} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {categories[category].map((post) => (
                      <ListItem
                        button
                        className={classes.nested}
                        component={Link}
                        key={post.id}
                        onClick={() => {
                          toggleDrawer();
                          scrollTop();
                        }}
                        to={`/post/${post.id}`}
                      >
                        {post.title}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>

  )
}
