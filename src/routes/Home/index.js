import Grid from '@material-ui/core/Grid';
import PostCard from '../../components/PostCard';
import posts from '../../posts';
import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import styles from './styles';

export default () => {
  const classes = styles();
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Grid container className={classes.grid} spacing={2}>
      {sortedPosts.map((post, index) => (
        <Zoom in key={post.id} timeout={200 + index * 100}>
          <Grid item xs={12}>
            <PostCard post={post} />
          </Grid>
        </Zoom>
      ))}
    </Grid>
  )
}
