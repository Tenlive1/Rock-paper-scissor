const pick = ["rock","paper","scissor"];
const begining = document.querySelector('body');
function getcomputerchoice(){
    return pick[Math.floor(Math.random() * 3)];
}

function page(){
    document.body.innerHTML = "";
    const content = document.createElement('div');
    content.classList.add('container');
    document.body.appendChild(content);

    const text = document.createElement('div');
    text.classList.add('texts');

    const again = document.createElement("button");
    again.classList.add("again");
    again.textContent = "PLAY AGAIN?";

    again.addEventListener('click',() =>{
        document.body.innerHTML = res;
        const btns = document.querySelectorAll('.player-button');

        btns.forEach((button) => {
            

            button.addEventListener('click', () => {
                
                let choice = button.textContent;
                let computerchoice = getcomputerchoice();
                
                let test = round(choice.toLowerCase(),computerchoice)

                if(test){
                    const player = document.querySelector('.player-choice');
                    const computer = document.querySelector('.computer-choice');
                    player.textContent = choice;
                    
                    computer.textContent = computerchoice.toUpperCase();
                }

                

            });
            
        });

    });

    content.appendChild(text);
    content.appendChild(again);
    
}


function round(playerchoice,computerchoice){
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

    if(playerscore.textContent === "5"){
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
        
        let test = round(choice.toLowerCase(),computerchoice)

        if(test){
            const player = document.querySelector('.player-choice');
            const computer = document.querySelector('.computer-choice');
            player.textContent = choice;
            
            computer.textContent = computerchoice.toUpperCase();
        }

        

    });
     
  });


const res = document.body.innerHTML;
