var paragraph = document.createElement ("p");
paragraph.innerHTML = "So yea this DA BOMMMB"
var videoBanner= document.getElementById ("videoBanner");
videoBanner.appendChild(paragraph)


var newHeader = document.createElement ("h2");
newHeader.innerHTML = "ELVIS PRESLEY IS THE BEST";
videoBanner.insertBefore(newHeader,paragraph);

//removing stuff


videoBanner.addEventListener("click", myEventHandler);
function myEventHandler (){
 alert("Some random stuff")
	}
