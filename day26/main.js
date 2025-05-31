// var x=5;
// if(x>2){
//     console.log("x eshte me i madh se 2")
// }else{
//     console.log("x eshte me i vogel se 2")
// };

// var y=1;
// if(y>2){
//     console.log("y eshte me i madh se 2")
// }else{
//     console.log("y eshte me i vogel se 2")
// };
var input = document.getElementById("input-id");
var button = document.getElementById("button-id");
var text = document.getElementById("text-id");

button.onclick=function(){
    text.innerHTML = input.value;
};

var input1 = document.querySelector('#input-1');
var input2 = document.querySelector('#input-2');
var button2 =document.querySelector('#btn2');
var ans = document.querySelector('#answer');
button2.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})