import './style.css';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';

// Tab container
const tabContainer = document.querySelector('#content');

// Create tabs
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');

//Add text to divs
homeDiv.textContent = 'Home';
menuDiv.textContent = 'Menu';
contactDiv.textContent = 'Contact';

// Add event listeners
homeDiv.addEventListener('click', loadHomeContent);
menuDiv.addEventListener('click', loadMenuContent);
contactDiv.addEventListener('click', loadContactContent);

// Append to main div
tabContainer.appendChild(homeDiv);
tabContainer.appendChild(menuDiv);
tabContainer.appendChild(contactDiv);