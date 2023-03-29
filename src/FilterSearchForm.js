import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./App.css";

function FilterSearchForm(props) {
  const { setTags, handlePopular, setQuery, query } = props;

//   const handleChange = (e) => {
//     // console.log(e.target.value);
//     setStories(e.target.value);
//   };

  return (
    <div className="App">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div className="search-header">
        <div className="header-logo">
          <img
            className="logo"
            src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png"
            alt="logo"
          />
          <h2>Search Hacker News</h2>
        </div>
        <TextField
          className="search-bar"
          id="outlined-basic"
          label="Search stories by title, url, or author"
          variant="outlined"
          onChange={e => setQuery(e.target.value)}
        />
        <h2 className="settings">Settings</h2>
      </div>

      <div className="search-results">
        <form className="search-filters-container">
          Search
          <select
            onChange={(e) => {
              setTags(e.target.value);
            }}
          >
            <option value="">All</option>
            <option value="stories">Stories</option>
            <option value="comment">Comment</option>
          </select>
          by
          <select>
            <option value="comment" onChange={handlePopular}>
              Popularity
            </option>
            <option>Date</option>
          </select>
          for
          <select>
            <option>All Time</option>
            <option>Last 24h</option>
            <option>Past Week</option>
            <option>Past Month</option>
            <option>Past Year</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default FilterSearchForm;
