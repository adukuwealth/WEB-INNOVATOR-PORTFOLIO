// const textToType = "Hello, this is a typing script!";
// const typingSpeed = 100; // milliseconds per character

// const typingContainer = document.getElementById(".typing");

// let currentIndex = 0;

// function typeCharacter() {
//   typingContainer.textContent += textToType[currentIndex];
//   currentIndex++;

//   if (currentIndex < textToType.length) {
//     setTimeout(typeCharacter, typingSpeed);
//   }
// }

// typeCharacter();
// ///////////////////TYPING ANIMATION////////////////////////////////////
var Typed = new Typed(".typing" , {
    strings:["&","am here to turn your" ," IDEAS", "into" ,"@" , "REALITY"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

var navSection = document.getElementsByClassName('side');

function toggleNav() {
    navSection.style.left= '-300px';
}


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};












