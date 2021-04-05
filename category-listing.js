// Locating and setting initial classes on grid and list buttons

let buttonsGridAndList = document.getElementsByClassName("toolbar-view"); 
let buttons = buttonsGridAndList[0].children; 
let ratingStars = document.getElementsByClassName("product-rating"); 

buttons[0].setAttribute("class", "active-button");
buttons[1].setAttribute("class", "inactive-button");

ratingStars[3].style.justifyContent = ("center");
ratingStars[2].style.justifyContent = ("center");
ratingStars[1].style.justifyContent = ("center");
ratingStars[0].style.justifyContent = ("center");

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

    buttons[0].setAttribute("class", "inactive-button");
    buttons[1].setAttribute("class", "active-button");
    
    ratingStars[3].style.justifyContent = ("flex-start");
    ratingStars[2].style.justifyContent = ("flex-start");
    ratingStars[1].style.justifyContent = ("flex-start");
    ratingStars[0].style.justifyContent = ("flex-start");

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
    

    buttons[0].setAttribute("class", "active-button");
    buttons[1].setAttribute("class", "inactive-button");

    ratingStars[3].style.justifyContent = ("center");
    ratingStars[2].style.justifyContent = ("center");
    ratingStars[1].style.justifyContent = ("center");
    ratingStars[0].style.justifyContent = ("center");

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

// Open and close sidebar menu options

function expandSidebarListColor() {
    let sidebarTitles = document.querySelectorAll(".layered-nav-list__item--title");
    let sidebarInnerList = document.querySelectorAll(".layered-nav-list__item--inner-list");    
        sidebarTitles[0].classList.toggle("expand-sidebar");  
        sidebarInnerList[0].classList.toggle("expand-sidebar-innerlist"); 
}

function expandSidebarListSize() {
    let sidebarTitles = document.querySelectorAll(".layered-nav-list__item--title"); 
    let sidebarInnerList = document.querySelectorAll(".layered-nav-list__item--inner-list");
        sidebarTitles[1].classList.toggle("expand-sidebar");  
        sidebarInnerList[1].classList.toggle("expand-sidebar-innerlist"); 
}

function expandSidebarListMaterial() {
    let sidebarTitles = document.querySelectorAll(".layered-nav-list__item--title"); 
    let sidebarInnerList = document.querySelectorAll(".layered-nav-list__item--inner-list");
        sidebarTitles[2].classList.toggle("expand-sidebar");  
        sidebarInnerList[2].classList.toggle("expand-sidebar-innerlist"); 
}

function expandSidebarListPrice() {
    let sidebarTitles = document.querySelectorAll(".layered-nav-list__item--title"); 
    let sidebarInnerList = document.querySelectorAll(".layered-nav-list__item--inner-list");
        sidebarTitles[3].classList.toggle("expand-sidebar");  
        sidebarInnerList[3].classList.toggle("expand-sidebar-innerlist"); 
}


/**
 * Show / hide filters list 
 */

 let filtersContainer = document.querySelector(".shopping-options__filters-hidden");
 let filtersTitle = document.querySelector(".filters-title-hidden");
 let filtersList = document.querySelector(".filters-list-hidden");
 let filtersClearListButton = document.querySelector(".shopping-options__filters-clear-button-hidden");

 let shopByButton = document.querySelector(".shopping-options__button");

 shopByButton.addEventListener("click", () => {
    if(filtersContainer.classList.contains("shopping-options__filters-hidden")) {

        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");  
     } 
 })
  
 filtersClearListButton.addEventListener("click", () => {
    filtersContainer.classList.add("shopping-options__filters-hidden");
    filtersContainer.classList.remove("shopping-options__filters-active");
    filtersTitle.classList.add("filters-title-hidden");
    filtersTitle.classList.remove("filters-title");
    filtersList.classList.add("filters-list-hidden");
    filtersList.classList.remove("filters-list");
    filtersClearListButton.classList.add("shopping-options__filters-clear-button-hidden");
    filtersClearListButton.classList.remove("shopping-options__filters-clear-button");
})

/**
 * Add filters to filter list
 */

let colorOrange = document.querySelector(".color-orange");
let colorBlack = document.querySelector(".color-black");
let colorBlue = document.querySelector(".color-blue");
let colorWhite = document.querySelector(".color-white");
let sizeS = document.querySelector(".size-s");
let sizeM = document.querySelector(".size-m");
let sizeL = document.querySelector(".size-l");
let strongPvc = document.querySelector(".strong-pvc");
let carbon = document.querySelector(".carbon");

colorOrange.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden"); 

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Orange, ";
        filtersList.append(newListItem);

        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

colorBlack.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Black, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

colorBlue.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Blue, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

colorWhite.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "White, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})
 

sizeS.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Size Small, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

sizeM.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Size Medium, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

sizeL.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Size Large, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

strongPvc.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Strong PVC, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})

carbon.addEventListener("click", ()=> {
    if (filtersContainer.classList.contains("shopping-options__filters-hidden")|| filtersContainer.classList.contains("shopping-options__filters-active")) {
        filtersContainer.classList.add("shopping-options__filters-active");
        filtersContainer.classList.remove("shopping-options__filters-hidden");
        filtersTitle.classList.add("filters-title");
        filtersTitle.classList.remove("filters-title-hidden");
        filtersList.classList.add("filters-list");
        filtersList.classList.remove("filters-list-hidden");

        let newListItem = document.createElement("li");
        newListItem.classList.add("filters-list__item");  
        newListItem.innerHTML = "Carbon, "; 
        
        filtersList.append(newListItem);
        console.log(newListItem, filtersList );
        filtersClearListButton.classList.add("shopping-options__filters-clear-button");
        filtersClearListButton.classList.remove("shopping-options__filters-clear-button-hidden");
    }
})
 

filtersClearListButton.addEventListener("click", ()=> {

    for (let i = 0; i < filtersList.children.length; i++) {
        filtersList.removeChild;
        
    } 

})