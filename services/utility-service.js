function createElementWithString(elementType, contentString){

    const element = document.createElement(elementType);
    const node = document.createTextNode(contentString);
    element.appendChild(node);
    return element;

}
