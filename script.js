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
