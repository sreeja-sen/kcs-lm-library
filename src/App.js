import { useState, useEffect } from "react";

import MainContent from "./Components/MainContent";

import "./App.css";

import bookLoader from "./bookLoader";
import { localJsonSearch } from "./bookSearcher";

function App() {
    const [masterBookData, setMasterBookData] = useState([]);
    const [tempBookData, setTempBookData] = useState([]);

    useEffect(() => { bookLoader().then(data => setMasterBookData(data)) }, []);
    useEffect(() => setTempBookData(masterBookData), [masterBookData]);

    const searchBooks = searchTerm => {
        const searchResults = localJsonSearch(masterBookData, searchTerm);
        setTempBookData(searchResults);
    }

    return (
        <div className="app">
            <header className="header">
                <div className="header-left">
                    <button>Full catalog</button>
                    <button>Request a book</button>
                    <button>Donate a book</button>
                </div>
                <div className="header-right">
                    <button>Account</button>
                </div>
            </header>

            <MainContent mode="featured" books={tempBookData} searchBooks={searchBooks} />
        </div>
    );
};


export default App;
