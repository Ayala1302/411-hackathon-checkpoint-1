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
  const [selection, setSelection] = useState("")

  useEffect(() => {
    if (selection === "all"){
      const getData = async () => {
        const response = await axios(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)
        setSearches(response.data.hits)
      }
      getData()
    }
    if (selection === "date"){
      const getDate = async () => {
        const response = await axios(`http://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=${tags}`)
        setSearches(response.data.hits)
      }
      getDate()
    }
    if (selection === "author"){
      const getAuthor = async () => {
        const response = await axios(`http://hn.algolia.com/api/v1/search_by_author?query=${query}&tags=${tags}`)
        setSearches(response.data.hits)
      }
      getAuthor()
    }
    const getData = async () => {
      const response = await axios(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${tags}`)
      setSearches(response.data.hits)
    }
    getData()
    
  }, [points, query, tags, selection]
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
      setSelection={setSelection}
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


export default App;
