
// async function asynBookLoader() {
//     const response = await fetch("books.json");
//     const data = await response.json();
//     return data;
// }

// TODO: Formalise definition of middleware for book loader
function bookLoader() {
    const promise = new Promise((success, error) => fetch("books.json")
        .then(response => response.json())
        .then(data => {
            data = data.map(bookDataTransformer);
            success(data);
        }))

    return promise;
}

function bookDataTransformer(bookJson) {
    const coverImgRegex = /^.*\/(.*\/.*\.(png|jpg))$/;
    const matches = bookJson.coverImg.match(coverImgRegex);
    const coverImgLocal = "covers/" + matches[1].replace("/", "");
    
    return { ...bookJson, coverImgLocal };
  }

export default bookLoader;
