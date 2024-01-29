/*
  Json-server => Pare criar  um servidor de dados em JSON para simular uma API RESTful.

  No Windows, usar o terminal bash:

  npm install -g json-server
  json-server --watch artists.json --port 3000
*/

const searchInput = document.getElementById('search-input');
const resultsArtists = document.getElementById('result-artist');
const resultsPlaylist = document.getElementById('result-playlists');
const artistName = document.getElementById('artist-name');
const artistImage = document.getElementById('artist-img');

function requestApi(searchTerm) {
  resultsPlaylist.classList.add("hidden")
  const url = `http://localhost:3000/artists`;

  fetch(url).then((response) => response.json())
  .then((result) => result.map((artist) => {
    const name = artist.name.toLowerCase()
    const text = searchTerm.toLowerCase()
   
    if(name.includes(text)){
      artistName.innerText = artist.name;
      artistImage.src = artist.urlImg;
    }
  }))

  resultsArtists.classList.remove('hidden');
};

document.addEventListener('input', () => {
  const text = searchInput.value;

  if (text === ''){
    resultsPlaylist.classList.remove('hidden');
    resultsArtists.classList.add('hidden');

    return;
  };

  console.log(text);
  requestApi(text)
});

