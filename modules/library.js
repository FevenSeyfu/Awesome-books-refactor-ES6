/* eslint-disable import/no-cycle */
import { title, author, listContainer } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export class Book {
  constructor() {
    this.booksCollection = [];
  }

  addBooks() {
    const storedData = JSON.parse(localStorage.getItem('StoreBook')) || [];
    const newBook = {
      id: storedData.length + 1,
      title: title.value,
      author: author.value,
    };
    this.booksCollection.push(newBook);
    storedData.push(newBook);
    localStorage.setItem('StoreBook', JSON.stringify(storedData));
    window.location.reload();
  }

  static displayList() {
    const BooksList = localStorage.getItem('StoreBook');
    const parseBooksList = JSON.parse(BooksList);
    parseBooksList.forEach((book) => {
      const bookList = document.createElement('tr');
      bookList.classList.add('book-list');
      bookList.setAttribute('data-id', book.id);
      listContainer.append(bookList);
      bookList.innerHTML = `
          <td class="book-author col-1">"${book.title}" by ${book.author}</td>
          <td><button class="remove-btn col-2" type="reset">Remove</button></td>`;
    });
  }

  static removeBooks(x) {
    let BooksList = localStorage.getItem('StoreBook');
    BooksList = JSON.parse(BooksList);
    x = parseFloat(x);
    const index = BooksList.findIndex((book) => book.id === x);
    BooksList.splice(index, 1);
    localStorage.setItem('StoreBook', JSON.stringify(BooksList));
    window.location.reload();
  }
}
