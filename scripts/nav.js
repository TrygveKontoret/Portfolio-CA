const arrow = document.querySelector(".arrow");
const home = document.querySelector("#home");
const projects = document.querySelector("#projects");
const about = document.querySelector("#about");
const blogscroll = document.querySelector("#blog");
const myProjects = document.querySelector(".my-projects");
const aboutMe = document.querySelector(".about-me");

arrow.addEventListener("click", ()=> {
    myProjects.scrollIntoView();
});

projects.addEventListener("click", ()=> {
    myProjects.scrollIntoView();
});

about.addEventListener("click", ()=> {
    aboutMe.scrollIntoView();
});

home.addEventListener("click", ()=> {
    scrollTo(0,0);
});