const getTopArtists = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists';
const getInfoArtist = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo'
const key = '28042ad7f351d7a654912f41d0de24b4';
const country = 'colombia';

const URL_ARTISTS = `${getTopArtists}&country=${country}&api_key=${key}&format=json`;

export function getArtists(){
  return fetch(URL_ARTISTS)
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

export function getArtist(name) {
  name = encodeURI(name);
  const URL_ARTIST = `${getInfoArtist}&artist=${name}&api_key=${key}&format=json`
  return fetch(URL_ARTIST)
    .then(response => response.json())
    .then(data => data.artist)
    .then(artist => {
      return {
        name: artist.name,
        bio: artist.bio.summary.replace(/<\/?a[^>]*>/g, ""),
        image: artist.image[4]['#text']
      }
    })
    .catch(err => console.error(err));
}