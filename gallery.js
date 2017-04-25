var chico = ["Flumes", "Bear Hole", "CSU Chico", "Lower Bidwell", "Monkey Face"];
var current = " ";
function shuffleGallery()
{
var rand = Math.floor(Math.random() * (chico.length-1));
while(current == chico[rand]){
rand = Math.floor(Math.random() * (chico.length-1));
}
current = chico[rand];
console.log(chico[rand]);
}
