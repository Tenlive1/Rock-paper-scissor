const pick = ["rock","paper","scissor"];
const begining = document.querySelector('body');
function getcomputerchoice(){
    return pick[Math.floor(Math.random() * 3)];
}
function getpic(choice){

    const pic = document.createElement('img');
    if(choice == "rock"){
        pic.src = "picture/T-rock.png";
    }else if(choice == "paper"){
        pic.src = "picture/T-paper.png";
    }else if(choice == "scissor"){
        pic.src = "picture/T-scissor.png";
    }
    return pic;
}

function page(){ // this will delete the current page and make a new page
    document.body.innerHTML = "";
    document.body.style = "display: flex; align-items: center; justify-content: center;"
    const content = document.createElement('div');
    content.classList.add('container');
    document.body.appendChild(content);

    const text = document.createElement('div');
    text.classList.add('texts');

    const button = document.createElement('div');
    button.classList.add('but-container');

    const again = document.createElement("button");
    again.classList.add("again");
    again.style.backgroundColor = "orange";
    again.textContent = "PLAY AGAIN?";

    button.appendChild(again);

    again.addEventListener('click',() =>{ // once user click play again it will restore the beginning page and also make the button clickable
        document.body.innerHTML = res;
        document.body.style = "null";
        rps();

    });
    // this is just adding to the new page
    content.appendChild(text);
    content.appendChild(button);
    
}


function round(playerchoice,computerchoice){// this is where the game will determine who win
    let player = playerchoice;
    let computer = computerchoice;
    
    const playerscore = document.querySelector('#player-score'); 
    const computerscore = document.querySelector('#computer-score'); 
    if (player == computer){
    }
    else if(player == pick[0] && computer == pick[2] || player == pick[1] && computer == pick[0] || player == pick[2] && computer == pick[1]){
        playerscore.textContent++;
    }
    else{ 
        computerscore.textContent++;
    }

    if(playerscore.textContent === "5"){// if they reach 5 the player will be determine if they win or not
        page();
        const win = document.querySelector('.texts');
        win.textContent = "You Win";
        return false;
    }
    else if(computerscore.textContent === "5"){   
        page();
        const lose = document.querySelector('.texts');
        lose.textContent = "You Lose";
        return false;
    }
    return true;

}

const rps = function(){

    const btn = document.querySelectorAll('.player-button');

    btn.forEach((button) => {
        

        button.addEventListener('click', () => {
            
            let choice = button.getElementsByTagName('img')[0].alt.toLocaleLowerCase();
            let computerchoice = getcomputerchoice();
            
            let gameon = round(choice.toLowerCase(),computerchoice)

            if(gameon){
                const player = document.querySelector('.player-choice');
                const computer = document.querySelector('.computer-choice');
                document.querySelector('.player-choice').innerHTML = "";
                document.querySelector('.computer-choice').innerHTML = "";
                //need to make an imagine in js
                player.appendChild(getpic(choice));
                computer.appendChild(getpic(computerchoice));
            }
            
        }); 
    });

}; 

rps();
const res = document.body.innerHTML;
