// Database returns this as the model for album.
class AlbumModel {
  constructor(user, album, artist, imageUrl, rating) {
    // a string, userName
    this.user = user;

    // a string
    this.album = album;

    // a string
    this.artist = artist;

    // a string
    this.imageUrl = imageUrl;

    // an int
    this.rating = rating;
  }
}

export default AlbumModel;
