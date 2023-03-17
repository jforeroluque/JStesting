// pertenezco a uno de los siguientes grupos y me quiero vacunar
// mayores de 18 a˜õs que residen en un municipio fronterizo
//embarazadas mayores de 18 años con más de 9 semans de gestación
//personas que cumplen 30 años

var edad = 17;
var residencia_norte = false;
var embarazada = true;
var gestacion_semanas = 7;
var cumple30 = false


if (edad > 18 && residencia_norte) {
    console.log("Te puedes Vacunar");
} else if (embarazada && edad > 18 && gestacion_semanas > 9) {
    console.log("Te puedes vacunar");
} else if (edad >= 30 || cumple30) {
    console.log("Te puedes vacunar");
} else {
    console.log("No te puedes vacunar");
}