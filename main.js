// Show and hide search menu
function showSearch() {
    let show = document.getElementById("search"); 
    show.classList.add("show-search"); 
}

function hideSearch() {
    let hide = document.getElementById("search"); 
    hide.classList.remove("show-search"); 
}

// Show and hide cart menu
function showShoppingCart() {
    let show = document.getElementById("shopping-cart"); 
    show.classList.add("show-shopping-cart"); 
}

function hideShoppingCart() {
    let hide = document.getElementById("shopping-cart"); 
    hide.classList.remove("show-shopping-cart"); 
}

// Show and hide navigation
function showNavigation() {
    let show = document.getElementById("menu"); 
    show.classList.add("show-menu"); 
}

function hideNavigation() {
    let hide = document.getElementById("menu"); 
    hide.classList.remove("show-menu"); 
}
 
// Subscribe to newsletter

document.getElementsByClassName("button--subscribe")[0].addEventListener('click', newsletterSubscription)

function newsletterSubscription() {

    document.forms["newsletter"].submit();
    alert("Thank you for subscribing to our shop.")
}