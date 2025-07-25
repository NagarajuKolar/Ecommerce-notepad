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

//Details Section

// const detailbtn=document.getElementById('detail');
// const specificationbtn=document.getElementById('specification');
// const vendorbtn=document.getElementById('vendor');
// const reviewbtn=document.getElementById('review')
// const detail=document.querySelector('.detail-button');
// const specification=document.querySelector('.specifications-button');
// const vendor=document.querySelector('.Vendor-button');
// const review=document.querySelector('.review-button');

// detailbtn.addEventListener('click',()=>{
//   detailbtn.classList.add("active");
//   specificationbtn.classList.remove("active");
//    reviewbtn.classList.remove("active");
//   vendorbtn.classList.remove("active");
//   detail.style.display="block";
//   specification.style.display="none";
//   vendor.style.display="none";
//   review.style.display="none";
// });

// specificationbtn.addEventListener('click',()=>{

//   specification.style.display="block";
//   specificationbtn.classList.add("active");
//     detailbtn.classList.remove("active");
//    reviewbtn.classList.remove("active");
//   vendorbtn.classList.remove("active");
//   detail.style.display="none";
//   vendor.style.display="none";
//   review.style.display="none";
// })

// vendorbtn.addEventListener('click',()=>{

//   specification.style.display="none";
//   vendorbtn.classList.add("active");
//     specificationbtn.classList.remove("active");
//     detailbtn.classList.remove("active");
//    reviewbtn.classList.remove("active");
//   detail.style.display="none";
//   vendor.style.display="block";
//   review.style.display="none";
// });

// reviewbtn.addEventListener('click',()=>{

//   specification.style.display="none";
//  reviewbtn.classList.add("active");
//    vendorbtn.classList.remove("active");
//     specificationbtn.classList.remove("active");
//     detailbtn.classList.remove("active");
//   detail.style.display="none";
//   vendor.style.display="none";
//   review.style.display="block";
// })

//Shortcut

// const tabs = ['detail', 'specification', 'vendor', 'review'];

// tabs.forEach(tab => {
//   const button = document.getElementById(tab);
//   button.addEventListener('click', () => {
//     tabs.forEach(t => {
//       document.getElementById(t).classList.remove('active');
//       document.querySelector(`.${t}-button`).style.display = 'none';
//     });

//     button.classList.add('active');
//     document.querySelector(`.${tab}-button`).style.display = 'block';
//   });
// });


//No sliding just clicking

// document.addEventListener('DOMContentLoaded', () => {
//   const mainImg = document.querySelector('.main-img img');
//   const thumbnails = document.querySelectorAll('.img-list img');
//   const prevBtn = document.getElementById('previcon');
//   const nextBtn = document.getElementById('nexticon');

//   let currentIndex = 0;

//   function updateMainImage(index) {
//     // Remove active from all
//     thumbnails.forEach(img => img.classList.remove('active'));

//     // Update main image src
//     mainImg.src = thumbnails[index].src;

//     // Highlight active
//     thumbnails[index].classList.add('active');
//     currentIndex = index;
//   }

//   // Set initial main image as active
//   updateMainImage(currentIndex);

//   // Click on thumbnails
//   thumbnails.forEach((thumb, index) => {
//     thumb.addEventListener('click', () => {
//       updateMainImage(index);
//     });
//   });

//   // Prev button
//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
//     updateMainImage(currentIndex);
//   });

//   // Next button
//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % thumbnails.length;
//     updateMainImage(currentIndex);
//   });
// });

//   document.addEventListener('DOMContentLoaded', function () {
//     let mainImage = document.querySelector('.main-img img');
//     let thumbnailImages = document.querySelectorAll('.img-list img');
//     let previousButton = document.getElementById('previcon');
//     let nextButton = document.getElementById('nexticon');
//     let imgList = document.querySelector('.img-list');

//     let currentImageIndex = 0;     // Main image index
//     let visibleStartIndex = 0;     // Where the scroll of thumbnails starts
//     const visibleCount = 1;        // Show 4 thumbnails at a time (you can change this) at last 

//     // STEP 1: Show Main Image
//     function showImageInMain(index) {
//       // Remove active class from all
//       thumbnailImages.forEach(img => img.classList.remove('active'));

//       // Set new main image
//       mainImage.src = thumbnailImages[index].src;

//       // Add highlight to current thumbnail
//       thumbnailImages[index].classList.add('active');

//       currentImageIndex = index;
//     }

