/**
 * Created by kazuha on 13-10-10.
 */
$(document).ready(function(){

});

$(document).keydown(function(e){
   switch(e.keyCode){
       case 37:move_left();break;
       case 39:move_right();break;
       case 40:move_down();break;
   }
});

function aa(){
    alert('s');

}


var num = 0;
var width = 40;
var height = 40;
var border = 8;
var i = 0;
var X = 3;
//var inte = setInterval(move,1000);
var pos = new Array();
for(var m = 0;m < 16;m++){
    pos[m] = new Array();
    for(var n = 0;n < 10;n++){
        pos[m][n] = 0;
    }
}
for(var m = 0;m < 16;m++){
    pos[m][0] = 1;
    pos[m][9] = 1;
}
for(var n = 0;n < 10;n++){
    pos[15][n] = 1;
}

class block_0{
    var pos = [
        [0,2,2,0],
        [0,2,2,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
}


function entry(){
    var b = new block_0;
    for(var m = 0;m < 4;m++){
        for(var n = 0;n < 4;n++){
            pos[m][n + 2] = pos[m][n + 2] | b.pos[m][n]
        }
    }

}

function move(){

    i++;
    if(i >= 15 || pos[X][i + 1] == 1){
        clearInterval(inte);
       // $('.block_0').removeClass().addClass('block');
    }
}

function move_left(){
    if(X > 0)X = X - 1;
    $('.block_0').css({left: width * X + 'px'});
}

function move_right(){
    if(X < 7)X = X + 1;
    $('.block_0').css({left: width * X + 'px'});
}

function move_down(){
    //for(var m = 14;m > i;m--){
    //    if((m == 14 || pos[X][m] == 1) && pos[X][m - 1] == 0){
            $('.block_0').css({top: width * 14 + 'px'});
            clearInterval(inte);
   // $('.block').removeClass().addClass('block_1');
    //    }
   // }
}