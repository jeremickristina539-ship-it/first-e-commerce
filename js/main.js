let PRODUCT1_NAME = "Jacket";
let PRODUCT1_PRICE = 100;
let PRODUCT1_QTY = 2;

let PRODUCT2_NAME = "Dress";
let PRODUCT2_PRICE = 50;
let PRODUCT2_QTY = 1;

let VAT_RATE = 0.2;
let CURRENCY = "USD";
let USD_PER_EUR = 1.16;

let VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];

let iznos = 0;

let allProducts = [
    { name: "Blazer", price: 95, qty: 5 },
    { name: "Midi Coat", price: 105, qty: 12 },
    { name: "Trousers", price: 100, qty: 8 },
    { name: "Jeans", price: 70, qty: 15 },
    { name: "Denim Shirt", price: 50, qty: 9 },
    { name: "Sweater", price: 55, qty: 4 },
    { name: "Elegant Pants", price: 27, qty: 20 },
    { name: "Coat", price: 110, qty: 3 }

];

// typeof primeri
console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT1_PRICE);
console.log(typeof PRODUCT1_QTY);


function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

function isValidCoupon(code) {
    return VALID_COUPONS.includes(code);
}

function validateAndNotify() {
    let promoCode = document.getElementById("promo-input").value;
    let normalized = normalizeCoupon(promoCode);
    document.getElementById("promo-input").value = normalized;
    if (isValidCoupon(normalized)) {
        if (normalized === "SAVE10") {
            alert("Vas kupon donosi 10% popusta.");
        }
        else if (normalized === "SAVE15") {
            alert("Vas kupon donosi 15% popusta.");
        }
        else if (normalized === "FREESHIP") {
            alert("Vas kupon donosi besplatnu dostavu");
        }
        else
            alert("Uneti kod nije validan");
    }
    /*if (normalized === RAW_COUPON) {
        alert("Uneti kod je validan.");
    }
    else {
        alert("Uneti kod nije validan.");
    }*/

}
function calculateTotalValue(products) {
    let totalValue = 0;

    for (let product of products) {
        totalValue += product.price * product.qty;
    }

    console.log("Ukupna vrednost lagera: " + totalValue + " USD");
}

calculateTotalValue(allProducts);

let lowStock = [];

for (let i = 0; i < allProducts.length; i++) {
    if (allProducts[i].qty < 10) {
        lowStock.push(allProducts[i]);
    }
}

console.log(lowStock);

function findProductByName(list, searchName) {
    let normalizedSearch = searchName.toLowerCase();

    for (let product of list) {
        if (product.name.toLowerCase() === normalizedSearch) {
            return product;
        }
    }

    return null;
}



function login(email, password) {
    let cleanEmail = email.trim();
    let cleanPassword = password.trim();
    if (cleanEmail === "admin" && cleanPassword === "admin") {
        return true;
    } else {
        return false;
    }

}

function testLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = login(email, password);

    alert(result ? "Uspešno logovanje" : "Neuspešno logovanje");
}

function dodajNaIznos(cena) {
    iznos += cena;
    console.log(`Dodata cena: $${cena}`);
    console.log(`Ukupan iznos: $${iznos}`);

}

function prikaziIznos() {
    alert("Ukupan iznos u korpi je: $" + iznos);
}

dodajNaIznos(PRODUCT1_PRICE);
dodajNaIznos(PRODUCT2_PRICE);

console.log(findProductByName(allProducts, "blazer"));
console.log(findProductByName(allProducts, "COAT"));
console.log(findProductByName(allProducts, "nepostoji"));

