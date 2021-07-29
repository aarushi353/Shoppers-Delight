import React from "react";
import "./Searchbar.css";
function SearchBar() {
  return ( <section className="search">
      <center><form className="searchform">
        <input type="email" placeholder="Search" />
        <input type="submit" value="Search" />
      </form></center>
    </section>
  );
}

export default SearchBar;
