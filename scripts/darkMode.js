var darkMode=false;
function toggle(e){
                let cell;
                switch(darkMode){
                    case true:
                        document.getElementById('dark-mode-btn').setAttribute("src","assets/darkmode_dark.svg");
                        document.getElementById('home-btn').setAttribute("src","assets/home.svg");
                        document.getElementsByClassName('home-btn-wrapper')[0].style.backgroundColor="#363636";
                        document.getElementsByClassName('dark-mode-btn-wrapper')[0].style.backgroundColor="#363636";
                        document.getElementsByTagName('footer')[0].style.backgroundColor="#b7efcd";
                        document.getElementsByClassName('controls')[0].style.backgroundColor="#b7efcd";
                        document.getElementsByTagName('header')[0].style.backgroundColor="#bad7df";
                        document.getElementsByClassName('game-board')[0].style.backgroundColor="#b7efcd";
                        cell =  document.getElementsByClassName('cell');
                        for(let i=0;i<9;i++)
                            cell[i].style.backgroundColor="#4cd3c2";
                        
                       
                    break;
                    case false:

                        document.getElementById('dark-mode-btn').setAttribute("src","assets/darkmode.svg");
                        document.getElementById('home-btn').setAttribute("src","assets/home_dark.svg");
                        document.getElementsByClassName('home-btn-wrapper')[0].style.backgroundColor="#ffbcbc";
                        document.getElementsByClassName('dark-mode-btn-wrapper')[0].style.backgroundColor="#b7efcd";
                        document.getElementsByTagName('footer')[0].style.backgroundColor="#222831";
                        document.getElementsByClassName('controls')[0].style.backgroundColor="#222831";
                        document.getElementsByTagName('header')[0].style.backgroundColor="#393e46";
                        document.getElementsByClassName('game-board')[0].style.backgroundColor="#222831";
                        cell =  document.getElementsByClassName('cell');
                        for(let i=0;i<9;i++)
                            cell[i].style.backgroundColor="#393e46";
                        
                    break;
                }
                darkMode=!darkMode;
            }
