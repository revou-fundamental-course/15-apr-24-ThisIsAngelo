// JS File
const ftoc = document.getElementById("f-to-c");
const ctof = document.getElementById("c-to-f");
const pc = document.getElementById("p-1")
const pf = document.getElementById("p-2")

document.getElementById("suhu-1").addEventListener("change", function () {
  const suhuu1 = document.getElementById("suhu-1").value;
  if (suhuu1 === "celsius") {
    ctof.style.display = "flex";
    ftoc.style.display = "none";
    pc.style.display = "block"
    pf.style.display = "none"
    document.getElementById("suhu-2").value = "fahrenheit";
  } else if (suhuu1 === "fahrenheit") {
    ftoc.style.display = "flex";
    ctof.style.display = "none";
    pc.style.display = "none"
    pf.style.display = "block"
    document.getElementById("suhu-2").value = "celsius";
  }
});

document.getElementById("suhu-2").addEventListener("change", function () {
  const suhuu2 = document.getElementById("suhu-2").value;
  if (suhuu2 === "celsius") {
    ftoc.style.display = "flex";
    ctof.style.display = "none";
    pc.style.display = "none"
    pf.style.display = "block"
    document.getElementById("suhu-1").value = "fahrenheit";
  } else if (suhuu2 === "fahrenheit") {
    ctof.style.display = "flex";
    ftoc.style.display = "none";
    pc.style.display = "block"
    pf.style.display = "none"
    document.getElementById("suhu-1").value = "celsius";
  }
});

function konversi() {
  const suhu1 = document.getElementById("suhu-1").value;
  const input = parseFloat(document.getElementById("input").value);
  if (isNaN(input)) {
    alert("Harap inputkan angka suhu");
  } else {
    if (suhu1 === "celsius") {
      let input = document.getElementById("input").value;
      let rumus = "(" + input + ".9/5)+32";
      let result = (input * 9 / 5) + 32;
      document.getElementById("answer").value = result;
      document.getElementById("rumus").value = rumus;
    } else if (suhu1 === "fahrenheit") {
      let input = document.getElementById("input").value;
      let rumus = "5/9." + "(" + input + "-32)";
      let result = 5 / 9 * (input - 32);
      document.getElementById("answer").value = result;
      document.getElementById("rumus").value = rumus;
    }
  }
}

function reset() {
  document.getElementById("input").value = "";
  document.getElementById("answer").value = "";
  document.getElementById("rumus").value = "";
}
