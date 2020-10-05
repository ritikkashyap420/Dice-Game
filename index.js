var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
console.log(randomNumber1)
console.log(randomNumber2)

var randomeImage1="images/dice"+randomNumber1+".png";
var randomeImage2="images/dice"+randomNumber2+".png";



document.querySelector(".img1").setAttribute("src",randomeImage1);
document.querySelector(".img2").setAttribute("src",randomeImage2);


if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

}
else if(randomNumber1 < randomNumber2){

  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}
else{

  document.querySelector("h1").innerHTML = "Draw";

}




//
// if(randomNumber1 > randomNumber2){
//
//   document.querySelector("h1").innerHTML = "Player 1 Wins!";
//
// }
//
// else if(randomNumber1 < randomNumber2){
//
//   document.querySelector("h1").innerHTML = "Player 2 Wins!";
//
// }
//
// else{
//
//   document.querySelector("h1").innerHTML = "Draw!";
//
// }
