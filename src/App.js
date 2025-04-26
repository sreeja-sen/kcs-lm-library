import { useState, useEffect } from "react";

import FeaturedBookRenderer from "./Components/FeaturedBooks";
import BookFullDisplay from "./Components/BookFullDisplay";

import "./App.css";

import bookLoader from "./bookLoader";

function App() {
    const [tempBookData, setTempBookData] = useState([]);
    const [tempBookFull, setTempBookFull] = useState(undefined);

    useEffect(() => bookLoader().then(data => setTempBookData(data)), []);
    useEffect(() => setTempBookFull(tempBookData[0]), [tempBookData]);
    
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
            <div className="content">
                <div className="content-wrapper">
                    <aside className="search-bar">
                        <input type="text" className="search-input" placeholder="..." />
                        <button className="search-button">Search</button>
                    </aside>
                    <main className="main">
                        <div className="button-group">
                            <button className="button">A</button>
                            <button className="button">B</button>
                            <button className="button">C</button>
                            <button className="button">D</button>
                            <button className="button">E</button>
                        </div>
                        {/* <FeaturedBookRenderer books={tempBookData} /> */}
                        {tempBookFull ?
                            <BookFullDisplay book={tempBookFull} />
                            :
                            <span>Book information not found.</span>
                        }
                    </main>
                </div>
            </div>
        </div>
    );
};


export default App;
