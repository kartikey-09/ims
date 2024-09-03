import "../css/search.css";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for based on Name, Title, Department, Date......"
        className="search-bar"
      />
    </div>
  );
};

export default Search;
