import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import PostCard from '../../components/PostCard';
import posts from '../../posts';
import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import styles from './styles';
import Typography from '@material-ui/core/Typography';

export default (props) => {
  const { match: { params } } = props;
  const { id: postId } = params;
  const classes = styles();

  const shuffle = (array) => {
    const newArray = [...array];
    for (let i = array.length - 1; i > 0; i--) {
      const n = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[n]] = [newArray[n], newArray[i]];
    }
    return newArray;
  };

  const options = {
    overrides: {
      h1: { component: (props) => <Typography gutterBottom variant='h4' {...props} /> },
      h2: { component: (props) => <Typography gutterBottom variant='h6' {...props} /> },
      h3: { component: (props) => <Typography gutterBottom variant='subtitle1' {...props} /> },
      h4: { component: (props) => <Typography gutterBottom variant='caption' paragraph {...props} /> },
      p: { component: (props) => <Typography paragraph {...props} /> },
      a: { component: Link },
      li: {
        component: (props) => (
          <li className={classes.listItem}>
            <Typography component='span' {...props} />
          </li>
        )
      },
    },
  };

  const post = posts.find((p) => p.id === postId);

  return (
    <React.Fragment>
      {post ? (
        <React.Fragment>
          <Typography align='center' component='h1' gutterBottom variant='h2'>{post.title}</Typography>
          <div className={classes.authorContainer}>
            <div>
              <Avatar className={classes.avatar}>{post.author[0]}</Avatar>
            </div>
            <div>
              <Typography variant='subtitle1' color='textPrimary'>{post.author}</Typography>
              <Typography variant='subtitle2' color='textSecondary' className={classes.date}>{new Date(post.date).toDateString()}</Typography>
            </div>
          </div>
          <img src={post.thumbnail} alt="post" className={classes.hero}/>
          <ReactMarkdown className={classes.markdown} options={options} >
            {post.markdown}
          </ReactMarkdown>
          <div>
            {post.tags.map((tag) => (
              <Chip
                className={classes.chip}
                clickable
                component='a'
                href={`#${tag.toLowerCase()}`}
                key={tag}
                label={tag}
              />
            ))}
          </div>
        </React.Fragment>
      ) : (
        <Typography variant='h4' className={classes.notFound}>No post found :(</Typography>
      )}
      <Divider className={classes.divider} />
      <div>
        <Typography gutterBottom variant='h5'>
          Recommended Posts:
        </Typography>
        <Grid container className={classes.grid} spacing={2}>
          {shuffle(posts).slice(0, 2).map((post) => (
            <Grid item xs={12} key={post.id}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  )
}
