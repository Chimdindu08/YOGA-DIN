const dropDown = document.getElementById("faq2");
// const faQicon = document.getElementById("faq-Icon")
const navDrop = document.getElementById("nav-drop");
const featureschevron = document.getElementById("chevron-down1");
const featuresHover = document.getElementById("nav-bar1");
const Navdrop = document.getElementById("nav-drop2");
const Featureshover = document.getElementById("nav-bar2");


const getDynamicIcon = (iconValue) => {
  const icon = document.getElementById(`faq-icon${iconValue}`);
  return icon;
};

const showDrop = () => {
  navDrop.style.height = "100px";
};
const hideDrop = () => {
  navDrop.style.height = "0px";
};
featuresHover.addEventListener("mouseenter", showDrop);
featuresHover.addEventListener("mouseleave", hideDrop);

const Showdrop = () => {
  Navdrop.style.height = "100px";
};
const Hidedrop = () => {
  Navdrop.style.height = "0px";
};
Featureshover.addEventListener("mouseenter", Showdrop);
Featureshover.addEventListener("mouseleave", Hidedrop);

function toggleFaq(toggleItem) {
  const dropdown = document.getElementById(`faq-${toggleItem}`);
  const faqIcon = getDynamicIcon(toggleItem);
  if (dropdown.style.height === "80px") {
    dropdown.style.height = "0px";
    faqIcon.innerHTML = `<i class="fa-solid fa-plus">`;
  } else {
    dropdown.style.height = "80px";
    faqIcon.innerHTML = `<i class="fa-solid fa-minus">`;
  }
}

getDynamicIcon(1).addEventListener("click", () => toggleFaq(1));
getDynamicIcon(2).addEventListener("click", () => toggleFaq(2));
getDynamicIcon(3).addEventListener("click", () => toggleFaq(3));
getDynamicIcon(4).addEventListener("click", () => toggleFaq(4));


const barIcon = document.getElementById("bar-icon");
const SideBar = document.getElementById("side-bar");
function toggleSideBar () {
    SideBar.classList.toggle("inner-sidebar")

    if
     (SideBar.classList.contains("inner-sidebar")){
      //  barIcon.style.color = "black";
      //  barIcon.innerHTML = `<i class="fa-solid fa-x">`;
        barIcon.className = "fa-solid fa-x";
        barIcon.style.color= "black"

    } else {
       barIcon.className = "fa-solid fa-bars"; 
       barIcon.style.color= "white"
      }
  

  if
  (SideBar.classList.contains("inner-sidebar")){
     document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      }
     else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "aUto";
     }
    }
     
 barIcon.addEventListener("click", toggleSideBar);
