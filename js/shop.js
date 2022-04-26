
var cartList = [];
var cart = [];
var total = 0;
let contador = 0;

/* function buy(id) {
    let i;
    let productoId = id;
    for (i = 0; i < products.length; i++) {
        if (productoId == products[i].id) {
            cartList.push(products[i]);
        }
    } 
    generateCart(cartList);       
} */


/*function generateCart(cartList) {

    let i;
    let k;
    let existe;

    for (i = 0; i < cartList.length; i++) {        
        if (cart.length == 0) {
            cart.push(cartList[i]);
        } else {
            existe = false;
            for (k = 0; k < cart.length; k++) {                
                if (cartList[i].id == cart[k].id) {                    
                    cart[k].quantity++;
                    existe = true;
                }
            }
            if (existe == false) {
                cart.push(cartList[i]);
            }
        }
    } 
    calculateTotal(cart);
    console.log(cart);
}*/

function addToCart(id) {

    let addProductPosition;
    let productoId = id;
    let cartProductPosition;
    let existe;
    contador += 1;
    for (addProductPosition = 0; addProductPosition < products.length; addProductPosition++) {
        if (productoId == products[addProductPosition].id) {
            if (cart.length == 0) {
                cart.push(products[addProductPosition]);
            } else {
                existe = false;
                for (cartProductPosition = 0; cartProductPosition < cart.length; cartProductPosition++) {
                    if (cart[cartProductPosition].id == products[addProductPosition].id) {
                        cart[cartProductPosition].quantity++;
                        existe = true;
                    }
                }
                if (existe == false) {
                    cart.push(products[addProductPosition]);
                }
            }
        }
    }
    document.getElementById("count_product").innerHTML = contador;
    calculateTotal(cart);
    console.log(cart);
}

function cleanCart() {

    while (cart.length > 0) {
        cart.pop();
        console.log(cart);
    }
    printCart(clean);
}

function calculateTotal(cart) {
    let i;
    for (i = 0; i < cart.length; i++) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        if (cart[i].hasOwnProperty("quantity")) {
            applyPromotionsCart(i);
        }
    }
}

function applyPromotionsCart(i) {

    if (cart[i].id == 1 && cart[i].quantity >= products[0].offer.number) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        cart[i].subtotalWithDiscount = cart[i].subtotal - (20 * (cart[i].price * cart[i].quantity)) / 100;
    } else if (cart[i].id == 3 && cart[i].quantity >= products[2].offer.number) {
        cart[i].subtotal = cart[i].price * cart[i].quantity;
        cart[i].subtotalWithDiscount = (cart[i].price * 2 / 3).toFixed(3) * cart[i].quantity;
    } else {
        cart[i].subtotalWithDiscount = 0;
    }
}

function removeFromCart(id) {

    let i;
    let productToRemove = id;
    contador -= 1;

    for (i = 0; i < cart.length; i++) {
        if (productToRemove == cart[i].id) {
            cart[i].quantity--;
            if (cart[i].quantity == 0) {
                cart.splice([i], 1);
            }
            i = cart.length;
        } calculateTotal(cart);
    } console.log(cart);
    document.getElementById("count_product").innerHTML = contador;
}


function printCart(clean) {

    let text = "";
    let i;
    let totalCart = 0;

    if (cart.length > 0) {
        document.getElementById("select_something").innerText = "";
    } 

    for (i = 0; i < cart.length; i++) {
        text += "<li> <b>Product: </b>" + cart[i].name + "<br>" +
            " <b>Price: </b>" + cart[i].price + "<br>" +
            " <b>Quantity: </b>" + cart[i].quantity + "<br>" +
            " <b>Total: </b>" + cart[i].subtotal + "<br>" +
            " <b>Total with discount: </b>" + cart[i].subtotalWithDiscount + "</li>";
        totalCart += cart[i].subtotal
        if (cart[i].subtotalWithDiscount) {
            totalCart = totalCart - cart[i].subtotal + cart[i].subtotalWithDiscount;
        }
        document.getElementById("list").innerHTML = text + "<br> <b>Total: </b>" + totalCart.toFixed(2);
    }
    if (clean) {
        contador = 0;
        document.getElementById("count_product").innerHTML = contador;
        document.getElementById("list").innerHTML = "Cart cleaned!";
    }
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}