import menuImg from './menu.jpg';

function loadMenuContent(node){
    // Remove previous children
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    //Add new content
    const img = new Image(600);
    img.src = menuImg;
    node.appendChild(img);
}

export default loadMenuContent;