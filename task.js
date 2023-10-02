const div = document.getElementById("timer");
seconds = 5   
function counter() {
    div.textContent  = "До конца конкурса осталось секунд: " + seconds;
    if (seconds <= 0) {
        alert("Вы победили в конкурсе");
        clearInterval(interval);
    }
    
    seconds--
};
counter();
let interval = setInterval(counter, 1000);
 