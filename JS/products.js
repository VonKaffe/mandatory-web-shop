

let elem = document.createElement("img");
elem.setAttribute("height", "200");
elem.setAttribute("width", "200");
elem.setAttribute("alt", "Coffee Grinder");
document.getElementById("image1").appendChild(elem);


let elem2 = document.createElement("img");

elem2.setAttribute("width", "200");
elem2.setAttribute("alt", "Beans");
document.getElementById("image2").appendChild(elem2);



let elem3 = document.createElement("img");
elem2.setAttribute("width", "200");
elem2.setAttribute("alt", "Store Sign");
document.getElementById("image3").appendChild(elem3);





let product1 = [
    "Coffee Beans",
    "Zoegas Coffee Beans",
    699,
    elem.src = 'beans.jpg'
];

let product2 = [
    "Antique Coffee Grinder",
    "Traditonal",
    499,
    elem2.src = 'coffegrinder.jpg'
];


let product3 = [
    "Company Made sign",
    "To Open Bussinesses",
    100,
    elem3.src = 'Coffeelogo.jpg'



];


let pName1 = product1[0];
let pPrice1 = product1[1];
let pDesc1 = product1[2];

let pName2 = product2[0];
let pPrice2 = product2[1];
let pDesc2 = product2[2];

let pName3 = product3[0];
let pPrice3 = product3[1];
let pDesc3 = product3[2];



document.getElementById("name1").innerHTML = pName1;
document.getElementById("price1").innerHTML = pPrice1 + ":-";
document.getElementById("description1").innerHTML = pDesc1;

document.getElementById("name2").innerHTML = pName2;
document.getElementById("price2").innerHTML = pPrice2 + ":-";
document.getElementById("description2").innerHTML = pDesc2;

document.getElementById("name3").innerHTML = pName3;
document.getElementById("price3").innerHTML = pPrice3 + ":-";
document.getElementById("description3").innerHTML = pDesc3;




