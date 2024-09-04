import { useState } from "react";
import "../css/search.css";
import { IconSearch } from "@tabler/icons-react"; // Importing the search icon from Tabler Icons

const Search = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div className="search-container">
      <IconSearch className="search-icon" onClick={toggleSearchBar} />
      <div className={`search-bar-container ${showSearchBar ? "active" : ""}`}>
        <input
          type="text"
          placeholder="Search based on Name, Title, Department, Date..."
          className="search-bar"
        />
      </div>
      <div className="search-actions">
        <button className="action-button add-button">Add Document</button>
        <button className="action-button edit-button">Edit Document</button>
        <button className="action-button user-button">Manage Users</button>
      </div>
    </div>
  );
};

export default Search;
