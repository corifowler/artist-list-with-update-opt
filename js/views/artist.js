export default function(data) {
  return `
    <div class="artist">
      <button class="back-button" data-to="artists">
        <i class="fa fa-arrow-left"></i>
      </button>
      <div class="image"><img src="${data.Photo}"></div>
      <h2>Artist Profile</h2>
      <div><i class="fa fa-user"></i>${data.Artist}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Song Title: ${data.SongTitle}</div>
      <hr>
      <div><i class="fa fa-chevron-right"></i>Album Name: ${data.Album}</div>
      <hr>
      <div class="twitter"><i class="fa fa-twitter"></i>${data.Twitter}</div>
    </div>`;
}