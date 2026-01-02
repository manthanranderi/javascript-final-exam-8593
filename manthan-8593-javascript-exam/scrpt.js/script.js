function showPage(pageId) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('signup-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login Successful!');
    showPage('dashboard');
});
const resultForm = document.getElementById('result-form');
const scoreList = document.getElementById('score-list');

resultForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const score = document.getElementById('score').value;
    const date = document.getElementById('date').value;

    addTableRow(name, subject, score, date);
    resultForm.reset();
});

function addTableRow(name, subject, score, date) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${subject}</td>
        <td>${score}</td>
        <td>${date}</td>
        <td>
            <button class="edit-btn" onclick="editRow(this)">Edit</button>
            <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
        </td>
    `;
    scoreList.appendChild(row);
}

function deleteRow(btn) {
    if(confirm("delete the record")) {
        btn.parentElement.parentElement.remove();
    }
}

function editRow(btn) {
    const row = btn.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');

    document.getElementById('studentName').value = cells[0].innerText;
    document.getElementById('subject').value = cells[1].innerText;
    document.getElementById('score').value = cells[2].innerText;
    document.getElementById('date').value = cells[3].innerText;

    row.remove();
    
    document.getElementById('studentName').focus();
}