//     // STEP 2: Slide Thumbnails
//     function slideThumbnails() {
//       const imageWidth = thumbnailImages[0].offsetWidth + 14; // image + gap
//       const translateX = visibleStartIndex * imageWidth;
//       imgList.style.transform = `translateX(${-translateX}px)`;
//     }

//     // STEP 3: Click on Thumbnail to change main image
//     thumbnailImages.forEach((thumb, index) => {
//       thumb.addEventListener('click', function () {
//         showImageInMain(index);
//       });
//     });

//     // STEP 4: Prev Button Click
//     previousButton.addEventListener('click', function () {
//       if (visibleStartIndex > 0) {
//         visibleStartIndex--;
//         slideThumbnails();
//       }
//     });

//     // STEP 5: Next Button Click
//     nextButton.addEventListener('click', function () {
//       if (visibleStartIndex < thumbnailImages.length - visibleCount) {
//         visibleStartIndex++;
//         slideThumbnails();
//       }
//     });

//     // STEP 6: Show first image on load
//     showImageInMain(currentImageIndex);
//     slideThumbnails();
//   });

// const detaildrop=document.getElementById('detail');
// const specificationdrop=document.getElementById('specification');
// const vendordrop=document.getElementById('vendor');
// const reviewdrop=document.getElementById('review')
// const details=document.querySelector('.detail-button');
// const specifications=document.querySelector('.specifications-button');
// const vendors=document.querySelector('.Vendor-button');
// const reviews=document.querySelector('.review-button');

// detaildrop.addEventListener('click',()=>{
//   details.classList.toggle("open");
//   specifications.classList.remove("open");
//    vendors.classList.remove("open");
//    reviews.classList.remove("open");

// });
// specificationdrop.addEventListener('click',()=>{
//   specifications.classList.toggle("open");
//    details.classList.remove("open");
//    vendors.classList.remove("open");
//    reviews.classList.remove("open");

// });

// vendordrop.addEventListener('click',()=>{
//   vendors.classList.toggle("open");
//     specifications.classList.remove("open");
//    details.classList.remove("open");
//    reviews.classList.remove("open");

// });

// reviewdrop.addEventListener('click',()=>{
//   reviews.classList.toggle("open");
//     specifications.classList.remove("open");
//    vendors.classList.remove("open");
//    details.classList.remove("open");

// });

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



//   // Set total seconds for countdown (example: 1 day + 5 hour +30 min)
//   let totalSeconds = (2 * 24 * 60 * 60) + (5 * 60 * 60) + (30 * 60) ;

//   function updateCountdown() {
//     if (totalSeconds < 0) return;

//     const days = Math.floor(totalSeconds / (24 * 60 * 60));
//     const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     document.getElementById("days").innerText = days;
//     document.getElementById("time").innerText =
//       String(hours).padStart(2, '0') + ":" +
//       String(minutes).padStart(2, '0') + ":" +
//       String(seconds).padStart(2, '0');

//     totalSeconds--;
//   }

//   updateCountdown(); // show immediately
//   setInterval(updateCountdown, 1000); // update every second



//Faq Section


const faqsections = [
  {
    button: document.getElementById('faqbtn-1'),
    content: document.querySelector('.faq-1')
  },
  {
    button: document.getElementById('faqbtn-2'),
    content: document.querySelector('.faq-2')
  },
  {
    button: document.getElementById('faqbtn-3'),
    content: document.querySelector('.faq-3')
  },
  {
    button: document.getElementById('faqbtn-4'),
    content: document.querySelector('.faq-4')
  }
];


faqsections.forEach(({ button, content }) => {
  button.addEventListener('click', () => {
    content.classList.toggle('active');
    faqsections.forEach(section => {
      if (section.content !== content) {
        section.content.classList.remove('active');
      }
    });

  });
});

const faqsections2 = [
  {
    button: document.getElementById('faqbtn-5'),
    content: document.querySelector('.faq-5')
  },
  {
    button: document.getElementById('faqbtn-6'),
    content: document.querySelector('.faq-6')
  },
  {
    button: document.getElementById('faqbtn-7'),
    content: document.querySelector('.faq-7')
  },
  {
    button: document.getElementById('faqbtn-8'),
    content: document.querySelector('.faq-8')
  },
    {
    button: document.getElementById('faqbtn-9'),
    content: document.querySelector('.faq-9')
  }
];
faqsections2.forEach(({ button, content }) => {
  button.addEventListener('click', () => {
    content.classList.toggle('active');
    faqsections2.forEach(section => {
      if (section.content !== content) {
        section.content.classList.remove('active');
      }
    });

  });
});
