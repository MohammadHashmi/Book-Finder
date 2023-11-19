// Creates a function which removes all the children of an element
function empty(element) {
  while(element.firstElementChild) {
    element.firstElementChild.remove();
  }
}

// Creates an async function which returns the data of a book from the input of a user
async function searchBooks() {

  // Declares a variable for an API key for google books
  let apiKey = 'AIzaSyAA2EnEj0qB9xtfoLsN2RrQQDKLq40GHHs';

  // Gets the user inputted title
  let userInput = document.getElementById("search").value;

  // logs and returns book data based on user
  try {
    // Gets information from the API
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${ userInput }s&key=${ apiKey }`);
    let bookData = await response.json();
    console.log(bookData)
    // Empties all the previous visible books
    let list = document.getElementById("book-info")
    empty(list)

    // Prints 5 titles
    for (i = 0; i < 10; i++)
    {
      inputTitle = `<li>${bookData.items[i].volumeInfo.title}</li>`
      document.getElementById("book-info").insertAdjacentHTML('beforeend', inputTitle)
    }
    
    //Catches error
  } catch(error) {
    console.error(`ERROR: ${error}`)
  }

  

}

