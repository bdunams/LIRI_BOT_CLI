// Request for use with OMDB API
const request = require('request');

// Function to get movie data from OMDB API
getMovie = (movieName) => {
  
  // default value
  movieName = movieName || 'Mr. Nobody';
  
  // Then run a request to the OMDB API with the movie specified
  let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&apiKey=40e9cece";
  
  let movieContent = '';

  // A request to the queryUrl
  request(queryUrl, (error, response, body) => {
    if(!error){
      if(response.statusCode === 200){
        let movie = JSON.parse(body);
        movieContent = 'Title: '+movie.Title+
              '\nYear: '+ movie.Year+
              '\nRating: '+ movie.Ratings[0].Value+
              '\nMade in: '+ movie.Country+
              '\nPlot: '+ movie.Plot+
              '\nActors: '+ movie.Actors+
              '\nMore Info: '+ movie.Website+
              '\nLanguage: '+ movie.Language;
        
        console.log(movieContent)
        
      }
    }
    else{
      console.log(error);
    }
  
    return movieContent;
  })
}

module.exports = getMovie;
