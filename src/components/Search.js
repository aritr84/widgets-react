import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = function () {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  //   console.log(results);
  useEffect(() => {
    // const search = async function () {
    //   const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
    //     params: {
    //       action: "query",
    //       list: "search",
    //       origin: "*",
    //       format: "json",
    //       srsearch: term,
    //     },
    //   });

    //   setResults(data.query.search);
    // };

    // const timeoutId = setTimeout(() => {
    //   if (term) {
    //     search();
    //   }
    // }, 500);

    console.log("Initial render ot term was changed");
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

/*
# Problem 1 -
we cannot mark the arrow function async inside the useEffect
# solution -
1 - declare a helper function

const search = async function () {
    await axios.get("api url");
};
search();

2 - declare a anonymous helper function and immediately invoke it

(async () => {
    await axios.get("api url")})();
    
    3 - use normal promises
    
    axios.get("url").then((response) => {
        console.log(response.data);
    });
    
    
    
# Problem 2 -
    In the wikipedia api result then {result.snippet} contains html tags
    like this -
    {projects Time management <span class="searchmatch">Program</span>, a part of planning <span class="searchmatch">Programming</span> (music), generating music electronically Radio <span class="searchmatch">programming</span>, act of scheduling content}
    
# Solution -
    take the html and rendering it out as html inside our app
        - we have to convert the string to jsx
        replace the normal {result.snippet} with 
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

    
    
    */
