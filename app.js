const hamburger = document.querySelector(".hamburger");
const navcontainer = document.querySelector(".navcontainer");
// to open the nav container when clicked on hamburger in mobile
hamburger.addEventListener("click", () => {
    navcontainer.classList.toggle("open");
    hamburger.classList.toggle("clicked"); //to add shadow effect
});

// to close the nav container when clicked on any navigation link in mobile
const navitems = document.querySelectorAll(".navitem");
for (element of navitems){
    element.addEventListener("click", () => {
        navcontainer.classList.toggle("open");
    })
}
function offer(){
    let val = prompt("YaY! you stayed on our website for more than a minut, If you want also want to have a website for your buisness then click ok to contact Md Asad Azam", "true");
    if(val || val == "")
    {
        location.replace("https://asad-azam.netlify.app/");
    }
}
let timeout = setTimeout(offer, 60000);
