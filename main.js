fetch("data.json")
    .then(response => response.json())
    .then(data => {
        let nav = data.navtitle;
        document.getElementById('ho').innerText = nav.ho; 
        document.getElementById("de").innerText = nav.de;
        document.getElementById("cr").innerText = nav.cr;
        document.getElementById("te").innerText = nav.te;
    })
    .catch(error => alert("Unable to fetch navtitle's data from JSON file please fix the bug ",error));

function showNav(){
    const navlist = document.getElementById('navlist');
    navlist.classList.toggle('showNavigation');
}
const togglebtn = document.getElementById('togglebtn');
const burger = document.getElementById('burger');
 function toggleImage(){
    if(burger.getAttribute("src") == "./assets/shared/icon-hamburger.svg"){
        burger.setAttribute("src","./assets/shared/icon-close.svg" );
        burger.setAttribute("alt", "close Menu")
    }else{
        burger.setAttribute("src", "./assets/shared/icon-hamburger.svg" )
    }
 }
 burger.addEventListener("click", toggleImage);
 togglebtn.addEventListener("click",showNav);