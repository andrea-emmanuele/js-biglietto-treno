let km = document.getElementById("km");
let age = document.getElementById("age");
const priceKm = 0.21;

function calc() {
    if (km.value != 0 && age.value != 0) {
        let price;

        price = km.value * priceKm;

        if (age.value < 18) {
            price -= (price * 20 / 100);
            price = (Math.round(price * 100) / 100).toFixed(2);
            document.getElementById("price").innerHTML = price + "&euro;";
        } else if (age.value > 65) {
            price -= (price * 40 / 100);
            price = (Math.round(price * 100) / 100).toFixed(2);
            document.getElementById("price").innerHTML = price + "&euro;";
        } else {
            price = (Math.round(price * 100) / 100).toFixed(2);
            document.getElementById("price").innerHTML = price + "&euro;";
        }

        document.getElementById("line").style.display = "block";
        document.getElementById("price").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
    else {
        document.getElementById("line").style.display = "block";
        document.getElementById("price").style.display = "none";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").innerHTML = "Uno o pi&ugrave; campi sono vuoti!";
    }
}
