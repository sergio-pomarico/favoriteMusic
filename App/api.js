const apiURL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists';
const key = '28042ad7f351d7a654912f41d0de24b4';
const country = 'colombia';

const URL = `${apiURL}&country=${country}&api_key=${key}&format=json`;

function getArtists(){
  return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        name: artist.name,
        image: artist.image[3]['#text'],
        likes: 140,
        comments: 20,
      }  
    }))
    .catch(err => console.error(err));
}

export default getArtists