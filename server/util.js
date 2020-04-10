exports.joinAlbumsWithPhotos = ({ albumData, photoData }) => albumData.map(album => {
  album.photos = photoData.filter(photo => photo.albumId === album.id)
  return album
})

exports.joinPostsWithComments = ({ posts, comments }) => posts.map(post => {
  post.comments = comments.filter(comment => comment.postId === post.id)
  return post
})
