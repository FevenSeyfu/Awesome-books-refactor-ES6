/* eslint-disable import/no-cycle */
import { loadList, loadAdd, loadContact } from './modules/navbar.js';
import { Book } from './modules/library.js';

// nav links variables
const navList = document.getElementById('list');
const navAdd = document.getElementById('add-new');
const navContact = document.getElementById('contact');
// sections variable
const sectionList = document.getElementById('list-books');
const sectionAdd = document.getElementById('add-book');
const sectionContact = document.getElementById('contact-section');
// variables
const title = document.getElementById('title');
const author = document.getElementById('author');
const listContainer = document.getElementById('display-book-list');
const addbookForm = document.getElementById('add-form');

// Add eventlistener to nav links
navList.addEventListener('click', loadList);
navAdd.addEventListener('click', loadAdd);
navContact.addEventListener('click', loadContact);

const newBook = new Book();

// add book method call
addbookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.addBooks();
});

// diplay List method call
window.addEventListener('load', (e) => {
  e.preventDefault();
  Book.displayList();
});

// remove book from collection
document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    e.preventDefault();
    const row = e.target.parentNode.parentNode;
    const index = row.getAttribute('data-id');
    Book.removeBooks(index);
  }
});

// sections to display
export {
  sectionList, sectionAdd, sectionContact,
};
// export to library
export {
  title, author, listContainer, addbookForm,
};