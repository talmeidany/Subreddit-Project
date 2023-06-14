const express = require('express')
const app = express()
const PORT = 3005;
const axios = require('axios')
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(express.static(buildPath))
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  const { subreddit } = req.query;

  if (!subreddit) {
    res.status(400).json({ message: 'Bad request' });
    return;
  }

  res.setHeader("Access-Control-Allow-Origin", urlClient)
  // Make a GET request to the Reddit API to fetch top posts for the specified subreddit
  axios
    .get("http://www.reddit.com/r/" + subreddit + "/top.json")
    .then((posts) => {
      // Extract relevant data from the response and create a new array of formatted posts
      let result = [];
      result = posts.data.data.children.map(child => {
        return {
          "id": child.data.id,
          "title": child.data.title,
          "url": child.data.permalink,
          "clicked": child.data.clicked,
          "score": child.data.score
        }
      });
      res.send(result).end();
    })
    .catch((error) => {
      // Handle different error cases and send appropriate error responses
      if (error.posts.status === 404) {
        return res.status(404).json({ error: 'Subreddit not found.' }).end;
      } else if (error.posts.status === 403) {
        return res.status(403).json({ error: 'Forbidden Subreddit.' }).end;
      } else {
        return res.status(500).json({ error: 'Internal server error.' }).end;
      }
    });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('reddit-app/build'));
}

app.listen(PORT, () => {
  console.log(`Reddit app listening on port ${PORT}`)
})
