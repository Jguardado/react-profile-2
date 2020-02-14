exports.joinAlbumsWithPhotos = ({ albumData, photoData }) => albumData.map(album => {
  album.photos = photoData.filter(photo => photo.albumId === album.id)
  return album
})
