const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

}

const openBtn = document.getElementById("button")
const closeBtn = document.getElementById("cancel")
const form = document.getElementById("form")

openBtn.addEventListener("click", () => {
  form.classList.add("open");
})

closeBtn.addEventListener("click", () => {
  form.classList.remove("open");
})

// const title = document.getElementById("title").value;
// const author = document.getElementById("author").value;
// const pages = document.getElementById("pages").value;
// const read = document.querySelector('input[name="read"]:checked');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = formData.get('pages');
  const read = formData.get('read') === 'on' ? 'have read' : 'haven\'t read';
  const book = new Book(title, author, pages, read);
  form.classList.remove("open");
  addBookToLibrary(book);
})

function addBookToLibrary(book) {
  const books = document.querySelector('#books');
  const titleBox = document.createElement('div');
  const authorBox = document.createElement('div');
  const pagesBox = document.createElement('div');
  const readBox = document.createElement('div');
  const removeButton = document.createElement('button')
  books.append(titleBox);
  books.append(authorBox);
  books.append(pagesBox);
  books.append(readBox);
  books.append(removeButton);
  removeButton.setAttribute('id', 'button');
  removeButton.innerText = "-";
  titleBox.innerText = book.title;
  authorBox.innerText = book.author;
  pagesBox.innerText = book.pages;
  readBox.innerText = book.read;
  removeButton.addEventListener('click', () => {
    titleBox.remove()
    authorBox.remove()
    pagesBox.remove()
    readBox.remove()
    removeButton.remove()
  })
}


const div = document.createElement('div')