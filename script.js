//sidebar-hidding

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


//Carousel
let index=0;
const slides=document.querySelectorAll('.slides');
const nexticon=document.getElementById('next');
const previcon=document.getElementById('prev');
const total=slides.length;

function showslide(i){
slides.forEach(slide=>slide.classList.remove('active'));
slides[i].classList.add('active');
}

nexticon.addEventListener('click',()=>{
 index=(index+1)%total;
showslide(index);
})
previcon.addEventListener('click',()=>{
 index=(index-1 + total )%total;
showslide(index);
})

setInterval(()=>{
  index = (index + 1) % total;
  showslide(index);
},8000);

showslide(index); //first activ


//Arrivals

  const dots = document.querySelectorAll('.dots');
  const arrivals = document.querySelector('.arrivals');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
  dots.forEach(d => d.classList.remove('active'));
  dot.classList.add('active');

if (index === 0) {
 arrivals.style.transform = 'translateX(0%)';
  }
 else if (index === 1) {
  arrivals.style.transform = 'translateX(-60.5%)';
   }
    })
  });

//Deals
const dealdots=document.querySelectorAll('.top .dots');
const deals=document.querySelector('.second-sec .arrivals');

dealdots.forEach((dot,index) =>{
 dot.addEventListener('click',() =>{
  dealdots.forEach(d => d.classList.remove('active'));
  dot.classList.add('active');

if (index === 0) {
 deals.style.transform = 'translateX(0%)';
  }
 else if (index === 1) {
  deals.style.transform = 'translateX(-60.5%)';
   }

})
});

//Testimonials
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.test-content');
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000); 
  });


//Deals
const blogdots=document.querySelectorAll('.blog-top .dots');
const blog=document.querySelector('.blog-sec .blogs');

blogdots.forEach((dot,index) =>{
 dot.addEventListener('click',() =>{
  blogdots.forEach(d => d.classList.remove('active'));
  dot.classList.add('active');

if (index === 0) {
 blog.style.transform = 'translateX(0%)';
  }
 else if (index === 1) {
  blog.style.transform = 'translateX(-50.5%)';
   }

})
});


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



