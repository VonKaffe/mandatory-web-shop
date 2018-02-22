

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





let products = [
    {
        name: "Zoegas Coffee Beans",
        price: 699,
        description: "Coffee Beans",
        image: "beans.jpg"
    },
    {
        name: "Beans",
        price: 499,
        description: "Traditional",
        image: 'coffegrinder.jpg'
    },

    {
        name: "Sign",
        price: 449,
        description: "Bussiness Sign",
        image: 'Coffeelogo.jpg'
    }];




document.getElementById("name1").innerHTML = products[0].name;
document.getElementById("price1").innerHTML = products[0].price + ":-";
document.getElementById("description1").innerHTML = products[0].description;
elem.src=products[0].image;


document.getElementById("name2").innerHTML = products[1].name;
document.getElementById("price2").innerHTML = products[1].price + ":-";
document.getElementById("description2").innerHTML = products[1].description;
elem2.src=products[1].image;

document.getElementById("name3").innerHTML = products[2].name;
document.getElementById("price3").innerHTML = products[2].price + ":-";
document.getElementById("description3").innerHTML = products[2].description;
elem3.src=products[2].image;




