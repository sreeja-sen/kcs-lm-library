
function bookDataTransformer(bookJson) {
  const coverImgRegex = /^.*\/(.*\/.*\.(png|jpg))$/;
  const matches = bookJson.coverImg.match(coverImgRegex);
  const coverImgLocal = "covers/" + matches[1].replace("/", "");
  
  return { ...bookJson, coverImgLocal };
}

function FeaturedBookRenderer({ books }) {

  const renderedBooks = books
      .map(bookDataTransformer)
      .map((book) => <FeaturedBook book={book} />)

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
