/**
 * Created by kazuha on 13-10-10.
 */
$(document).ready(function(){

})

$(document).keydown(function(e){
    switch(e.keyCode){
        case 37:move_left;break;
        case 38:move_up;break;
        case 39:move_right;break;
        case 40:move_down;break;
    }
})

var i = 7;
var width = 20;
var mLeft = setInterval(move_left(),500);
//var mRight = setInterval(move_right(),500);
//var mTop = setInterval(move_up(),500);
//var mDown = setInterval(move_down(),500);

function move_left(){
    //clearInterval(mRight);
    //clearInterval(mTop);
    //clearInterval(mDown);
    $('.snake').css({left:width * i + 'px'});
    i--;
    if(i < 1){
        clearInterval(mLeft);
    }
}

function move_right(){
    $('.snake').css({left:width * i + 'px'});
    i++;
}

function move_up(){
    $('.snake').css({top:width * i + 'px'});
    i--;
}

function move_down(){
    $('.snake').css({top:width * i + 'px'});
    i++;
}