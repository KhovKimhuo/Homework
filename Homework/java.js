let users = [
  { id: 1, firstName: "Som", lastName: "Som", email: "som@gmail.com" },
  { id: 2, firstName: "Jonh", lastName: "Jonh", email: "Jonh@gmail.com" },
  { id: 3, firstName: "Jonh2", lastName: "Jonh2", email: "Jonh2@gmail.com" },
  { id: 4, firstName: "Zeel", lastName: "Zeel", email: "zeel@gmail.com" }
];

const tableBody = document.querySelector("tbody");

function renderUsers() {
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td class="actions">
          <button class="btn view" onclick="viewUser(${user.id})">View</button>
          <button class="btn edit" onclick="editUser(${user.id})">Edit</button>
          <button class="btn delete" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// ADD
function addUser() {
  const firstName = prompt("Enter first name:");
  const lastName = prompt("Enter last name:");
  const email = prompt("Enter email:");

  if (!firstName || !lastName || !email) return;

  users.push({
    id: Date.now(),
    firstName,
    lastName,
    email
  });

  renderUsers();
}

// VIEW
function viewUser(id) {
  const user = users.find(u => u.id === id);
  alert(
    `First Name: ${user.firstName}\nLast Name: ${user.lastName}\nEmail: ${user.email}`
  );
}

// EDIT
function editUser(id) {
  const user = users.find(u => u.id === id);

  const firstName = prompt("Edit first name:", user.firstName);
  const lastName = prompt("Edit last name:", user.lastName);
  const email = prompt("Edit email:", user.email);

  if (!firstName || !lastName || !email) return;

  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;

  renderUsers();
}

// DELETE
function deleteUser(id) {
  if (confirm("Are you sure?")) {
    users = users.filter(user => user.id !== id);
    renderUsers();
  }
}

renderUsers();