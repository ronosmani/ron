var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2') ;
var button3 = document.getElementById('btn3');

button1.addEventListener('click', function(){
    alert("Hello from addeventlistener");
})
button2.onmouseover = function(){
    alert("Mouse is over the button");
}
button3.onmouseleave = function(){
    alert("Mouse has left the button");
}