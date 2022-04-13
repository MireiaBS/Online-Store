// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        quantity: 1,
        offer: {
            number: 3,
            percent: 20
        },
        subtotal: 10.5,
        subtotalWithDiscount: 10.5
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        quantity: 1,
        type: 'grocery'
        
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        quantity: 1,
        offer: {
            number: 10,
            percent: 30
        },
        subtotal: 5,
        subtotalWithDiscount: 5
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        quantity: 1,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        quantity: 1,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        quantity: 1,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        quantity: 1,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        quantity: 1,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        quantity: 1,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function buy(id) { 
    let i;
    let productoId = id;
    for (i = 0; i < products.length; i++) {
        if (productoId == products[i].id) {
           cartList.push(products[i]);                     
        }
    }
}

function cleanCart() {
    while (cartList.length > 0) {
        cartList.pop();
        console.log(cartList);
    }
}

function calculateTotal() {
    let i;
    let totalPrice = 0;
    for (i = 0; i < cartList.length; i++){
        totalPrice += cartList[i].price;         
    }    
}

function generateCart(cartList) {
   
    let i;
    let k;
    let existe;

    for ( i = 0; i < cartList.length; i++) {
        if ( cart.length == 0) {
            cart.push(cartList[i]);
        } else {
            existe = false;
            for ( k = 0; k < cart.length; k++) { 
                if ( cartList[i].id == cart[k].id) {
                    cart[k].quantity++;
                    existe = true;
                }                                   
            }  
            if ( existe == false) {
                
                cart.push(cartList[i]);
            }          
        }   
    }
}

function applyPromotionsCart() {
    
    for ( let i = 0; i < cart.length; i++) {
        if ( cart[i].hasOwnProperty("quantity") ) {
            if ( cart[i].quantity == cart[i].offer.number) {
                if ( cart[i].id == 1) {
                    cart[i].subtotal = cart[i].price * cart[i].quantity;                    
                    cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
                } else if ( cart[i].id == 3) {
                    cart[i].subtotal = cart[i].price * cart[i].quantity;                    
                    cart[i].subtotalWithDiscount = (cart[i].price * 2 / 3).toFixed(3) * cart[i].quantity;
                }
            }
        }
    }
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


function open_modal(){
	console.log("Open Modal");
    generateCart(cartList);
    calculateTotal();  
    applyPromotionsCart(); 
    console.log(cart);

}