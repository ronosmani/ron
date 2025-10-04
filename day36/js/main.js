// $(window).ready(function(){
//     alert("jquerry is working! :D")
// })

// $('#header')

// $('ul li').mouseover(function(){
//     alert('mouse over')
// })

// $('ol li').mouseout(function(){
//     alert('mouse over')
// })

$('#btn').click(function(){
    console.log($('#h1').text());
    $('#h1').text('testing text');
})

$('#btn2').click(function(){
    console.log('clicked')
})

$('#myDiv').click(function(){
    $(this).addClass('clicked');
})
.find('span')
.attr('title','Hover over me')

$('#btn4').click(function(){
    $('.hidden').hide();
})
$('#btn3').click(function(){
    $('.hidden').show('slow');
})