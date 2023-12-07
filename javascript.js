// let myLibrary = [];

// function Book(title, author, pages,read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.toggleRead = function () {
//     this.read = !this.read;
//     console.log(this.read);
// }

// function toggleRead(index) {
//     myLibrary[index].toggleRead();
//     render()
// }


// function render() {
//     let libraryEl = document.querySelector("#library");
//     libraryEl.innerHTML = "";
//     for (let i = 0; i < myLibrary.length; i++) {
//         let book = myLibrary[i];
//         let bookEl = document.createElement("div");
//         bookEl.setAttribute("class", "book-card");
//         bookEl.innerHTML = `
//         <div class="card-header">
//         <h3 class="title">${book.title}</h3>
//         <h3 class="author">${book.author}</h3>
//     </div>
//     <div class="card-body">
//         <p>${book.pages} pages</p>
//         <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
//         <button class="remove-btn" onClick="removeBook(${i})">Remove</button>
//         <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
//     </div>
//         `;
//         libraryEl.appendChild(bookEl);
//     }
// }

// function removeBook(index) {
//     console.log(index);
//     myLibrary.splice(index,1);
//     render();
// }

// function addBookToLibrary() {
// let title = document.querySelector("#title").value;
// let author = document.getElementById("author").value;
// let pages = document.getElementById("pages").value;
// let read = document.getElementById("read").checked;
// let newBook = new Book(title, author, pages, read);
// myLibrary.push(newBook);
// render();
// }

// let newBookbtn = document.querySelector("#new-book-btn");
// newBookbtn.addEventListener("click", function () {
//     let newBookForm = document.querySelector("#new-book-form");
    
//     newBookForm.style.display = "block";
// })
// document.querySelector("#new-book-form").addEventListener("submit", function(event){
//     event.preventDefault();
//     addBookToLibrary();
// })

// Class representing a Book
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // Method to toggle the read status of the book
    toggleRead() {
        this.read = !this.read;
        console.log(this.read);
    }
}

// Class representing a Library
class Library {
    constructor() {
        // Array to store the books in the library
        this.myLibrary = [];
    }

    // Method to toggle the read status of a book at a given index
    toggleRead(index) {
        this.myLibrary[index].toggleRead();
        this.render();
    }

    // Method to remove a book at a given index
    removeBook(index) {
        this.myLibrary.splice(index, 1);
        this.render();
    }

    // Method to add a new book to the library
    addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        this.myLibrary.push(newBook);
        this.render();
    }

    // Method to render the library on the web page
    render() {
        const libraryEl = document.querySelector("#library");
        libraryEl.innerHTML = "";

        for (let i = 0; i < this.myLibrary.length; i++) {
            const book = this.myLibrary[i];

            // Create a new div element for each book
            const bookEl = document.createElement("div");
            bookEl.setAttribute("class", "book-card");

            // Populate the inner HTML of the book element
            bookEl.innerHTML = `
                <div class="card-header">
                    <h3 class="title">${book.title}</h3>
                    <h3 class="author">${book.author}</h3>
                </div>
                <div class="card-body">
                    <p>${book.pages} pages</p>
                    <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                    <button class="remove-btn" onClick="library.removeBook(${i})">Remove</button>
                    <button class="toggle-read-btn" onclick="library.toggleRead(${i})">Toggle Read</button>
                </div>
            `;

            // Append the book element to the library container
            libraryEl.appendChild(bookEl);
        }
    }
}

// Create an instance of the Library class
const library = new Library();

// Event listener for the form submission
document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    // Add the new book to the library
    library.addBookToLibrary(title, author, pages, read);
});

// Event listener for the "New Book" button
document.querySelector("#new-book-btn").addEventListener("click", function () {
    const newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});
