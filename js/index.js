var hiddenCommitte = document.getElementById('hidden-committee')
var hiddenAgenda = document.getElementById('hidden-agenda')
hiddenCommitte.style.display="block"
hiddenAgenda.style.display="block"
function showById(id_name,button_name){
    var obj = document.getElementById(id_name)
    var button = document.getElementById(button_name)
    if(obj.style.display=="none"){
      obj.style.display="block"
      button.innerText="Read Less"
    } else{
      obj.style.display="none"
      button.innerText="Read more"
      console.log("d")
    }
}
/////
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//////////////
var allotments = document.getElementById("Allotments")
allotments.addEventListener("click",(e)={
  a = window.prompt("Allotments are not currently not avilable foolow us on instagram for further updates!")
})