/**
 * Toggle header items
 */

function showHideSearchButton() {
    let button = document.querySelector(".search");
    button.classList.toggle("search-show");
}

function showHideShoppingCartButton() {
    let button = document.querySelector(".shopping-cart");
    button.classList.toggle("shopping-cart-show");
}

function showHideNavigationButton() {
    let button = document.querySelector(".navigation");
    button.classList.toggle("navigation-show"); 
}

/**
 * Toggle mobile navigation items
 */

let navigationToggle = document.querySelector(".navigation");
let frisbeeTitle = document.querySelector(".frisbees__title");
let frisbeeExpandList = document.querySelector(".frisbees__expand-list");
let frisbeeExpandListTitleFirst = document.querySelector(".frisbees__expand-list--title-1");
let frisbeeExpandListInnerFirst = document.querySelector(".frisbees__expand-list--inner-1");
let frisbeeExpandListTitleSecond = document.querySelector(".frisbees__expand-list--title-2");
let frisbeeExpandListInnerSecond = document.querySelector(".frisbees__expand-list--inner-2");
let frisbeeExpandListTitleThird = document.querySelector(".frisbees__expand-list--title-3");
let frisbeeExpandListInnerThird = document.querySelector(".frisbees__expand-list--inner-3");

let clothingTitle = document.querySelector(".clothing__title");
let clothingExpandList = document.querySelector(".clothing__expand-list");
let clothingExpandListTitleFirst = document.querySelector(".clothing__expand-list--title-1");
let clothingExpandListInnerFirst = document.querySelector(".clothing__expand-list--inner-1");
let clothingExpandListTitleSecond = document.querySelector(".clothing__expand-list--title-2");
let clothingExpandListInnerSecond = document.querySelector(".clothing__expand-list--inner-2");
let clothingExpandListTitleThird = document.querySelector(".clothing__expand-list--title-3");
let clothingExpandListInnerThird = document.querySelector(".clothing__expand-list--inner-3");


let accessoriesTitle = document.querySelector(".accessories__title");
let accessoriesExpandList = document.querySelector(".accessories__expand-list");
let accessoriesExpandListTitleFirst = document.querySelector(".accessories__expand-list--title-1");
let accessoriesExpandListInnerFirst = document.querySelector(".accessories__expand-list--inner-1");
let accessoriesExpandListTitleSecond = document.querySelector(".accessories__expand-list--title-2");
let accessoriesExpandListInnerSecond = document.querySelector(".accessories__expand-list--inner-2");
let accessoriesExpandListTitleThird = document.querySelector(".accessories__expand-list--title-3");
let accessoriesExpandListInnerThird = document.querySelector(".accessories__expand-list--inner-3");

// Toggle navigation menu

if (window.screen.width < 1024) {
    frisbeeTitle.addEventListener("click", ()=> {
        frisbeeExpandList.classList.toggle("navigation-list__level-2-show");
    })
    frisbeeExpandListTitleFirst.addEventListener("click", ()=> {
        frisbeeExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
    })
    frisbeeExpandListTitleSecond.addEventListener("click", ()=> {
        frisbeeExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
    })
    frisbeeExpandListTitleThird.addEventListener("click", ()=> {
        frisbeeExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    })
} else {
    frisbeeTitle.addEventListener("click", () => {
        frisbeeExpandList.classList.toggle("navigation-list__level-2-show");
        navigationToggle.classList.toggle("navigation-active-desktop");
        frisbeeExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
        frisbeeExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
        frisbeeExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    }) 
    
}

if (window.screen.width < 1024) {
    clothingTitle.addEventListener("click", ()=> {
        clothingExpandList.classList.toggle("navigation-list__level-2-show");
    })
    clothingExpandListTitleFirst.addEventListener("click", ()=> {
        clothingExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
    })
    clothingExpandListTitleSecond.addEventListener("click", ()=> {
        clothingExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
    })
    clothingExpandListTitleThird.addEventListener("click", ()=> {
        clothingExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    })
} else {
    clothingTitle.addEventListener("click", ()=> {
        clothingExpandList.classList.toggle("navigation-list__level-2-show");
        navigationToggle.classList.toggle("navigation-active-desktop");
        clothingExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
        clothingExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
        clothingExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    })
}

if (window.screen.width < 1024) {
    accessoriesTitle.addEventListener("click", ()=> {
        accessoriesExpandList.classList.toggle("navigation-list__level-2-show");
    })
    accessoriesExpandListTitleFirst.addEventListener("click", ()=> {
        accessoriesExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
    })
    accessoriesExpandListTitleSecond.addEventListener("click", ()=> {
        accessoriesExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
    })
    accessoriesExpandListTitleThird.addEventListener("click", ()=> {
        accessoriesExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    })
} else {
    accessoriesTitle.addEventListener("click", ()=> {
        accessoriesExpandList.classList.toggle("navigation-list__level-2-show");
        navigationToggle.classList.toggle("navigation-active-desktop");
        accessoriesExpandListInnerFirst.classList.toggle("navigation-list__level-3-show");
        accessoriesExpandListInnerSecond.classList.toggle("navigation-list__level-3-show");
        accessoriesExpandListInnerThird.classList.toggle("navigation-list__level-3-show");
    })
} 

/**
 * Subscribe to newsletter
 */ 

document.getElementsByClassName("button--subscribe")[0].addEventListener('click', newsletterSubscription)

function newsletterSubscription() {

    document.forms["newsletter"].submit();
    alert("Thank you for subscribing to our shop.")
}