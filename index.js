var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var diceImg1 = "images/dice"+num1+".png";
var diceImg2 = "images/dice"+num2+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceImg1);
document.querySelectorAll("img")[1].setAttribute("src",diceImg2);

if(diceImg1==diceImg2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(diceImg1>diceImg2){
    document.querySelector('h1').innerHTML="Player 1 Wins!";
}
else{
    document.querySelector('h1').innerHTML="Player 2 Wins!";
}