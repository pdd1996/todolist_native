const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const time = document.getElementById('time');
const date = new Date();

function showTime() {    
    const dayOfWeek = weekdays[date.getDay()];
    const month = date.getMonth() + 1;
    const day = date.getDate();

    time.innerHTML = month + '月' + day + '日，' + dayOfWeek; 
}