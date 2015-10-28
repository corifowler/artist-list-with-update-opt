function processData(data) {
  return data.map(function(item) {
    return `
      <div class="artist-list-item" data-artist-id="${item.objectId}">
        <span>${item.Artist}</span>
      </div>
    `;
  }).join('');
}

export default function(data) {
  return `
    <div class="artist-list">
      <h1>Artists</h1>
      <div>${processData(data)}</div>
    </div>
  `;
}