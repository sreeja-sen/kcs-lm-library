import SearchBar from "./SearchBar";
import FeaturedBookRenderer from "./FeaturedBooks";
import BookFullDisplay from "./BookFullDisplay";

function MainContent({ mode, books, searchBooks }) {
  
  return <div className="content">
      <div className="content-wrapper">
          <SearchBar searchCallback={searchBooks}/>

          <main className="main">
              <div className="button-group">
                  <button className="button">A</button>
                  <button className="button">B</button>
                  <button className="button">C</button>
                  <button className="button">D</button>
                  <button className="button">E</button>
              </div>

              { mode == "featured" && <FeaturedBookRenderer books={books} /> }

              { mode == "spotlight" && (books.length > 0 ?
                  <BookFullDisplay book={books[0]} />
                  :
                  <span>Book information not found.</span>)
              }

              { mode == "searched" && <></> }
          </main>
      </div>
  </div>
}

export default MainContent;
