// write a function to retrieve a blob of json
// make an ajax request! Use 'fetch' function.
// use http://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums() {
  // fetch returns a promise. promise is resolved with an object that represent
  // the underlying request.
  // We need to use callback then to write code, which runs when promise is resolved.
  // This then is called with request received by fetch.
  // res.json again returns a promise which is resolved when json is ready to work with.
  // So we need to append another then to work on this json.
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}

const fetchAlbumsEs2017 = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
};

fetchAlbumsEs2017();
