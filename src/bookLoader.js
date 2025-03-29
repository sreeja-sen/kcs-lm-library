
// async function asynBookLoader() {
//     const response = await fetch("books.json");
//     const data = await response.json();
//     return data;
// }

function bookLoader() {
    const promise = new Promise((success, error) => fetch("books.json")
        .then(response => response.json())
        .then(data => success(data)))

    return promise;
}

export default bookLoader;
