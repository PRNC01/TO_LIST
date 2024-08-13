const inputTask = document.getElementById('inputTask');
const inputDate = document.getElementById('inputDate');
const inputTime = document.getElementById('inputTime');
const addBtn = document.getElementById('addBtn');
const Tasks = document.getElementById('Tasks');

addBtn.addEventListener('click', () => {
    const Task = inputTask.value;
    const Date = inputDate.value;
    const Time = inputTime.value;
    
    const li = document.createElement('li');
    li.innerHTML = `
    <div>
        Task = ${Task}
        <br>
        Date = ${Date}
        <br>
        Time = ${Time}
    </div>
    `;

    Tasks.appendChild(li);

    Task = '';
    Date = '';
    Time = '';
})