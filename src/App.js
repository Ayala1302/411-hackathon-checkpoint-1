import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

import FilterSearchForm from "./FilterSearchForm";
import ListArticle from "./ListArticle";

function App() {
  const [searches, setSearches] = useState([]);
  const [tags, setTags] = useState("");
  const [points, setPoints] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)
      setSearches(response.data.hits)
    }
    getData()
  }, [points, query, tags]
  )

  const handlePopular = (e) => {
    const popular = [...searches]
    console.log(e.target.value);
    setPoints(e.target.value);
    if (e.target.value === "popularity") {
      popular.sort((a, b) => b.points - a.points)
      setSearches(popular)
    }

    if (e.target.value === "date") {
      popular.sort((a, b) => b.created_at - a.created_at)
      setSearches(popular)
    }
  }

  return (
    <div className="App">
      <FilterSearchForm
      onChange={handlePopular}
      query={query}
      setQuery={setQuery}
      setTags={setTags}
      tags={tags}
      />
      <ListArticle searchResults={searches} />
    </div>
    );
}
  


  // const handlePopular = (e) => {
  //   console.log(e.target.value);
  //   setTags(e.target.value);
  // }

  
  
  
  
  
  
  
  
  
  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  //   setStories(e.target.value);

  //   axios
  //     .get(`http://hn.algolia.com/api/v1/search?query=${e.target.value}`)
  //     .then((result) => {
  //       console.log("data", result.data.hits);
  //       setSearchResults(result.data.hits);
  //     });
  // };

  // return (
  //   <div className="App">
  //     <Box
  //       component="form"
  //       sx={{
  //         "& > :not(style)": { m: 1, width: "25ch" },
  //       }}
  //       noValidate
  //       autoComplete="off"
  //     ></Box>
  //     <div className="search-header">
  //       <div className="header-logo">
  //         <img
  //           className="logo"
  //           src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png"
  //           alt="logo"
  //         />
  //         <h2>Search Hacker News</h2>
  //       </div>
  //       <TextField
  //         className="search-bar"
  //         id="outlined-basic"
  //         label="Search stories by title, url, or author"
  //         variant="outlined"
  //         onChange={handleChange}
  //       />
  //       <h2 className="settings">Settings</h2>
  //     </div>

  //     <div className="search-results">
  //       <form className="search-filters-container">
  //         Search
  //           <select onChange={(e) => {setTags(e.target.value)}}>
  //               <option value=''>All</option>
  //               <option value='story'>Story</option>
  //               <option value='comment'>Comment</option>
  //           </select>
  //           by
  //           <select>
  //               <option value='comment' onChange={handlePopular}>Popularity</option>
  //               <option>Date</option>
  //           </select>
  //           for
  //           <select>
  //               <option>All Time</option>
  //               <option>Last 24h</option>
  //               <option>Past Week</option>
  //               <option>Past Month</option>
  //               <option>Past Year</option>
  //           </select>
          
          
  //         {/* <Select
  //           className="search-filters"
  //           labelId="demo-simple-select-label"
  //           id="demo-simple-select"
  //           value={stories}
  //           label="Stories"
  //           onchange={handleChange}
  //         >
  //           <MenuItem>All</MenuItem>
  //           <MenuItem>Stories</MenuItem>
  //           <MenuItem>Comments</MenuItem>
  //         </Select>
  //         by
  //         <Select>
  //           <option value="popularity">Popularity</option>
  //           <option value="date">Date</option>
  //         </Select>
  //         for
  //         <Select>
  //           <option>All Time</option>
  //           <option>Last 24h</option>
  //           <option>Past Week</option>
  //           <option>Past Month</option>
  //           <option>Past Year</option>
  //         </Select> */}
  //       </form>

  //       {searchResults.map((article) => (
  //         <div>
  //           <h2>{article.title}</h2>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );


export default App;
