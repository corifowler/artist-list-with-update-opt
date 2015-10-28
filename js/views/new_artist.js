export default function() {
  return `
    <div class="add-artist">
      <form>
        <label>Artist: <input type="text" class="Artist"></label>
        <label>Song: <input type="text" class="SongTitle"></label>
        <label>Album: <input type="text" class="Album"></label>
        <label>Twitter: <input type="text" class="Twitter"></label>
        <label>Photo URL: <input type="text" class="Photo"></label>
      </form>
      <button class="add-new-artist">Add New Artist</button>
    </div>
  `;
}