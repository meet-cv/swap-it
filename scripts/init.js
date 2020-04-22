var cell_state = {},score=0,game=false;
var move_step = 0.29*document.documentElement.clientWidth;
var game_state=[1,2,3,4,5,6,7,8];
function init(){
    var ele = document.getElementsByClassName('cell');
    game_state = shuffle(game_state);
    for(var i=0;i<8;i++){
        ele[i].innerText=game_state[i];  
    }
    var cell_no = 0,temp;
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
                if(cell_no!=8)
                    temp = ele[cell_no].innerText;
                else
                    temp = "9";
                cell_state[temp]=[i,j];
                cell_state[temp]["top"]=0;
                cell_state[temp]["left"]=0;
                cell_no++;
            }
        }
    game=true;
  }
  
               