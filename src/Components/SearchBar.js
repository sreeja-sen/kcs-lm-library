import { useState } from "react";

function SearchBar({ searchCallback }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.code == "Enter") {
            handleSearch();
        }
    }

    const handleSearchClick = () => {
        console.log("Searching for:", searchTerm);
        handleSearch();
    };

    const handleSearch = () => {
        if (searchTerm) {
            searchCallback(searchTerm);
        }
    }

    return (
        <aside className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search for a book..."
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
            />
            <button
                className="search-button"
                onClick={handleSearchClick}
            >
                Search
            </button>
        </aside>
    );
}

export default SearchBar;