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
 

