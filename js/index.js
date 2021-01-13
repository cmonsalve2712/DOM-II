

// (1) Turn all elements in main navigation bold on mouse over
const header = document.querySelector('.nav');
console.log(header)
header.addEventListener('mouseover', function(event){event.target.style.textDecoration = 'underline';});

// (2) change color of nav links with click
const navLink = document.querySelector("nav");
navLink.addEventListener("click", (event) => {
  event.target.style.color = "red";
});

// (3) Zoom in on bus image on mouse over
const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', () => {
    funBus.style.transform = 'scale(1.5)';
});

// (3) Zoom out on bus image on mouse leave
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = 'scale(1)';
});

// (4) Make background pink when scrolled to bottom of page, gray when not
const scrollBody = document.querySelector('body');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollPos === maxScroll) {
        scrollBody.style.backgroundColor = 'gray';
    }
    if (scrollPos != maxScroll) {
        scrollBody.style.backgroundColor = 'pink';
    }
});

// (5) Make an alert for a keydown
window.addEventListener('keydown', () => {
    alert('Don\'t do that!');
});

// (6) Console out when scrolling in main navigation, use preventDefault() to stop scrolling
const scrollNav = document.querySelector('.main-navigation')
scrollNav.addEventListener('wheel', (event) => {
    console.log('SCROLL!');
    event.preventDefault();
});


// (7) change order logo heading 
const h1 = document.querySelector('h1');
h1.addEventListener('dblclick', (event) => {
  event.target.textContent = 'Bus Fun';
});

// (8) pointerover I will align p text center on pointerover

 const firstParagraph = document.querySelector("p");
 firstParagraph.style.cursor = "pointer";

 firstParagraph.addEventListener("pointerover", () => {
   firstParagraph.style.textAlign = "center";
 });

 // (9) pointerout align the same p text left on pointer out

 firstParagraph.addEventListener("pointerout", () => {
    firstParagraph.style.textAlign = "left";
  });

