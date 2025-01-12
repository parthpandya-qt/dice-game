


var random1 = Math.random();
random1 = (random1* 6)+1;
random1 = Math.floor(random1);

var random2 = Math.random();
random2 = (random2 * 6)+1;
random2 = Math.floor(random2);




var p = "images/dice" + random1 + ".png";
var q = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",p );
document.querySelectorAll("img")[1].setAttribute("src",q );

if (random1 > random2) {
    document.querySelector("h1").textContent = "Player 1 wins!"

}
else if (random1 < random2) {
    document.querySelector("h1").textContent = "Player 2 wins!"
}
else {
    document.querySelector("h1").textContent = "It's a tie!"
}
