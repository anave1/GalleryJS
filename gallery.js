var chico = [
  {description:"Flumes",
  picture: "https://snowbrains.com/wp-content/uploads/2015/05/unnamed1.jpg",
  from: "snowbrains.com"},

  {description:"Bear Hole",
  picture: "https://trappedinchico.files.wordpress.com/2010/05/dam2.jpg",
  from: "trappedinchico.wordpress.com"},

  {description:"CSU Chico",
  picture: "http://www.csuchico.edu/maps/images/maps-tours-photos/mapstours-tours.jpg",
  from: "csuchico.edu"},

  {description:"Lower Bidwell",
  picture: "http://bidwellpark.org/wp-content/uploads/2014/04/BidwellPool.jpg",
  from: "bidwellpark.org"},

  {description:"Monkey Face",
  picture: "http://3.bp.blogspot.com/_cWoV7_rCgjk/TLVPoxIQwNI/AAAAAAAAA2s/Gpq6hGU-FX8/s1600/monkeyface2.jpg",
  from: "blogspot.com"}];
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
