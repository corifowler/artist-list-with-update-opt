function processData(data) {
  return data.map(function(item) {
    return `
      <div class="artist-list-item" data-artist-id="${item.objectId}">
        <img src="${item.Photo}">
        <span>${item.Artist}</span>
        <hr>
      </div>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="artist-list">
      <h1>Artists</h1>
      <div>${processData(data)}</div>
      <button class="create-artist"><i class="fa fa-plus"></i> Add New</button>
    </div>
  `;
}