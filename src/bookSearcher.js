
function localJsonSearch(booksJson, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  function searchPredicate(book) {
    if (book.title.toLowerCase().includes(searchTerm)) return true;
    if (book.author.toLowerCase().includes(searchTerm)) return true;
  }

  const filteredBooks = booksJson.filter(searchPredicate);
  return filteredBooks;
}


export { localJsonSearch };
