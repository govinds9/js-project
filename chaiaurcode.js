const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach(function(button){

button.addEventListener('click',function(e){

console.log(e.target);
switch(e.target.id){
  case 'grey' :
  body.style.backgroundColor='grey';
  case 'white':
   body.style.backgroundColor=e.target.id;
  
   case 'yellow':
    body.style.backgroundColor=e.target.id;
    case 'blue':
   body.style.backgroundColor=e.target.id;
   case 'purple':
   body.style.backgroundColor=e.target.id;
}


});
});