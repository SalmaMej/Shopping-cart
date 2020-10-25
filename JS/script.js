//newdiv
function add(name, prix, image){
    let myDiv =document.createElement ("div");
    myDiv.classList.add('cart-row')
    var newDivCart = document.getElementsByClassName('newDivCart')[0]
    let newDiv =
    `
    <div>
        <img src=${image} style= "width 150px; height: 200px">
    </div>
    <div>
        <p>${name}</p>
    </div>
    <div>
        <p class="cart-price">${prix}</p> <p> dinars</p>
    </div>
    
    <br>
    <input class="cart-quantity-input" type="number" value="1"> 
    <button class="removing" id="removing" onclick"removeItem()">Remove <i class="fas fa-times"></i></button>
                    
    `

    myDiv.innerHTML= newDiv
    newDivCart.append(myDiv)

    myDiv.getElementsByClassName('removing')[0].addEventListener('click', removeCartItem)
    myDiv.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}
//newdiv

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    }


var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}   

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('newDivCart')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
     /* total = Math.round(total * 100) / 100 */
    
    
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
    }


//decrement, increment
function dec1(){
    let input1 = document.getElementById('inputcart1');
    let val = inputcart1.value;
    if (val>0){
        val--;
    }
    input1.value= val
};

function inc1(){
    let input1 = document.getElementById('inputcart1');
    let val = inputcart1.value;
    val++;
    input1.value= val
}

function dec2(){
    let input2 = document.getElementById('inputcart2');
    let val = inputcart2.value;
    if (val>0){
        val--;
    }
    input2.value= val
};

function inc2(){
    let input2 = document.getElementById('inputcart2');
    let val = inputcart2.value;
    val++;
    input2.value= val
}

function dec3(){
    let input3 = document.getElementById('inputcart3');
    let val = inputcart3.value;
    if (val>0){
        val--;
    }
    input3.value= val
};

function inc3(){
    let input3 = document.getElementById('inputcart3');
    let val = inputcart3.value;
    val++;
    input3.value= val
}

function dec4(){
    let input4 = document.getElementById('inputcart4');
    let val = inputcart4.value;
    if (val>0){
        val--;
    }
    input4.value= val
};

function inc4(){
    let input4 = document.getElementById('inputcart4');
    let val = inputcart4.value;
    val++;
    input4.value= val
}

//decrement, increment



//add to favorite
function colorize(){
    document.getElementById("favoritIcon").style.color = "red";
}
function colorize2(){
    document.getElementById("favoritIcon2").style.color = "red";
}
function colorize3(){
    document.getElementById("favoritIcon3").style.color = "red";
}
function colorize4(){
    document.getElementById("favoritIcon4").style.color = "red";
}

//add to favorite


function removeItem(){
    var myobj = document.getElementById("removing");
    myobj.remove();
}