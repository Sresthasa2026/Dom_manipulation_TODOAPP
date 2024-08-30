function loadTodos() {
    // This function will load todos
    const todos = JSON.parse(localStorage.getItem("todos")) || { "todoList": [] };
    console.log(todos);
    return todos;
}

function addTodoToLocalStorage(todoText) {
    const todos = loadTodos();
    todos.todoList.push(todoText); // Push the todoText into the todoList array
    localStorage.setItem("todos", JSON.stringify(todos)); // Convert to JSON string
}

function appendTodoInHtml(todoText) {
    const todoList = document.getElementById("todoList");
    const todo = document.createElement("li");
    todo.textContent = todoText;
    todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");
    const todoList = document.getElementById("todoList");

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value.trim(); // Trim the input to remove leading/trailing spaces
        if (todoText === "") { // Check if the input is empty
            alert("Please write something for the todo");
        } else {
            addTodoToLocalStorage(todoText);
            appendTodoInHtml(todoText); // Append the new todo to the list
            todoInput.value = ""; // Clear the input after adding
        }
    });

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value.trim();
        event.target.value = todoText; // Set the trimmed value back to the input
        console.log(todoText);
    });

    const todoss = loadTodos();
    todoss.todoList.forEach((todoText) => {
        const newTodoItem = document.createElement("li");
        newTodoItem.textContent = todoText; // Corrected to use todoText
        todoList.appendChild(newTodoItem);
    });

});
