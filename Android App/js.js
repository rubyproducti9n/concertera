

// -----------------------------------------------------------
// Rrandomization Function Below
var random = Math.floor(Math.random() * $('.random').length);
$('.random').hide().eq(random).show();


// const chk = document.getElementById('chk');

// chk.addEventListener('click', () => {
//   chk.checked?document.body.classList.add("dark"):document.body.classList.remove("dark");
//   localStorage.setItem('darkModeStatus', chk.checked);
// });

// window.addEventListener('load', (event) => {
//   if(localStorage.getItem('darkModeStatus')=="true"){
//     document.body.classList.add("dark");
//     document.getElementById('chk').checked = true;
//   }
// });

$(window).load(function() {
  $('#loading').delay(2625).fadeOut(200);
});