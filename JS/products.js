var headline = document.createElement("h1");
var headtext = document.createTextNode("Coffee");
headline.appendChild(headtext);

var para = document.createElement("p");
var paratext = document.createTextNode("179£");
para.appendChild(paratext);

var subh = document.createElement("h2");
var subheader = document.createTextNode("Antique Coffee Grinder");
subh.appendChild(subheader);

var pic = document.createElement("img");
pic.setAttribute("src", "coffegrinder.jpg");

var div0 = document.createElement("div");
div0.appendChild(headline);
div0.appendChild(para);
div0.appendChild(subh);
div0.appendChild(pic);
var existingElement = document.getElementsByTagName("body")[0];
existingElement.appendChild(div0);

var x = document.getElementsByTagName("img")[0].style.width = "400px";

var y = document.getElementsByTagName("h1")[0].style.color="black";

var z = document.getElementsByTagName("h2")[0].style.color="gray";

var hline = document.createElement("h1");
var htext = document.createTextNode("Coffee Beans");
hline.appendChild(htext);

var par = document.createElement("p");
var ptext = document.createTextNode("179£");
par.appendChild(ptext);

var sh = document.createElement("h2");
var suh = document.createTextNode("Zoegas Coffee Beans");
sh.appendChild(suh);

var picture = document.createElement("img");
picture.setAttribute("src", "beans.jpg");

var divo = document.createElement("div");
divo.appendChild(hline);
divo.appendChild(par);
divo.appendChild(sh);
divo.appendChild(picture);
var hH = document.getElementsByTagName("body")[0];
hH.appendChild(divo);

var q = document.getElementsByTagName("img")[1].style.width = "400px";

var w = document.getElementsByTagName("h1")[1].style.color="black";

var e = document.getElementsByTagName("h2")[1].style.color="gray";

let  d =document.getElementsByTagName("div")[1].style.float = "right";

