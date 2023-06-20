import React, { useState } from 'react';
import Post from './components/Post';
import axios from "axios";
import Search from './components/Search';

function App() {
  axios.defaults.withCredentials = true;
  const [posts, setPosts] = useState([]);
  const [userText, setUserText] = useState('Enter Subreddit!');

  const serverUrl = process.env.REACT_APP_API_URL;
  console.log(serverUrl);

  const text = "\n Please enter another subreddit.";
  const e404Message = "The information for the chosen subreddit cannot be found." + text;
  const e400Message = " Empty Subreddit." + text;
  const e403Message = " Forbidden Subreddit" + text;
  const e500Message = " Internal Error " + text;

  const findSubreddit = (subreddit) => {
    setPosts([]);
    // Make a GET request to the server to fetch top posts for the specified subreddit
    axios.get(serverUrl, { params: { subreddit: subreddit }, withCredentials: true, })
      .then(topPosts => {
alert (topPosts.status)
        //  If the response data is valid but empty
        if (topPosts.data.length === 0) {
          alert(text)
          setUserText('Enter Subreddit!')
        }
        // Update the user text and set the posts array with the response data
        else {
          setUserText("top posts for: " + subreddit);
          setPosts(topPosts.data);
        }
      })
      // Handle errors and display appropriate alerts
      .catch((err) => {
        alert(err.response.status)
        setUserText('Enter Subreddit!')
        if (err.response && err.response.status === 400) {
          alert(e400Message);
        } else if (err.response && err.response.status === 403) {
          alert(e403Message);
        } else if (err.response && err.response.status === 404) {
          alert(e404Message);
        } else if (err.response && err.response.status === 500) {
          alert(e500Message);
        } else {
          alert(err);
        }
      });
  }

  return (
    <div className="App">
      <Search
        findSubreddit={findSubreddit}
        userText={userText}
      />
      <div className="wrapper">
        {posts.length !== 0 ? posts.map((post, index) =>
          <Post
            key={index}
            post={post}
          />) : ''}
      </div>
    </div>
  );
}

export default App;
