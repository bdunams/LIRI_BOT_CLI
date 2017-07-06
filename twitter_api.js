// api keys
const keys = require('./keys');
// twitter api
const Twitter = require('twitter');

// Create a new Twitter client
const client = new Twitter(keys.twitterKeys);
// Client parameters for retriving data
let params = {screen_name: 'bdunams'};
// tweet data variable
let tweetContent = '';

// Function to get tweets
getTweets = () => {
  
  // Twitter get method to retrieve data from API and return promise
  return client.get('statuses/user_timeline', params).then( (tweets) => {
   
    // loop through tweets
    tweets.forEach((userTweet)=>{
      tweetContent +=('Tweet: '+userTweet.text+
                     '\nTweeted at: '+userTweet.created_at+'\n\n');
    })
      
    // return tweet data to be processed
    return tweetContent;
  
  // Handle error
  }).catch((error) => {
    console.log(error);
  })
  
}

// Export module
module.exports = getTweets;
