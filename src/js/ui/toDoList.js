import { v4 as uuidv4 } from 'uuid';

export const toDoContainer = document.querySelector('#toDoContainer');
export const toDoBtn = document.querySelector('#toDoListShowBtn');

export const showBox = () => {
    toDoContainer.classList.add('show');
    toDoBtn.classList.add('hide-icon');
};

export const hideBox = () => {
    if (!toDoContainer.matches(':hover') && !toDoBtn.matches(':hover')) {
        toDoContainer.classList.remove('show');
        toDoBtn.classList.remove('hide-icon');
    }
};

/*
<li class="to-do-element">
    <label class="task-element">
        Lorem ipsum dolor.
        <input type="checkbox" />
    </label>
    <div class="vertical-line"></div>
</li>
*/

const inputTask = document.querySelector('#inputTask');
const inputTaskForm = document.querySelector('#inputTaskForm');
const toDoList = document.querySelector('#toDoList');

let toDoListArray = [];

inputTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = inputTask.value;
    const id = uuidv4();

    toDoListArray.push({ text, id });
    saveLocalStorage(toDoListArray);
    createNewTask([{ text, id }]);

    inputTask.value = '';
});

const saveLocalStorage = (array) => {
    localStorage.setItem('todo', JSON.stringify(array));
};

const createNewTask = (array) => {
    const fragment = document.createDocumentFragment();

    array.forEach((ele) => {
        //li element
        const liEle = document.createElement('li');
        liEle.className = 'to-do-element';
        liEle.setAttribute('data-id', ele.id);

        // label with checkbox
        const labelEle = document.createElement('label');
        labelEle.className = 'task-element';
        labelEle.textContent = ele.text;
        const checkboxEle = document.createElement('input');
        checkboxEle.setAttribute('type', 'checkbox');
        labelEle.append(checkboxEle);

        liEle.append(labelEle);

        const verticalLineEle = document.createElement('div');
        verticalLineEle.className = 'vertical-line';
        liEle.append(verticalLineEle);

        fragment.append(liEle);
    });
    toDoList.append(fragment);
};

const markTodoAsDone = (id) => {
    const newToDoArray = toDoListArray.filter((ele) => {
        return id != ele.id;
    });
    toDoListArray = newToDoArray;
    saveLocalStorage(toDoListArray);
};

document.addEventListener('change', (event) => {
    // matches only input with checkbox
    if (event.target.matches(`input[type="checkbox"]`)) {
        const elementId = event.target.closest('li').dataset.id;
        const removedEle = document.querySelector(`[data-id="${elementId}"`);

        markTodoAsDone(elementId);
        removedEle.style.textDecoration = 'line-through';
        removedEle.classList.add('fade-out');
        setTimeout(() => {
            removedEle.remove();
        }, 2000);
    }
});

if (localStorage.getItem('todo')) {
    toDoListArray = JSON.parse(localStorage.getItem('todo'));
    createNewTask(toDoListArray);
}
