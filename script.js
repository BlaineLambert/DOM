var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  // Create an <li> element
  var li = document.createElement("li");
  
  // Set the text of the <li> to the input value
  li.appendChild(document.createTextNode(input.value));
  
  // Append the <li> to the <ul>
  ul.appendChild(li);
  
  // Reset the input field
  input.value = "";
  
  // Add click event to turn it green
  li.addEventListener("click", crossOut);

  // Add delete button
  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("X"));
  li.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteListItem);
}

// Toggle the "done" class to turn it green
function crossOut() {
  this.classList.toggle("done");
}

// Delete the item when the delete button is clicked
function deleteListItem() {
  this.parentElement.remove();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
