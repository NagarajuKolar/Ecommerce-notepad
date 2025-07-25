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

// const listbutton=document.querySelector(".list")
// const gridbutton=document.querySelector(".grid")
// const listproducts=document.querySelector(".list-products");
// const gridproducts=document.querySelector(".grid-products")

// listbutton.addEventListener("click" , () =>
// {
//     console.log("List clicked");
//     listproducts.style.display = "block";  
//     gridproducts.style.display = "none";
//     listbutton.classList.add("active");
//     gridbutton.classList.remove("active");
// })
// gridbutton.addEventListener("click" , () =>
// {
//     listproducts.style.display = "none";
//     gridproducts.style.display = "block";
//     gridbutton.classList.add("active");
//     listbutton.classList.remove("active");
// })



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





  document.addEventListener('DOMContentLoaded', function () {
    let mainImage = document.querySelector('.main-img img');
    let thumbnailImages = document.querySelectorAll('.img-list img');
    let previousButton = document.getElementById('previcon');
    let nextButton = document.getElementById('nexticon');
    let imgList = document.querySelector('.img-list');

    let currentImageIndex = 0;     
    let visibleStartIndex = 0;    
    const visibleCount = 2;        

  
    function showImageInMain(index) {
      thumbnailImages.forEach(img => img.classList.remove('active'));

     
      mainImage.src = thumbnailImages[index].src;

      
      thumbnailImages[index].classList.add('active');

      currentImageIndex = index;
    }

   
    function slideThumbnails() {
      const imageWidth = thumbnailImages[0].offsetWidth + 14; 
      const translateX = visibleStartIndex * imageWidth;
      imgList.style.transform = `translateX(${-translateX}px)`;
    }

   
    thumbnailImages.forEach((thumb, index) => {
      thumb.addEventListener('click', function () {
        showImageInMain(index);
      });
    });

    
    previousButton.addEventListener('click', function () {
      if (visibleStartIndex > 0) {
        visibleStartIndex--;
        slideThumbnails();
      }
    });

    
    nextButton.addEventListener('click', function () {
      if (visibleStartIndex < thumbnailImages.length - visibleCount) {
        visibleStartIndex++;
        slideThumbnails();
      }
    });

    
    showImageInMain(currentImageIndex);
    slideThumbnails();
  });

const detaildrop=document.getElementById('detail');
const specificationdrop=document.getElementById('specification');
const vendordrop=document.getElementById('vendor');
const reviewdrop=document.getElementById('review')
const details=document.querySelector('.detail-button');
const specifications=document.querySelector('.specifications-button');
const vendors=document.querySelector('.Vendor-button');
const reviews=document.querySelector('.review-button');

detaildrop.addEventListener('click',()=>{
  details.classList.toggle("open");
  specifications.classList.remove("open");
   vendors.classList.remove("open");
   reviews.classList.remove("open");

});
specificationdrop.addEventListener('click',()=>{
  specifications.classList.toggle("open");
   details.classList.remove("open");
   vendors.classList.remove("open");
   reviews.classList.remove("open");

});

vendordrop.addEventListener('click',()=>{
  vendors.classList.toggle("open");
    specifications.classList.remove("open");
   details.classList.remove("open");
   reviews.classList.remove("open");

});

reviewdrop.addEventListener('click',()=>{
  reviews.classList.toggle("open");
    specifications.classList.remove("open");
   vendors.classList.remove("open");
   details.classList.remove("open");

});

// const sections = [
//   { trigger: document.getElementById('detail'), content: document.querySelector('.detail-button') },
//   { trigger: document.getElementById('specification'), content: document.querySelector('.specifications-button') },
//   { trigger: document.getElementById('vendor'), content: document.querySelector('.Vendor-button') },
//   { trigger: document.getElementById('review'), content: document.querySelector('.review-button') }
// ];

// sections.forEach(({ trigger, content }) => {
//   trigger.addEventListener('click', () => {
//     sections.forEach(({ content: el }) => {
//       if (el === content) {
//         el.classList.toggle('open');
//       } else {
//         el.classList.remove('open');
//       }
//     });
//   });
// });



  // Set total seconds for countdown (example: 1 day + 5 hour +30 min)
  let totalSeconds = (2 * 24 * 60 * 60) + (5 * 60 * 60) + (30 * 60) ;

  function updateCountdown() {
    if (totalSeconds < 0) return;

    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").innerText = days;
    document.getElementById("time").innerText =
      String(hours).padStart(2, '0') + ":" +
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');

    totalSeconds--;
  }

  updateCountdown(); // show immediately
  setInterval(updateCountdown, 1000); // update every second

//Faq Section


//Faq Section


