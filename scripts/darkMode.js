var darkMode=false;
function toggle(e){
                let cell;
                switch(darkMode){
                    case true:
                        document.getElementsByClassName('toggle-slider')[0].style.left = '0px';
                        document.getElementsByTagName('header')[0].style.backgroundColor="#bad7df";
                        document.getElementsByTagName('footer')[0].style.backgroundColor="#bad7df";
                        document.getElementsByClassName('game-board')[0].style.backgroundColor="#f6f6f6";
                        cell =  document.getElementsByClassName('cell');
                        for(let i=0;i<9;i++)
                            cell[i].style.backgroundColor="#bad7df";
                       
                    break;
                    case false:
                        document.getElementsByClassName('toggle-slider')[0].style.left = '20px';
                        document.getElementsByTagName('header')[0].style.backgroundColor="#393e46";
                        document.getElementsByTagName('footer')[0].style.backgroundColor="#393e46";
                        document.getElementsByClassName('game-board')[0].style.backgroundColor="#222831";
                        cell =  document.getElementsByClassName('cell');
                        for(let i=0;i<9;i++)
                            cell[i].style.backgroundColor="#393e46";
                        
                    break;
                }
                darkMode=!darkMode;
            }
