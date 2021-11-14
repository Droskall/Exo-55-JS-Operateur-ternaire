let lorem = document.getElementById("p1");

let span1 = parseInt(document.getElementById("sp1").innerHTML);
let span2 = parseInt(document.getElementById("sp2").innerHTML);
let result = document.getElementById("result");

result.innerHTML = ((span1 + span2) === span1+span2) ? span1+span2 : "5+12 est different de 17";
lorem.innerHTML = ((result - 10) < 0) ? "Attention (5 + 12) - 10 est strictement inferieur à 0" : lorem;

document.getElementById("sp1").style.color = "red";
document.getElementById("sp2").style.color = "blue";
document.getElementById("p1").style.backgroundColor = "antiqueWhite";