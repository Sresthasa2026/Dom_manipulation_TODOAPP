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

document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todoInput");
    const submitButton = document.getElementById("addTodo");

    submitButton.addEventListener("click", (event) => {
        const todoText = todoInput.value.trim(); // Trim the input to remove leading/trailing spaces
        if (todoText === "") { // Check if the input is empty
            alert("Please write something for the todo");
        } else {
            addTodoToLocalStorage(todoText);
            todoInput.value = ""; // Clear the input after adding
        }
    });

    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value.trim();
        event.target.value = todoText; // Set the trimmed value back to the input
        console.log(todoText);
    });

    loadTodos();
});
