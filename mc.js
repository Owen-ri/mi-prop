var Quotes = [
    "Sitos web JavaScript!", 
    "Zzz Zzz Zzz", 
    "pi pi pi pi pi", 
    "Siguenos en redes!", 
    "Animaciones", 
    "JS", 
    "Gamalovers forever", 
    "Jona"
];

function displayQuote(){

    var num = Math.floor(Math.random() * 8);

    document.getElementById("quote").innerHTML = Quotes[num];

}

document.addEventListener("DOMContentLoaded", function() {
    var divClickeable = document.getElementById("divClickeable");
    var cuadroInfo = document.getElementById("cuadroInfo");

    // Mostrar el cuadro de información al hacer clic en el div clickeable
    divClickeable.addEventListener("click", function(event) {
        cuadroInfo.style.display = "block";
        event.stopPropagation(); // Evitar que el clic se propague al documento
    });

    // Ocultar el cuadro de información al hacer clic fuera de él
    document.addEventListener("click", function(event) {
        if (!cuadroInfo.contains(event.target) && cuadroInfo.style.display === "block") {
            cuadroInfo.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var divClickeable2 = document.getElementById("divClickeable2");
    var cuadroInfo2 = document.getElementById("cuadroInfo2");

    // Mostrar el cuadro de información al hacer clic en el div clickeable
    divClickeable2.addEventListener("click", function(event) {
        cuadroInfo2.style.display = "block";
        event.stopPropagation(); // Evitar que el clic se propague al documento
    });

    // Ocultar el cuadro de información al hacer clic fuera de él
    document.addEventListener("click", function(event) {
        if (!cuadroInfo2.contains(event.target) && cuadroInfo2.style.display === "block") {
            cuadroInfo2.style.display = "none";
        }
    });
});


