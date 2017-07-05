// Spotify API
const spotify = require('spotify');

// Function to get song data from Spotify
getSongInfo = (songName) => {
  
  // default value
  songName = songName || 'The Sign';
  
  spotify.search({ type:'track', query: songName }, (err,data) => {
    if ( !err ) {
      console.log(data);
      // Artists
      // Song Name
      // Preview Link
      // Album
    }
    else{
      console.log('Error occurred: ' + err);
    }
  })
}

module.exports = getSongInfo;