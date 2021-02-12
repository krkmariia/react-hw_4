import React from 'react';
import ReactDOM from 'react-dom';

const listItem = React.createElement("li", {}, "First li-element;")
const listItem1 = React.createElement("li", {}, "Second li-element;")
const listItem2 = React.createElement("li", {}, "Third li-element;")
const listItem3 = React.createElement("li", {}, "Fourth li-element;")

const unmarkedList = React.createElement("ul", {}, listItem, listItem1, listItem2, listItem3)

const navigation = React.createElement("nav", {}, unmarkedList)

ReactDOM.render(navigation, document.getElementById("root"));