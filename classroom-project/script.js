document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-form');
    const tableBody = document.querySelector('#student-table tbody');

    function loadStudents() {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        tableBody.innerHTML = '';
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${student.name}</td><td>${student.age}</td>`;
            tableBody.appendChild(row);
        });
    }

    function saveStudent(name, age) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push({ name, age });
        localStorage.setItem('students', JSON.stringify(students));
    }

    form.addEventListener('submit', event => {
        event.preventDefault();
        const name = form.name.value;
        const age = form.age.value;

        saveStudent(name, age);
        loadStudents();
        form.reset();
    });

    loadStudents();
});
