import './style.css';

const tabContainer = document.querySelector('#content');

const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');

homeDiv.textContent = 'Home';
menuDiv.textContent = 'Menu';
contactDiv.textContent = 'Contact';

tabContainer.appendChild(homeDiv);
tabContainer.appendChild(menuDiv);
tabContainer.appendChild(contactDiv);