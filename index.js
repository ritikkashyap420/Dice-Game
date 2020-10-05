var randomNumber1=Math.floor(Math.random()*6)+1;
var randomeImage1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomeImage1);




var randomNumber2=Math.floor(Math.random()*6)+1;
var randomeImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomeImage2);


if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

}
else if(randomNumber1 < randomNumber2){

  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}
else{

  document.querySelector("h1").innerHTML = "Draw";

}
document.querySelector("button").addEventListener("click", refreshPage);

function refreshPage () {

window.location.reload();
}

