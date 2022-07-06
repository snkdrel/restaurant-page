import contactImg from './contact.jpg';

function loadContactContent(node){
    // Remove previous children
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
    //Add new content
    const img = new Image();
    img.src = contactImg;
    node.appendChild(img);
}

export default loadContactContent;