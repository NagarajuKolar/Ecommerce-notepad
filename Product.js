//sidebar-hidding
console.log("Product.js loaded");
const togglebtn = document.getElementById("sidebarToggle");
const side= document.getElementById("sidebar");
const home=document.getElementById("main-content");
const sideclose=document.getElementById("closeside");

togglebtn.addEventListener("click",() =>{
    side.classList.toggle("hide-sidebar");
     home.classList.toggle("center-main");

  if (window.innerWidth <= 1100) {
    side.classList.toggle("show");
  }
});

sideclose.addEventListener('click',()=>{
    side.classList.remove("show");
})


  const navToggler = document.getElementById("navToggler");
  const navItems = document.querySelector(".nav-items");
  const closenav=document.getElementById("closeNav")

  navToggler.addEventListener("click", () => {
    navItems.classList.toggle("show");
  })
  closenav.addEventListener("click",() =>{
    navItems.classList.remove("show")
  })





//Responsive Clicks

const dropdown1 = document.getElementById("dropdown1");
const contents=document.querySelector(".dropdown-content");

dropdown1.addEventListener("click",()=>{
  contents.classList.toggle('show');
})


const dropdown2 = document.getElementById("dropdown2");
const dropdown3 = document.getElementById("dropdown3");
const dropcontents1=document.getElementById("dropcontent1");
const dropcontents2=document.getElementById("dropcontent2");

dropdown2.addEventListener("click",()=>{
  dropcontents1.classList.toggle('show');
})
dropdown3.addEventListener("click",()=>{
  dropcontents2.classList.toggle('show');
})
document.addEventListener("click", (event) =>{
    if (!dropdown1.contains(event.target)) {
    contents.classList.remove("show");
  }
    if (!dropdown2.contains(event.target)) {
    dropcontents1.classList.remove("show");
  }
    if (!dropdown3.contains(event.target)) {
    dropcontents2.classList.remove("show");
  }
});

//Product Section

const listbutton=document.querySelector(".list")
const gridbutton=document.querySelector(".grid")
const listproducts=document.querySelector(".list-products");
const gridproducts=document.querySelector(".grid-products")

listbutton.addEventListener("click" , () =>
{
    console.log("List clicked");
    listproducts.style.display = "block";  
    gridproducts.style.display = "none";
    listbutton.classList.add("active");
    gridbutton.classList.remove("active");
})
gridbutton.addEventListener("click" , () =>
{
    listproducts.style.display = "none";
    gridproducts.style.display = "block";
    gridbutton.classList.add("active");
    listbutton.classList.remove("active");
})



const dropdowns = document.querySelectorAll('.cat-dropdown');

dropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', (e) => {
    menu.classList.toggle('open');


    dropdowns.forEach(other => {
      if (other !== dropdown) {
        other.querySelector('.dropdown-menu').classList.remove('open');
      }
    });

  });
});
