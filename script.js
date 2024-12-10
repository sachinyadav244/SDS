const form = document.getElementById('student-form');
const tableBody = document.querySelector('#student-table tbody');

let students = [];

// Add student record
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = document.getElementById('student-id').value.trim();
  const name = document.getElementById('student-name').value.trim();
  const age = document.getElementById('student-age').value.trim();
  const grade = document.getElementById('student-grade').value.trim();

  if (!id || !name || !age || !grade) {
    alert('Please fill all fields');
    return;
  }

  if (students.find((student) => student.id === id)) {
    alert('Student ID must be unique');
    return;
  }

  students.push({ id, name, age, grade });
  renderTable();
  form.reset();
});

// Render table
function renderTable() {
  tableBody.innerHTML = '';
  students.forEach((student, index) => {
    const row = `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.grade}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Edit student record
function editStudent(index) {
  const student = students[index];
  document.getElementById('student-id').value = student.id;
  document.getElementById('student-name').value = student.name;
  document.getElementById('student-age').value = student.age;
  document.getElementById('student-grade').value = student.grade;
  deleteStudent(index);
}

// Delete student record
function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
}