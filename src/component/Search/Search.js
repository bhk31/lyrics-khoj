import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form id={styles.lyrics_search_form} action="#">
      <input
        type="text"
        id={styles.song}
        name="song"
        placeholder="Enter Artist/Title"
      />
      <input type="button" value="Search" id={styles.search} />
    </form>
  );
};

export default Search;
