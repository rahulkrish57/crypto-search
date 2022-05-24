import React from "react";
import { useGlobalContext } from "../context";

function SearchBar() {
  const {setSearchTerm} = useGlobalContext();
  // console.log(coins)
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            id="name"
            placeholder="search your desired crypto"
            onChange={(event) => {
              setSearchTerm(event.target.value)
            }}
            autoComplete="off"
          />
        </div>
      </form>
      
    </section>
  );
}

export default SearchBar;
