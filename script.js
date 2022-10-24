// Kintamieji
var vardas = document.getElementById("vardas")
var pavarde = document.getElementById("pavarde")
var amzius = document.getElementById("amzius")
var add = document.getElementById("add")
var removefirst = document.getElementById("removefirst")
var removelast = document.getElementById("removelast")

// Pridejimas
add.addEventListener("click", function(){
    // Validacija
    if(input.value){
        // Pridejimas
        var span = document.createElement("span")
        span.innerText = input.value + ", "
        vardas.append(span)

        // Input isvalymas
        input.value = ""
    } else {
        alert("Laukelis tuscias")
    }
})

