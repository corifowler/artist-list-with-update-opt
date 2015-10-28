export default function() {
  return `
    <div class="add-artist">
      <form>
        <label>Artist: <input type="text" name="Artist"></label>
        <label>Song: <input type="text" name="SongTitle"></label>
        <label>Album: <input type="text" name="Album"></label>
        <label>Twitter: <input type="text" name="Twitter"></label>
        <label>Photo URL: <input type="text" name="Photo"></label>
      </form>
      <button class="add-new-artist">Add New Artist</button>
    </div>
  `;
}