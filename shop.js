// Removing items from cart

let removeCartItemButtons = document.getElementsByClassName("remove-item");
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

let qtyInputs = document.getElementsByClassName("cart-qty-input");
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
  let title = shopItem.getElementsByClassName("product-title")[0].innerText
  let price = shopItem.getElementsByClassName("product-price")[0].lastElementChild.innerText
  let imageSrc = shopItem.getElementsByClassName("product-detail__img")[0].lastElementChild.src
  
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("li")
  cartRow.classList.add("shopping-cart__list-item")
  let cartItems = document.getElementsByClassName("shopping-cart__list")[0]  
  let cartRowContents = `
  <picture class="shopping-cart__list-item--img">
      <source srcset="./assets/product-single/cart/frisbee-black-desktop.jpg" 
          media="min-width: 1024px" alt="Product image">
      <source srcset="./assets/product-single/cart/frisbee-black-mob.jpg">
      <img src="${imageSrc}" alt="Default product image">
  </picture>

  <div class="shopping-cart__list-item-info">
      <h2 class="shopping-cart__list-item--title">
          <a href="">${title}</a>
      </h2>
    
      <ul class="shopping-cart__list-item--details">
          <li class="shopping-cart__list-item--details-single single-color"><strong>Color:</strong>Black</li>
          <li class="shopping-cart__list-item--details-single single-price"><strong>${price}</strong></li>
          <li class="shopping-cart__list-item--details-single single-qty">
              <form>
                  <fieldset>
                      <legend class="visually-hidden">Item qty control</legend>
                      <label for="qty">Qty:</label>
                      <input class="cart-qty-input" name="qty" type="number" value="1">
                  </fieldset>
              </form>
          </li>
      </ul> 
  </div> 
  <div class="shopping-cart__list-item--actions">
  <button class="edit-item"><span class="icon-edit"></span></button>
  <button class="remove-item"><span class="icon-trash"></span></button> 
  </div>
    `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName("remove-item")[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName("cart-qty-input")[0].addEventListener("change", qtyChanged)
}

// Updating cart total

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("shopping-cart__list")[0]
  let cartRows = cartItemContainer.getElementsByClassName("shopping-cart__list-item")
  let total = 0;
  
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName("single-price")[0]
    let qtyElement = cartRow.getElementsByClassName("single-qty")[0]
    
    let price = parseFloat(priceElement.innerText.replace("$", ""))
    let qty = qtyElement.children[0].firstElementChild.lastElementChild.value
    total = total + (price * qty)
  }
  total = Math.round(total * 100) / 100;
  let finalPrice = document.getElementsByClassName("shopping-cart__subtotal")[0]
  finalPrice.children[0].lastElementChild.innerText = "$" + total
}

