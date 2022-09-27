const secDiv=document.querySelector("#sec");
const minDiv=document.querySelector("#min");
const hrDiv=document.querySelector("#hr");

setInterval(updateC,1000)
function updateC(){
  let date =new Date();
  let sec=date.getSeconds()/60;
  let min=date.getMinutes()/60;
  let hr=date.getHours()/12;
  secDiv.style.transform="rotate("+(sec*360)+"deg)";
  minDiv.style.transform="rotate("+(min*360)+"deg)";
  hrDiv.style.transform="rotate("+(hr*360)+"deg)";
  
}