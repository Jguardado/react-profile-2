exports.joinAlbumsWithPhotos = ({ albumData, photoData }) => {
  const newAlbumData = albumData.map(album => {
    const relevantPhotos = photoData.filter(photo => photo.albumId === album.id)
    album.photos = relevantPhotos;
    return album
  })
  return newAlbumData
}
