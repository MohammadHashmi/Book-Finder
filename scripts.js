
// Creates an async function which returns the data of a book from the input of a user
async function searchBooks() {

  // Declares a variable for an API key for google books
  let apiKey = 'AIzaSyAA2EnEj0qB9xtfoLsN2RrQQDKLq40GHHs';
  let title = document.getElementById("search").value;
  console.log(title)

  let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${ title }s&key=${ apiKey }`);
  let bookData = await response.json();

  return bookData
}

searchBooks()
  .then(data => console.log(data))
  .catch(reason => console.log(message.reason));