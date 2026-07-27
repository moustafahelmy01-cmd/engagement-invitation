// ==========================
// COUNTDOWN
// ==========================

const targetDate = new Date("August 9, 2026 19:00:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (distance < 0) {

clearInterval(countdown);

document.getElementById("countdown").innerHTML =
"<h2>Today is our Engagement 💍</h2>";

}

},1000);

// ==========================
// MUSIC
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("music-btn");

music.volume = 0.5;

let playing = false;

musicBtn.addEventListener("click",()=>{

if(playing){

music.pause();

musicBtn.innerHTML="🔇";

playing=false;

}else{

music.play();

musicBtn.innerHTML="🔊";

playing=true;

}

});

// ==========================
// WELCOME SCREEN
// ==========================

const enterBtn=document.getElementById("enter-btn");

enterBtn.addEventListener("click",()=>{

document.getElementById("welcome-screen").style.opacity="0";

setTimeout(()=>{

document.getElementById("welcome-screen").style.display="none";

},900);

music.play();

playing=true;

musicBtn.innerHTML="🔊";

});

// محاولة تشغيل الموسيقى تلقائياً
window.addEventListener("load",()=>{

music.play().catch(()=>{

console.log("Autoplay blocked by browser.");

});

});