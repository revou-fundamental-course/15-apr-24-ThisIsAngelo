// JS File

function konversi() {
    let celsius = document.getElementById("celsius").value;
    let rumus = "(" + celsius +".9/5)+32"
    let result = (celsius * 9 / 5) + 32;
    console.log(result);
    document.getElementById("fahrenheit").value = result
    document.getElementById("rumus").value = rumus
}

function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("rumus").value = "";
}