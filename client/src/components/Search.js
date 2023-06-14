import { useState } from "react";
import "./Search.css"

function Search(props) {
  const [subreddit, setSubreddit] = useState('');

  const handleSearch = () => {
    props.findSubreddit(subreddit);
    setSubreddit('');
  };

  return (
    <header>
      <input
        className="subreddit_input"
        value={props.userText}
        readOnly
      />
      <div className="search-container">
        <input className="userText"
          placeholder="Enter Subreddit..."
          value={subreddit}
          onChange={e => setSubreddit(e.target.value)}
        />
        <button className="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  )
}

export default Search;
