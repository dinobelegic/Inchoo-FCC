// Locating and setting initial classes on grid and list buttons

let buttonsGridAndList = document.getElementsByClassName("toolbar-view");
let buttons = buttonsGridAndList[0].children; 

buttons[0].setAttribute("class", "active");
buttons[1].setAttribute("class", "inactive");

// Interchange element classes between grid and list

function changeGridToList() {
    let parentDiv = document.getElementsByClassName("product-grid");
    let firstChild = document.getElementsByClassName("product-grid__item");
    let secondChildImage = document.getElementsByClassName("product-grid__item-img");
    let secondChildDetails = document.getElementsByClassName("product-grid__item-details");
    let secondChildDetailsTitle = document.getElementsByClassName("product-grid__item-title");
    let secondChildDetailsPrice = document.getElementsByClassName("product-grid__item-price");
    let secondChildDetailsPriceStrong = document.getElementsByClassName("product-grid__item-price");
    let thirdChildActions = document.getElementsByClassName("product-grid__item-actions");

    buttons[0].setAttribute("class", "inactive");
    buttons[1].setAttribute("class", "active");
    console.log(buttons);

    parentDiv[0].setAttribute("class", "product-list"); 
  
    firstChild[3].setAttribute("class", "product-list__item"); 
    firstChild[2].setAttribute("class", "product-list__item");
    firstChild[1].setAttribute("class", "product-list__item");
    firstChild[0].setAttribute("class", "product-list__item"); 

    secondChildImage[3].setAttribute("class", "product-list__item-img"); 
    secondChildImage[2].setAttribute("class", "product-list__item-img");
    secondChildImage[1].setAttribute("class", "product-list__item-img");
    secondChildImage[0].setAttribute("class", "product-list__item-img");
    
    secondChildDetails[3].setAttribute("class", "product-list__item-details"); 
    secondChildDetails[2].setAttribute("class", "product-list__item-details");
    secondChildDetails[1].setAttribute("class", "product-list__item-details");
    secondChildDetails[0].setAttribute("class", "product-list__item-details");
    
    secondChildDetailsTitle[3].setAttribute("class", "product-list__item-title"); 
    secondChildDetailsTitle[2].setAttribute("class", "product-list__item-title");
    secondChildDetailsTitle[1].setAttribute("class", "product-list__item-title");
    secondChildDetailsTitle[0].setAttribute("class", "product-list__item-title");
    
    secondChildDetailsPrice[3].setAttribute("class", "product-list__item-price"); 
    secondChildDetailsPrice[2].setAttribute("class", "product-list__item-price");
    secondChildDetailsPrice[1].setAttribute("class", "product-list__item-price");
    secondChildDetailsPrice[0].setAttribute("class", "product-list__item-price");
    
    secondChildDetailsPriceStrong[3].setAttribute("class", "product-list__item-price"); 
    secondChildDetailsPriceStrong[2].setAttribute("class", "product-list__item-price");
    secondChildDetailsPriceStrong[1].setAttribute("class", "product-list__item-price");
    secondChildDetailsPriceStrong[0].setAttribute("class", "product-list__item-price");
    
    thirdChildActions[3].setAttribute("class", "product-list__item-actions"); 
    thirdChildActions[2].setAttribute("class", "product-list__item-actions");
    thirdChildActions[1].setAttribute("class", "product-list__item-actions");
    thirdChildActions[0].setAttribute("class", "product-list__item-actions");
}

function changeListToGrid() {
    let parentDiv = document.getElementsByClassName("product-list");
    let firstChild = document.getElementsByClassName("product-list__item");
    let secondChildImage = document.getElementsByClassName("product-list__item-img");
    let secondChildDetails = document.getElementsByClassName("product-list__item-details");
    let secondChildDetailsTitle = document.getElementsByClassName("product-list__item-title");
    let secondChildDetailsPrice = document.getElementsByClassName("product-list__item-price");
    let secondChildDetailsPriceStrong = document.getElementsByClassName("product-list__item-price");
    let thirdChildActions = document.getElementsByClassName("product-list__item-actions");

    buttons[0].setAttribute("class", "active");
    buttons[1].setAttribute("class", "inactive");

    parentDiv[0].setAttribute("class", "product-grid"); 

    firstChild[3].setAttribute("class", "product-grid__item"); 
    firstChild[2].setAttribute("class", "product-grid__item");
    firstChild[1].setAttribute("class", "product-grid__item");
    firstChild[0].setAttribute("class", "product-grid__item");

    secondChildImage[3].setAttribute("class", "product-grid__item-img"); 
    secondChildImage[2].setAttribute("class", "product-grid__item-img");
    secondChildImage[1].setAttribute("class", "product-grid__item-img");
    secondChildImage[0].setAttribute("class", "product-grid__item-img");

    secondChildDetails[3].setAttribute("class", "product-grid__item-details"); 
    secondChildDetails[2].setAttribute("class", "product-grid__item-details");
    secondChildDetails[1].setAttribute("class", "product-grid__item-details");
    secondChildDetails[0].setAttribute("class", "product-grid__item-details");
    
    secondChildDetailsTitle[3].setAttribute("class", "product-grid__item-title"); 
    secondChildDetailsTitle[2].setAttribute("class", "product-grid__item-title");
    secondChildDetailsTitle[1].setAttribute("class", "product-grid__item-title");
    secondChildDetailsTitle[0].setAttribute("class", "product-grid__item-title");
    
    secondChildDetailsPrice[3].setAttribute("class", "product-grid__item-price"); 
    secondChildDetailsPrice[2].setAttribute("class", "product-grid__item-price");
    secondChildDetailsPrice[1].setAttribute("class", "product-grid__item-price");
    secondChildDetailsPrice[0].setAttribute("class", "product-grid__item-price");
    
    secondChildDetailsPriceStrong[3].setAttribute("class", "product-grid__item-price"); 
    secondChildDetailsPriceStrong[2].setAttribute("class", "product-grid__item-price");
    secondChildDetailsPriceStrong[1].setAttribute("class", "product-grid__item-price");
    secondChildDetailsPriceStrong[0].setAttribute("class", "product-grid__item-price");
    
    thirdChildActions[3].setAttribute("class", "product-grid__item-actions"); 
    thirdChildActions[2].setAttribute("class", "product-grid__item-actions");
    thirdChildActions[1].setAttribute("class", "product-grid__item-actions");
    thirdChildActions[0].setAttribute("class", "product-grid__item-actions");
}

// Show and hide sidebar menu on mobile

function showSidebar() {
    let show = document.getElementById("sidebar"); 
    show.classList.add("sidebar-show"); 
}

function hideSidebar() {
    let hide = document.getElementById("sidebar"); 
    hide.classList.remove("sidebar-show"); 
}