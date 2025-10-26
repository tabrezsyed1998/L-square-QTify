import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from './Searchbar.module.css'

const SearchBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder="Search an album of your choice"
        />
        <button className={styles.searchButton}>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </div>
    </>
  );
};
export default SearchBar;
