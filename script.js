/* =======================================================
   SWARAJOS v1.0
   PART 1 - BASIC ANIMATIONS & WELCOME
======================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to SwarajOS v1.0");

    const logo = document.querySelector(".logo");
    const apps = document.querySelectorAll(".app");

    // Logo Animation

    logo.style.opacity = "0";
    logo.style.transform = "translateY(-40px)";

    setTimeout(() => {

        logo.style.transition = "1s";

        logo.style.opacity = "1";

        logo.style.transform = "translateY(0)";

    },300);

    // App Animation

    apps.forEach((app,index)=>{

        app.style.opacity="0";

        app.style.transform="translateY(40px)";

        setTimeout(()=>{

            app.style.transition=".6s";

            app.style.opacity="1";

            app.style.transform="translateY(0)";

        },500+(index*200));

    });

});

/* Click Effect */

const apps=document.querySelectorAll(".app");

apps.forEach(app=>{

    app.addEventListener("click",()=>{

        app.style.transform="scale(.92)";

        setTimeout(()=>{

            app.style.transform="";

        },150);

    });

});

/* Welcome Message */

setTimeout(()=>{

    alert("🚀 Welcome to SwarajOS v1.0");

},1000);

/* =======================================================
   PART 2 - INTERACTIONS & VISUAL EFFECTS
======================================================= */

// Ripple Effect

document.querySelectorAll(".app").forEach(app => {

    app.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        ripple.style.left = e.offsetX + "px";
        ripple.style.top = e.offsetY + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});

// Cursor Glow

document.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});

// Keyboard Shortcut

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        alert("SwarajOS Menu");

    }

});

// Welcome in Console

console.log("%cWelcome to SwarajOS","color:cyan;font-size:18px;font-weight:bold;");

console.log("%cBuilt by billionaire Aura legend","color:lime;font-size:14px;");

/* =======================================================
   PART 3 - FINAL EFFECTS
======================================================= */

// Live Clock in Console

setInterval(() => {

    const now = new Date();

    console.clear();

    console.log("🖥️ SwarajOS v1.0");

    console.log("Current Time: " + now.toLocaleTimeString());

},1000);

// Logo Glow Animation

const logo = document.querySelector(".logo");

setInterval(() => {

    logo.style.transform = "scale(1.05)";

    setTimeout(() => {

        logo.style.transform = "scale(1)";

    },500);

},3000);

// App Hover Sound (Placeholder)

document.querySelectorAll(".app").forEach(app => {

    app.addEventListener("mouseenter", () => {

        console.log("App Selected");

    });

});

// Double Click Logo

logo.addEventListener("dblclick", () => {

    alert("🚀 SwarajOS v1.0\nBuilt by billionaire Aura legend");

});

// Startup Message

window.onload = () => {

    console.log("SwarajOS Loaded Successfully.");

};

/* =======================================================
   CALCULATOR JAVASCRIPT
======================================================= */

const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");


let currentInput = "";


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;


        if(value === "C"){

            currentInput = "";

            display.value = "";

        }


        else if(value === "⌫"){

            currentInput = currentInput.slice(0,-1);

            display.value = currentInput;

        }


        else if(value === "="){

            try{

                currentInput = eval(currentInput);

                display.value = currentInput;

            }

            catch{

                display.value = "Error";

                currentInput = "";

            }

        }


        else{

            currentInput += value;

            display.value = currentInput;

        }

    });

});

/* =======================================================
   DIGITAL CLOCK JAVASCRIPT
======================================================= */

function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    const clock = document.getElementById("clock");

    const date = document.getElementById("date");


    if(clock){

        clock.innerHTML = 
        hours + ":" + minutes + ":" + seconds;

    }


    if(date){

        date.innerHTML = now.toDateString();

    }

}


setInterval(updateClock,1000);


updateClock();

/* =======================================================
   STUDY NOTES JAVASCRIPT
======================================================= */

const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");
const notesList = document.getElementById("notesList");


if(saveNote){

    saveNote.addEventListener("click",()=>{

        const noteText = noteInput.value.trim();


        if(noteText !== ""){


            const noteCard = document.createElement("div");

            noteCard.className = "note-card";


            noteCard.innerHTML = `

                <h3>My Note</h3>

                <p>${noteText}</p>

            `;


            notesList.appendChild(noteCard);


            noteInput.value = "";


            localStorage.setItem(
                "lastNote",
                noteText
            );


        }

    });

}


/* Load saved note */

window.addEventListener("load",()=>{

    const savedNote = localStorage.getItem("lastNote");


    if(savedNote && notesList){


        const noteCard = document.createElement("div");

        noteCard.className="note-card";


        noteCard.innerHTML = `

            <h3>Saved Note</h3>

            <p>${savedNote}</p>

        `;


        notesList.appendChild(noteCard);

    }

});
