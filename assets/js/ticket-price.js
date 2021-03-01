let km;
let age;
const priceKm = 0.21;

function calc() {
    let price;

    km = document.getElementById("km");
    age = document.getElementById("age");

    price = km.value * priceKm;

    if (age.value < 18) {
        price -= (price * 20 / 100);
        price = (Math.round(price * 100) / 100).toFixed(2);
        document.getElementById("price").innerHTML = price + "&euro;";
    }
    else if (age.value > 65) {
        price -= (price * 40 / 100);
        price = (Math.round(price * 100) / 100).toFixed(2);
        document.getElementById("price").innerHTML = price + "&euro;";
    }
    else {
        price = (Math.round(price * 100) / 100).toFixed(2);
        document.getElementById("price").innerHTML = price + "&euro;";
    }

    document.getElementById("price").style.display = "block";
}
