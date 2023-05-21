const pick = ["rock","paper","scissor"];
const begining = document.querySelector('body');
function getcomputerchoice(){
    return pick[Math.floor(Math.random() * 3)];
}

function page(){ // this will delete the current page and make a new page
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('container');
    document.body.appendChild(content);

    const text = document.createElement('div');
    text.classList.add('texts');

    const again = document.createElement("button");
    again.classList.add("again");
    again.textContent = "PLAY AGAIN?";

    again.addEventListener('click',() =>{ // once user click play again it will restore the beginning page and also make the button clickable
        document.body.innerHTML = res;
        const btns = document.querySelectorAll('.player-button');

        btns.forEach((button) => { // for each button listen to a click if there's a click do the function
            

            button.addEventListener('click', () => {
                
                let choice = button.textContent;
                let computerchoice = getcomputerchoice();// getting the computer decision
                
                let gameon = round(choice.toLowerCase(),computerchoice); // to tell me if the game is still being play

                if(gameon){
                    const player = document.querySelector('.player-choice'); // picking the player choice
                    const computer = document.querySelector('.computer-choice');
                    player.textContent = choice;
                    
                    computer.textContent = computerchoice.toUpperCase();
                }

                

            });
            
        });

    });
    // this is just adding to the new page
    content.appendChild(text);
    content.appendChild(again);
    
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
        win.textContent = "you win";
        return false;
    }
    else if(computerscore.textContent === "5"){   
        page();
        const lose = document.querySelector('.texts');
        lose.textContent = "you lose";
        return false;
    }
    return true;

}

const btn = document.querySelectorAll('.player-button');

btn.forEach((button) => {
    

    button.addEventListener('click', () => {
        
        let choice = button.textContent;
        let computerchoice = getcomputerchoice();
        
        let gameon = round(choice.toLowerCase(),computerchoice)

        if(gameon){
            const player = document.querySelector('.player-choice');
            const computer = document.querySelector('.computer-choice');
            player.textContent = choice;
            
            computer.textContent = computerchoice.toUpperCase();
        }

        

    });
     
  });


const res = document.body.innerHTML;
