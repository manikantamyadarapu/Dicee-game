var randomNumber1 = Math.floor(Math.random() *6)+1;

var randomimg="dice"+ randomNumber1 + ".png";

var randomSource = "images/" + randomimg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSource);



var randomNumber2 = Math.floor(Math.random() *6)+1;

var randomimg2="dice"+ randomNumber2 + ".png";

var randomSource2= "images/" + randomimg2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 is winner 🚩";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Palayer2 is winner 🚩";
}
else {
    document.querySelector("h1").innerHTML="Draw me ";
}