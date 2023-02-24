let header = document.createElement("div");
header.className = "header";
let logo = document.createElement("h1");
logo.className = "logo";
let menu = document.createElement("div");
menu.className = "menu";
let nav = document.createElement("ul")
let item1 = document.createElement("li")
let item2 = document.createElement("li")
let item3 = document.createElement("li")

logo.innerHTML = "ZEZO";
item1.innerHTML = "Home";
item2.innerHTML = "About"
item3.innerHTML = "Contact"
nav.appendChild(item1)
nav.appendChild(item2)
nav.appendChild(item3)
header.appendChild(logo)
menu.appendChild(nav)
header.appendChild(menu)
document.body.appendChild(header);
// header.style.width = "90%"
header.style.display = "flex"
header.style.justifyContent = "space-between"
header.style.alignItems = "center"
// header.style.backgroundColor = ""
header.style.margin = "0 50px"

nav.style.display = "flex"
nav.style.justifyContent = "space-between"
item1.style.listStyle = "none"
item2.style.listStyle = "none"
item3.style.listStyle = "none"
item1.style.marginLeft = "20px"
item2.style.marginLeft = "20px"
item3.style.marginLeft = "20px"


let content = document.createElement("div");
for(i=0;i<=14;i++){
let product = document.createElement("div");
let productNumber = document.createElement("h1");
let productInfo = document.createElement("p");
content.className = "content"
product.className = "product"
productNumber.innerHTML = i+1;
productInfo.innerHTML = "Product";

content.appendChild(product);
product.appendChild(productNumber);
product.appendChild(productInfo);
document.body.appendChild(content)
document.body.style.margin="0"
content.style.backgroundColor="grey"
content.style.width="100%"
content.style.display="flex"
content.style.justifyContent="space-around"
content.style.alignItems="center"
content.style.flexWrap="wrap"
content.style.padding="20px 0 20px 0"

product.style.backgroundColor="white"
product.style.width="26%"
product.style.height="120px"
product.style.padding="10px"
product.style.margin="10px"
product.style.border="2px solid black"
product.style.borderRadius="10px"


productNumber.style.textAlign="center"
productInfo.style.textAlign="center"

}

let footer = document.createElement("div");
footer.className= "footer";
document.body.appendChild(footer);
footer.style.backgroundColor = "white"
footer.style.padding = "20px"

let copyright = document.createElement("p")
copyright.innerHTML="Copyright ZEZO.com | All rights reserved"
copyright.style.textAlign="center"
// copyright.style.textAlign="1"


document.body.style.fontFamily ="sans-serif"


footer.appendChild(copyright)

