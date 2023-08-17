const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

}

function addBookToLibrary() {
  myLibrary.push(atomicHabits);
}

document.querySelector("#button").onclick = addBookToLibrary

const atomicHabits = new Book('Atomic Habits', 'James Clear', '257 pages', 'Reading it')