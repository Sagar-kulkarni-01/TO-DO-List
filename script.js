document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const task = todoInput.value.trim();
        if (task !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                li.remove();
            });
            li.appendChild(span);
            li.appendChild(deleteButton);
            todoList.appendChild(li);
            todoInput.value = '';
        }
    });
});