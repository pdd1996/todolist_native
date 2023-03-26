const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

form.addEventListener('submit', function (event) {
    /**
     * 阻止默认行为
     * 阻止表单默认提交行为，导致页面刷新
     */
    event.preventDefault();
    const value = input.value;
    if (value !== '') {
        addTodoListItem(value);
    }
    input.value = '';
})

function addTodoListItem(value) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkbox = document.createElement('input');
    const button = document.createElement('button');

    checkbox.type = "checkbox"
    span.textContent = value;
    button.innerHTML = "删除";
    li.append(checkbox, span, button);
    ul.appendChild(li);

    checkbox.addEventListener('change', function () {
        const status = this.checked;

        if (status) {
            li.classList.add('completed')
            sortTodoListItem();
        } else {
            li.classList.remove('completed')
        }

        sortTodoListItem();
    })

    button.addEventListener('click', function () {
        li.remove();
    })
}

function sortTodoListItem() {
    const completedList = [];
    const unCompletedList = [];
    const todoList = Array.from(ul.children);

    todoList.forEach(todoItem => {
        if (todoItem.classList.contains('completed')) {
            completedList.push(todoItem);
        } else {
            unCompletedList.push(todoItem);
        }
    });

    unCompletedList.forEach(unCompleted => {
        ul.appendChild(unCompleted);
    })

    completedList.forEach(completed => {
        ul.appendChild(completed);
    })
}