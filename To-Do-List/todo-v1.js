// Inital variable
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add item
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValue = input.value.trim();
  if (inputValue === '') {
    alert('Please Enter Item Name');
    input.focus();
    return;
  }

  // Create a li element
  const li = document.createElement('li');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'todo-checkbox checkbox';

  // span for text
  const span = document.createElement('span');
  span.className = 'input';
  span.textContent = inputValue;

  // Delet button
  const delBtn = document.createElement('button');
  delBtn.className = 'btn btn-sm btn-danger';
  delBtn.textContent = 'x';

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  // Clear the input field
  input.value = '';
  input.focus();
});

// Delete list item
list.addEventListener('click', function (e) {
  // list.removeChild(li);
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});

// Toggle in checkbox text-decoration:line-through
list.addEventListener('change', function (e) {
  if (e.target.classList.contains('todo-checkbox')) {
    const li = e.target.parentElement;
    const span = li.querySelector('span');
    if (e.target.checked) {
      span.classList.add('done');
    } else {
      span.classList.remove('done');
    }

    console.log(li);
  }
});
