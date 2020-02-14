import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton
} from '@material-ui/core';
import { connect } from 'react-redux';
import { bootstrapLandingPage } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import {
  Info as InfoIcon,
  StarBorder as StarBorderIcon
} from '@material-ui/icons';

const albumStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme ? theme.palette.background.paper : null
  },
  gridList: {
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}));

const usersStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme ? theme.palette.background.paper : null
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  title: {
    color: theme ? theme.palette.primary.light : null
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  }
}));

const Albums = ({ albums }) => {
  const classes = albumStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {albums.map(album => (
          <GridListTile key={album.id} cols={3}>
            <img src={album.photos[0].thumbnailUrl} alt={album.title} />
            <GridListTileBar
              title={album.title}
              subtitle={<span>by: Juan Guardado</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${album.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

const Users = ({ users }) => {
  const classes = usersStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {users.map(user => (
          <GridListTile key={user.img}>
            <img src={user.img} alt={user.name} />
            <GridListTileBar
              title={user.name}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${user.name}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

class LandingPage extends Component {
  componentWillMount() {
    const { init } = this.props;
    init();
  }

  render() {
    const { albums, users } = this.props;
    return (
      <div>
        <GridListTile key="Subheader2" cols={1} style={{ height: 'auto' }}>
          <Link to="/users">
            <ListSubheader component="h1">Users</ListSubheader>
          </Link>
          {users && <Users users={users} />}
        </GridListTile>
        <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
          <ListSubheader component="h1">Albums</ListSubheader>
          {albums && <Albums albums={albums} />}
        </GridListTile>
      </div>
    );
  }
}

const mapState = state => ({
  albums: state.albumsReducer.albums,
  users: state.usersReducer.users
});

const mapDispatch = dispatch => ({
  init: async () => dispatch(await bootstrapLandingPage())
});

export default connect(mapState, mapDispatch)(LandingPage);
