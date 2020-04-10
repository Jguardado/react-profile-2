import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { bootstrapLandingPage } from '../actions';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    margin: 15
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Post = ({ post }) => {
  return (
    <div>
      <Typography variant="h5" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body2" component="p">
        {post.body}
      </Typography>
    </div>
  );
};

const Posts = ({ posts }) => {
  const classes = useStyles();
  return (
    <div>
      {posts.map((post, index) => (
        <Card className={classes.root}>
          <CardContent key={index} variant="outlined">
            <div>
              <Post post={post} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

class UsersPage extends React.Component {
  componentWillMount() {
    const { init } = this.props;
    init();
  }
  render() {
    console.log('REGHULAR');
    const { posts } = this.props;
    return (
      <div
        style={{
          background: '#f8f8ff',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {posts && <Posts posts={posts} />}
      </div>
    );
  }
}

const mapState = state => ({
  users: state.usersReducer.users,
  posts: state.postsReducer.posts
});

const mapDispatch = dispatch => ({
  init: async () => dispatch(await bootstrapLandingPage())
});
export default connect(mapState, mapDispatch)(UsersPage);
