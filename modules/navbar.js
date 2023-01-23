/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-cycle
import { sectionList, sectionAdd, sectionContact } from '../index.js';

// toggle with navbar
const loadList = () => {
  sectionList.classList.replace('hide', 'show');
  sectionAdd.classList.replace('show', 'hide');
  sectionContact.classList.replace('show', 'hide');
};
const loadAdd = () => {
  sectionAdd.classList.replace('hide', 'show');
  sectionList.classList.replace('show', 'hide');
  sectionContact.classList.replace('show', 'hide');
};
const loadContact = () => {
  sectionContact.classList.replace('hide', 'show');
  sectionAdd.classList.replace('show', 'hide');
  sectionList.classList.replace('show', 'hide');
};
export { loadList, loadAdd, loadContact };