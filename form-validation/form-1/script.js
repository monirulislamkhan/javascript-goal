const userForm = document.getElementById('userForm');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = userName.value;
  const email = userEmail.value;
  const phone = userPhone.value;
  const id = Date.now();
  const formData = {
    id,
    name,
    email,
    phone,
  };

  const tableData = `
  <tr>
    <td scope="col">${id}</td>
    <td scope="col">${name}</td>
    <td scope="col">${email}</td>
    <td scope="col">${phone}</td>
    <td scope="col">${new Date().toLocaleString()}</td>
  </tr>`;

  const tableBody = document.getElementById('dataTableBody');
  const newRow = document.createElement('tr');
  newRow.innerHTML = tableData;
  tableBody.appendChild(newRow);

  console.log(formData, tableData);
});

/* let str = '      Monirul Islam Khan     ';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf(''));
console.log(str.lastIndexOf(''));
console.log(str.includes('K'));
console.log(str.startsWith('Moniru'));
console.log(str.endsWith('n'));
console.log(str.endsWith('n'));
console.log(str.slice(3));
console.log(str.substring(0, 4));
console.log(str.split(''));
console.log(str.substr(3, 8));
console.log(str.replace('Khan', 'Pathan'));
console.log('hello hello'.replaceAll('hello', 'Pathan'));
console.log(str.repeat(3));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.concat(' Another Name '));
console.log(str.match(/a/g)); */
