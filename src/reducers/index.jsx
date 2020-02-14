import { combineReducers } from 'redux';
import postsReducer from './posts';
import albumsReducer from './albums';
import commentsReducer from './comments';
import photosReducer from './photos';
import usersReducer from './users';

export default combineReducers({
  postsReducer,
  albumsReducer,
  commentsReducer,
  photosReducer,
  usersReducer
});
