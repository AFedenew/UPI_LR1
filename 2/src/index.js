const renderStudentsTable = (studentsArr) => {
    if (!studentsArr || !Array.isArray(studentsArr)) {
        alert('Incorrect data');
        return;
    }

    const container = document.getElementById('container');
    container.innerHTML = '';
    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    const nameSell = document.createElement('th');
    const birthdaySell = document.createElement('th');
    nameSell.append('ФИО');
    birthdaySell.append('Дата рождения');
    headerRow.appendChild(nameSell);
    headerRow.appendChild(birthdaySell);
    table.appendChild(headerRow);

    const sortedStudentsArr = studentsArr.sort((st1, st2) => {
        return st1.birthday.split('.').reverse().join('.').localeCompare(st2.birthday.split('.').reverse().join('.'));
    });

    sortedStudentsArr.forEach(student => {
        const tableRow = document.createElement('tr');
        const nameSell = document.createElement('td');
        const birthdaySell = document.createElement('td');

        nameSell.append(student.name);
        birthdaySell.append(student.birthday);
        tableRow.appendChild(nameSell);
        tableRow.appendChild(birthdaySell)

        table.appendChild(tableRow);
    });

    container.appendChild(table);
}

window.renderStudentsTable = renderStudentsTable;