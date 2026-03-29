const showMoreSubBtn = document.getElementById("showMore-subs");
const showLessSubsBtn = document.getElementById("showLess-subs");
const menuSubs = document.querySelector(".menuSubs");

showMoreSubBtn.addEventListener("click", (e) => {
    e.preventDefault();
    menuSubs.style.height = "auto";
    showMoreSubBtn.style.display = "none";
    showLessSubsBtn.style.display = "flex";

    showLessSubsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        menuSubs.style.height = "40vh";
        showLessSubsBtn.style.display = "none";
        showMoreSubBtn.style.display = "flex";
    })
})

const showMoreExpBtn = document.getElementById("showMore-explo");
const showLessExpBtn = document.getElementById("showLess-explo");
const exploreSec = document.querySelector(".exploreSec");

showMoreExpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    exploreSec.style.height = "auto";
    showMoreExpBtn.style.display = "none";
    showLessExpBtn.style.display = "flex";

    showLessExpBtn.addEventListener("click", (e) => {
        e.preventDefault();
        exploreSec.style.height = "22vh";
        showLessExpBtn.style.display = "none";
        showMoreExpBtn.style.display = "flex";
    })
})

const homeMenu = document.getElementById("homeMenu");
const mainMenuContainer = document.querySelector(".mainMenu-Container");
const afterMenuContainer = document.querySelector(".afterMenu");
const videoIframes = document.querySelectorAll(".videoBox iframe");
const videoContents = document.querySelectorAll(".video-Content");
const navDown = document.querySelector(".navDown");

let menuFunction = true;
homeMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (menuFunction) {
        menuClose();
    } else menuOpen();

    menuFunction = !menuFunction;

})

function menuClose() {
    mainMenuContainer.style.display = "none";
    afterMenuContainer.style.display = "flex";
    navDown.style.width = "170vh"
     videoContents.forEach((content) => {
    content.style.maxWidth = "415px";
  });

  videoIframes.forEach((iframe) => {
    iframe.style.maxWidth = "415px";
    iframe.style.height = "260px";
  });

}

function menuOpen() {
    afterMenuContainer.style.display = "none"
    mainMenuContainer.style.display = "block";
    navDown.style.width = "147vh"
   videoContents.forEach((content) => {
    content.style.maxWidth = "360px";
  });

  videoIframes.forEach((iframe) => {
    iframe.style.maxWidth = "360px";
    iframe.style.height = "220px";
  });

}
const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const videoBoxCon = document.querySelectorAll(".videoBox-container");

searchBar.addEventListener("input",(e)=>{
    const value = searchBar.value.toLowerCase();
    
    videoBoxCon.forEach((video)=>{
        const tittle = video.querySelector(".videoDes h4").innerText.toLowerCase();

        if(tittle.includes(value)){
            video.style.display="block";
        } else video.style.display="none";
    })
})