
function FeaturedBookRenderer({ books }) {

  const renderedBooks = books
      .map((book) => <FeaturedBook book={book} key={book.bookId} />)

  return <div className="books">
      {renderedBooks}
  </div>
}

function FeaturedBook({ book }) {
  const { title, author, coverImg, coverImgLocal, genres } = book;

  return (
      <article className="book">
          <img className="image" src={coverImgLocal} />
      </article>
  );
}

export default FeaturedBookRenderer;
