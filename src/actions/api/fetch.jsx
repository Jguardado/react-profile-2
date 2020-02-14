export const fetchPosts = async () => {
  const response = await fetch('/posts');
  let data = await response.json();
  return data;
};

export const fetchAlbums = async () => {
  const response = await fetch('/albums');
  let data = await response.json();
  return data;
};
export const fetchComments = async () => {
  const response = await fetch('/comments');
  let data = await response.json();
  return data;
};
export const fetchUsers = async () => {
  const response = await fetch('/users');
  let data = await response.json();
  return data;
};
export const fetchPhotos = async () => {
  const response = await fetch('/photos');
  let data = await response.json();
  return data;
};
