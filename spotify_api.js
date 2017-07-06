// api keys
const keys = require('./keys');
// Spotify API
const SpotifyWebApi = require('spotify-web-api-node');

// spotify credentials 
const spotifyApi = new SpotifyWebApi(keys.spotifyKeys);

// setting Spotify Authorization Access Token (will expire)
spotifyApi.setAccessToken('BQDNtaqAve5aYs6v8XZWDeg-efF8chCrZm88w49RKWCJyqguGHPihKjO-ZVpmwQNChD4jnIaVty3owH56X3u0pTmC8QvYh_tHP6_stXGtltfarkBZUI7dB3zkEacOkK-y7hlixHWKJvoXYg');
// song data variable
let songContent = 'Top 3 Spotify Results:\n';

// Function to get song data from Spotify
getSongInfo = (songName) => {
  
  // default value
  songName = songName || 'The Sign';
  
  // Spotify API request for song data and return a promise
  return spotifyApi.searchTracks('track:'+songName,{limit:3})
    .then((data) => {
      data.body.tracks.items.forEach((song) =>{
        songContent += ('\nArtists: '+song.artists[0].name+
               '\nSong: '+song.name+
               '\nPreview: '+song.href+
               '\nAlbum: '+song.album.name+
               '\n\n');
      })
      
      // return song data to be processed upon return
      return songContent;
    
    // Handle error
    }).catch((error) => {
      console.error(error);
    });
  
}

//Export module
module.exports = getSongInfo;