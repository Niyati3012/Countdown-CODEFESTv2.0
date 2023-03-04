const week = document.getElementById("week")
const days  = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds= document.getElementById("seconds")

const currentYear = new Date().getFullYear();

const countDownTime = new Date(`March 19 ${currentYear} 00:00:00 `);

function updateCountDown(){
    const currentTime = new Date();
    const diff = countDownTime - currentTime;
    const w = Math.floor(diff/1000/60/60/24/7)
    const d = Math.floor(diff/1000/60/60/24)%7;
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    week.innerHTML=w;
    days.innerHTML = d;
    hours.innerHTML= h<10 ? '0' + h : h;
    minutes.innerHTML= m<10 ? '0' + m: m;
    seconds.innerHTML= s<10 ? '0' + s : s;
    
}

setInterval(updateCountDown,1000)