var cell_state,score;
var move_step = 0.27*document.documentElement.clientWidth+5;
var game_state=[1,2,3,4,5,6,7,8];
function init(){
    score=0;
    cell_state={};
    document.getElementById("score").innerHTML="0";
    document.getElementsByClassName("resume-btn")[0].style.display="block";
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
                ele[cell_no].style.left=0;
                ele[cell_no].style.top=0;
                cell_no++;
            
            }
        }
  }
  
 function result(){
  let cell_no=1;
  	  for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
                if(cell_state[cell_no][0]!==i || cell_state[cell_no][1]!==j)
                 return false;
                cell_no++;
            }
        }
  	return true;
  }
  
               
