import homeImg from './home.jpg';

function loadHomeContent(node){
    // Remove previous children
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    //Add new content
    const img = new Image(600);
    img.src = homeImg;
    node.appendChild(img);
}

export default loadHomeContent;