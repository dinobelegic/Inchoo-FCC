// Toggling between details and more information

/* Handle for details */
const detailsElements = document.querySelectorAll("details");
 
function handleClickOnDetails() {
  // close all details
  let detailsOpened = document.querySelectorAll("details[open]");

  for (const item of detailsOpened) {
    // keep open only details clicked
    if (this != item) {
      item.removeAttribute("open");
    }
  }
}

detailsElements.forEach(function (item) {
  item.addEventListener("click", handleClickOnDetails);
});
 

/**
 * Displaying images on thumb click
 */

 const blackImage = document.querySelector(".img1");
 const orangeImage = document.querySelector(".img2");
 const whiteImage = document.querySelector(".img3");

 function displayBlackImage() {
   if (orangeImage.classList.contains("img2-show") || whiteImage.classList.contains("img3-show")) {
    orangeImage.classList.remove("img2-show");
    whiteImage.classList.remove("img3-show"); 
    blackImage.classList.add("img1-show");
   }
 }

 function displayOrangeImage() {
  if (blackImage.classList.contains("img1-show") || whiteImage.classList.contains("img3-show")) {
    whiteImage.classList.remove("img3-show"); 
    blackImage.classList.remove("img1-show");
    orangeImage.classList.add("img2-show");
  }
}

function displayWhiteImage() {
  if (blackImage.classList.contains("img1-show") || orangeImage.classList.contains("img2-show")) {
   blackImage.classList.remove("img1-show");
   orangeImage.classList.remove("img2-show");
   whiteImage.classList.add("img3-show"); 
  }
}
 
 