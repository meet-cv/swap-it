//check validity of move
function check_move(idx) {
    var x = cell_state["9"][0], y = cell_state["9"][1];
    if (cell_state[idx][0] == x + 1 && cell_state[idx][1] == y)
        return "bottom";
    else if(cell_state[idx][0] == x-1 && cell_state[idx][1] == y)
        return "top";
    else if(cell_state[idx][0] == x && cell_state[idx][1] == y+1)
        return "right";
    else if(cell_state[idx][0] == x && cell_state[idx][1] == y-1)
        return "left";
    return null;
    }

//update positions of cells after a move
function update_state(idx){
    var temp;
    temp=cell_state["9"][0];
    cell_state["9"][0]=cell_state[idx][0];
    cell_state[idx][0]=temp;
    temp=cell_state["9"][1];
    cell_state["9"][1]=cell_state[idx][1];
    cell_state[idx][1]=temp; 
    }

//shuffle the array elements
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
            }
    return a;
    }

//make a move
function move(ele){
    var move_type = check_move(ele.innerText);
    if(move_type!=null){
        //document.getElementById("score_no").innerHTML=++score;
        switch(move_type){
            case "left":
                cell_state[ele.innerText]["left"]+=move_step;
                ele.style.left=cell_state[ele.innerText]["left"];
            break;
            case "right":
                cell_state[ele.innerText]["left"]-=move_step;
                ele.style.left=cell_state[ele.innerText]["left"];
            break;
            case "top":
                cell_state[ele.innerText]["top"]+=move_step;
                ele.style.top=cell_state[ele.innerText]["top"];
            break;
            case "bottom":
                cell_state[ele.innerText]["top"]-=move_step;
                ele.style.top=cell_state[ele.innerText]["top"];
            break;  
            }
        update_state(ele.innerText);
    }
}

