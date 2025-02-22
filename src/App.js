import "./App.css";

function App() {
    return (
        <div className="app">
            <header className="header"></header>
            <div className="content">
                <aside className="search-bar">
                    <input type="text" className="search-input" />
                    <button className="search-button"></button>
                </aside>
                <main className="main">
                    <div className="button-group">
                        <button className="button"></button>
                        <button className="button"></button>
                        <button className="button"></button>
                        <button className="button"></button>
                        <button className="button"></button>
                    </div>
                    <div className="books">
                        <article className="book"></article>
                        <article className="book"></article>
                        <article className="book"></article>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
