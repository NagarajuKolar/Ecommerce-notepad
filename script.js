//sidebar-hidding

const togglebtn = document.getElementById("sidebarToggle");
const side= document.getElementById("sidebar");
const home=document.getElementById("main-content");

togglebtn.addEventListener("click",() =>{
    side.classList.toggle("hide-sidebar");
     home.classList.toggle("center-main");

  if (window.innerWidth <= 1100) {
    side.classList.toggle("show");
  }
});




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