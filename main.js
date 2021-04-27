let addtodobutton = document.getElementById('addtodo');
let todocontainer = document.getElementById('todocontainer');
let inputfield = document.getElementById('inputfield');

addtodobutton.addEventListener('click', function () {
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph)
    var button = document.createElement("button");
    button.innerHTML = "Done";
    todocontainer.appendChild(button);
    button.addEventListener("click", function () {
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(button);
        alert("task completed");


    });
    inputfield.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick', function () {
        todocontainer.removeChild(paragraph);
        todocontainer.removeChild(button);

    })
})

