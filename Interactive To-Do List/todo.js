const productInput = document.getElementById('productInput');
const submitAction = document.getElementById('submitAction');
const tasksUl = document.getElementById('tasks');

submitAction.addEventListener('submit', e => {
  e.preventDefault();
  const item = productInput.value;

  if (item === '') {
    alert('Please Enter Item Name');
    return;
  }
  addinListItem(item);
  productInput.focus();
  productInput.value = '';
});

// Add item
function addinListItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));
  li.className =
    'border d-flex flex-fill w-50 rounded-1 justify-content-between align-items-center p-2';

  const button = document.createElement('button');
  button.className = 'btn btn-sm btn-danger';
  button.appendChild(document.createTextNode('x'));

  li.appendChild(button);
  console.log(li);
  tasksUl.appendChild(li);
}

// Delete button
tasksUl.addEventListener('click', function (e) {
  console.log(e.target);
  const targetBtn = (e.target.className = 'btn-danger');

  if (targetBtn) {
    targetBtn.closest('li').remove();
  }
});
