// ===============================
// Smart Student Study Planner
// script.js
// ===============================

// ---------- Motivational Quotes ----------
const quotes = [
    "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    "Believe in yourself. You are capable of amazing things.",
    "Small progress is still progress.",
    "Study while others are sleeping. Dream while others are wishing.",
    "Push yourself because no one else is going to do it for you.",
    "Every expert was once a beginner.",
    "Discipline is the bridge between goals and success.",
    "Your future is created by what you do today.",
    "Dream big. Start small. Act now.",
    "Hard work beats talent when talent doesn't work hard."
];

const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");

newQuote.onclick = () => {
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random];
};

// ---------- Subject Section ----------
const subjectInput = document.getElementById("subjectInput");
const addSubject = document.getElementById("addSubject");
const subjectList = document.getElementById("subjectList");

addSubject.onclick = () => {

    if(subjectInput.value.trim()=="") return;

    const li=document.createElement("li");

    li.innerHTML=`
    ${subjectInput.value}
    <button class="delete-btn">Delete</button>
    `;

    li.querySelector("button").onclick=()=>{
        li.remove();
    }

    subjectList.appendChild(li);

    subjectInput.value="";
};

// ---------- Task Section ----------
const taskInput=document.getElementById("taskInput");
const addTask=document.getElementById("addTask");
const taskList=document.getElementById("taskList");

let completed=0;

addTask.onclick=()=>{

if(taskInput.value.trim()=="") return;

const li=document.createElement("li");

li.innerHTML=`

<span>${taskInput.value}</span>

<div>

<button class="complete-btn">

Done

</button>

<button class="delete-btn">

Delete

</button>

</div>

`;

taskList.appendChild(li);

taskInput.value="";

updateProgress();

const doneBtn=li.querySelector(".complete-btn");

const deleteBtn=li.querySelector(".delete-btn");

doneBtn.onclick=()=>{

if(!li.classList.contains("completed")){

li.classList.add("completed");

completed++;

}else{

li.classList.remove("completed");

completed--;

}

updateProgress();

}

deleteBtn.onclick=()=>{

if(li.classList.contains("completed")){

completed--;

}

li.remove();

updateProgress();

}

}

// ---------- Progress Bar ----------

const progressBar=document.getElementById("progressBar");

const progressText=document.getElementById("progressText");

function updateProgress(){

const total=document.querySelectorAll("#taskList li").length;

let percent=0;

if(total>0){

percent=Math.round((completed/total)*100);

}

progressBar.style.width=percent+"%";

progressText.innerHTML=percent+"% Completed";

}

// ---------- Schedule ----------

const scheduleTime=document.getElementById("scheduleTime");

const scheduleTask=document.getElementById("scheduleTask");

const addSchedule=document.getElementById("addSchedule");

const scheduleList=document.getElementById("scheduleList");

addSchedule.onclick=()=>{

if(scheduleTask.value=="" || scheduleTime.value=="") return;

const li=document.createElement("li");

li.innerHTML=`

${scheduleTime.value} - ${scheduleTask.value}

<button class="delete-btn">

Delete

</button>

`;

li.querySelector("button").onclick=()=>{

li.remove();

}

scheduleList.appendChild(li);

scheduleTask.value="";

scheduleTime.value="";

}

// ---------- Pomodoro Timer ----------

let time=1500;

let timer;

let running=false;

const timerDisplay=document.getElementById("timer");

function updateTimer(){

let minutes=Math.floor(time/60);

let seconds=time%60;

timerDisplay.innerHTML=

String(minutes).padStart(2,"0")

+":"

+

String(seconds).padStart(2,"0");

}

updateTimer();

document.getElementById("startTimer").onclick=()=>{

if(running) return;

running=true;

timer=setInterval(()=>{

if(time>0){

time--;

updateTimer();

}else{

clearInterval(timer);

running=false;

alert("🎉 Pomodoro Completed! Take a 5-minute break.");

}

},1000);

}

document.getElementById("pauseTimer").onclick=()=>{

clearInterval(timer);

running=false;

}

document.getElementById("resetTimer").onclick=()=>{

clearInterval(timer);

running=false;

time=1500;

updateTimer();

}

// ---------- Welcome Message ----------

window.onload=()=>{

alert("📚 Welcome to Smart Student Study Planner!");

}