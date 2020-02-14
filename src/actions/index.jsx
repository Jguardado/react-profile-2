import {
  fetchPosts,
  fetchUsers,
  fetchComments,
  fetchAlbums,
  fetchPhotos
} from './api/fetch';
import * as types from '../constants';

export const bootstrapLandingPage = async () => {
  const posts = await fetchPosts();
  const users = await fetchUsers();
  const albums = await fetchAlbums();
  const photos = await fetchPhotos();
  const comments = await fetchComments();
  return initializeLanding({ posts, users, albums, photos, comments });
};

export const initializeLanding = payload => ({
  type: types.BOOTSTRAP_LANDING,
  payload
});
