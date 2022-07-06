import './style.css';
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact';

// Tab container
const mainDiv = document.querySelector('#content');

// Create tabs
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');

const contentContainer = document.createElement('div');
contentContainer.classList.add('contentDiv');

//Add text to divs
homeDiv.textContent = 'Home';
menuDiv.textContent = 'Menu';
contactDiv.textContent = 'Contact';

// Add event listeners
homeDiv.addEventListener('click', () => loadHomeContent(contentContainer) );
menuDiv.addEventListener('click', () => loadMenuContent(contentContainer) );
contactDiv.addEventListener('click', () => loadContactContent(contentContainer) );

// Append to main div
mainDiv.appendChild(homeDiv);
mainDiv.appendChild(menuDiv);
mainDiv.appendChild(contactDiv);
mainDiv.appendChild(contentContainer)