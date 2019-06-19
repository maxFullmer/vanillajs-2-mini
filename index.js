function addToDo(event) {
    // prevent default form function from running
    event.preventDefault();

    // create item list
    const item = document.createElement("li");
    // grab the value of the "item" input and set it equal to the text of the create item list
    item.innerText = document.getElementById("item").value;

    // when the list item is clicked, run the comepleteToDo function
    item.addEventListener("click", completeToDo);

    // create button so list item can be deleted
    const button = document.createElement("button");

    // give the button a visual deletion indicator
    button.innerText = "X"

    // event listener when delete button pressed
    button.addEventListener("click", removeToDo);

    //add (append) the button to our item (our list)
    item.appendChild(button);

    // select the ul that is holding all of our li's
    const list = document.querySelector("ul");
    // add new list item to the list with appendChild
    list.appendChild(item);
    //clear out input box (clear out list item after succesful creation (UX))
    document.getElementById('item').value = "";

}

// Event Listener (selects the form and run the add todo fn when the form button is clicked)
document.querySelector("form").addEventListener("submit", addToDo);

// create remove button fn
function removeToDo(event) {
    event.target.parentNode.remove();
}

// function that checks our todo item off
function completeToDo(event) {
    const value = event.target.getAttribute("aria-checked");

    if (value !== "true") {
        event.target.setAttribute("aria-checked", "true")
    }
    else {
        event.target.setAttribute("aria-checked", "false")
    }
}