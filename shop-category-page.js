// Removing items from cart

let removeCartItemButtons = document.getElementsByClassName("button-remove");
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i]
  button.addEventListener("click", removeCartItem)
}

function removeCartItem(event) {
  let buttonClicked = event.target
  buttonClicked.parentElement.parentElement.parentElement.remove()
  updateCartTotal()
}

// Updating item's quantity

let qtyInputs = document.getElementsByClassName("shopping-cart__quantity");
for (let i = 0; i < qtyInputs.length; i++) {
  let input = qtyInputs[i]
  input.addEventListener("change", qtyChanged)
}

function qtyChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal()
}

let addToCartButtons = document.getElementsByClassName("shop-button") 
for (let i = 0; i < addToCartButtons.length; i++) {
  button = addToCartButtons[i]
  button.addEventListener("click", addToCartClicked)
}

function addToCartClicked(event) {
  let button = event.target
  let shopItem = button.parentElement.parentElement.parentElement;
  let title = shopItem.getElementsByTagName("H2")[0].innerText;
  let priceOfItem = shopItem.getElementsByTagName("p")[0].getElementsByTagName("strong")[0].innerText; 
  let price = priceOfItem.slice(1); 
  let quantity = 1;
  let imageSrc = shopItem.getElementsByTagName("img")[0].src; 
  
  addItemToCart(title, price, quantity, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, quantity, imageSrc) {
  let cartRow = document.createElement("li")
  cartRow.classList.add("shopping-cart__item")
  let cartItems = document.getElementsByClassName("shopping-cart__list")[0]  
  let cartRowContents = `
  <div class="shopping-cart__item-wrapper">
      <picture class="shopping-cart__item-image">
          <source srcset="./assets/product-single/cart/frisbee-black-desktop.jpg" 
              media="min-width: 1024px" alt="Frisbee desktop image">
          <source srcset="./assets/product-single/cart/frisbee-black-mob.jpg" alt="Frisbee mobile image">
          <img src="${imageSrc}" alt="Frisbee mobile image">
      </picture>
      <div class="shopping-cart__item-info">
          <h2 class="shopping-cart__item-title"><a href="#">${title}</a>
          </h2>
          <p class="shopping-cart__item-options"><Strong>Color:</Strong> Black</p>
          <p class="shopping-cart__item-price"><Strong>${price}</Strong></p>
          <form action="" class="shopping-cart__quantity"> 
                  <label tabindex="0" for="quantity"><strong>Qty:</strong> 
                      <input name="quantity" type="number" min="1" value="${quantity}" aria-label="Enter number of items for purchase"> 
                  </label>
          </form>
      </div>
  </div> 
  <div class="shopping-cart__item-actions">
      <button><span class="icon-edit"></span></button>
      <button class="button-remove"><span class="icon-trash"></span></button> 
  </div> 
    `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName("button-remove")[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName("shopping-cart__quantity")[0].addEventListener("change", qtyChanged)
}

// Updating cart total

function updateCartTotal() {

  let cartItemContainer = document.getElementsByClassName("shopping-cart__list")[0]
  let cartRows = cartItemContainer.getElementsByClassName("shopping-cart__item")
  let total = 0;
  
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("shopping-cart__item-price")[0];
    let qtyElement = cartRow.getElementsByClassName("shopping-cart__quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", "")) 
    let qty = qtyElement.children[0].lastElementChild.value;
    total = total + (price * qty) 
  }
  total = Math.round(total * 100) / 100;
  let finalPrice = document.getElementsByClassName("shopping-cart__subtotal")[0];
  finalPrice.lastElementChild.innerText = "$" + total 
}


