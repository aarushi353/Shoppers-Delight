import React from "react";
import "./Searchbar.css";
function SearchBar() {
  return ( <section className="search">
      <form className="searchform">
        <input type="email" placeholder="Search" />
        <input type="submit" value="Search" />
      </form>
    </section>
  );
}

export default SearchBar;
