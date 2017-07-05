const twitter = require('./twitter_api');

const spotify = require('./spotify_api');

const omdb = require('./omdb_api');

const fs = require('fs');


// user input variables
let command = process.argv[2];
let query = process.argv.slice(3).join(' ');

// will get input data from file
if(command === 'do-what-it-says'){
  let fileData = fs.readFileSync('random.txt', 'utf8');
  fileData = fileData.split(',');
  command = fileData[0];
  query = fileData[1];
}

function asyncLogResult(result){
  if(result){
    console.log(result);
    // append result data to a file for later usage
    fs.appendFile("log.txt" ,result + '\n', (err) => {
      if(err){
        // do something handle error
        throw err;
      }
    })
  }
}

// all the options available to the user
switch(command){
  case 'my-tweets':
    // process promise from Async API response data
    twitter().then((tweetContent) => {
      asyncLogResult(tweetContent);
    });
  break;
  case 'spotify-this-song':
    // process promise from Async API response data
    spotify(query).then((songContent) => {
      asyncLogResult(songContent)
    });
  break;
  case 'movie-this':
    // process promise from Async API response data
    result = omdb(query).then((movieContent) => {
      asyncLogResult(movieContent);
    });
  break;
  default:
    console.log('Try the following commands:\n\n'+
               'node liri.js my-tweets\n\n'+
               'node liri.js spotify-this-song "<song name here>"\n\n'+
               'node liri.js movie-this "<movie name here>"\n\n'+
               'node liri.js do-what-it-says');
  break;
}


