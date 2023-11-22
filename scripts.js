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
    let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${ userInput }&key=${ apiKey }`);
    let bookData = await response.json();

    // Empties all the previous visible books
    let cards = document.getElementsByClassName("cards")[0]
    empty(cards)

    // Prints 5 titles
    for (i = 0; i < 10; i++)
    {

      // Checks if a thumbnail exists and selects the photo to use accordingly
      if (bookData.items[i].volumeInfo.imageLinks || 0)
        bookImage = `<img src='${bookData.items[i].volumeInfo.imageLinks.thumbnail}'>`
      else {
        bookImage = `<img src="no-book-cover-available-4214562573-removebg-preview.png">`
      }

      // Creates a paragraph tag for the title
      inputTitle = `<p>${bookData.items[i].volumeInfo.title}</p>`

      // Creates a new div with all the elements needed
      newDiv = `<div class="card"> ${bookImage} ${inputTitle} </div> `

      // Inserts the new div into the html
      document.getElementsByClassName("cards")[0].insertAdjacentHTML('beforeend', newDiv)

    }
    
    //Catches error
  } catch(error) {
    console.error(`ERROR: ${error}`)
  }

  

}

