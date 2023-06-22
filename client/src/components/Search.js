import { useState } from "react";
import "./Search.css"

function Search(props) {
  const [subreddit, setSubreddit] = useState('');
  const [filterWord, setFilterWord] = useState('');

  const handleSearch = () => {
    props.findSubreddit(subreddit, filterWord);
    setFilterWord('');
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
        <input className="text"
          placeholder="Enter Subreddit..."
          value={subreddit}
          onChange={e => setSubreddit(e.target.value)}
        />
         <input className="text"
          placeholder="Enter a filter word..."
          value={filterWord}
          onChange={e => setFilterWord(e.target.value)}
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
