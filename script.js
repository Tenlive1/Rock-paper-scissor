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
    again.classList.add("play-again");
    again.textContent = "PLAY AGAIN?";

    content.appendChild(text);
    content.appendChild(again);
    //document.body.appendChild(content);
    
}

function round(playerchoice,computerchoice){
    let player = playerchoice;
    let computer = computerchoice;
    
    const playerscore = document.querySelector('#player-score'); 
    const computerscore = document.querySelector('#computer-score'); 
    if (player == computer){
    }
    else if(player == pick[0] && computer == pick[2] || player == pick[1] && computer == pick[0] || player == pick[2] && computer == pick[1]){
        playerscore.textContent = 5;
    }
    else{ 
        computerscore.textContent = 5;
    }

    if(playerscore.textContent == 5){
        page();
        const win = document.querySelector('.container');
        //win.textContent = "you win";
    }
    else if(computerscore.textContent == 5){   
        page();
        const lose = document.querySelector('.container');
        //lose.textContent = "you lose";
    }

}

const btn = document.querySelectorAll('.player-button');

btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        let choice = button.textContent;
        let computerchoice = getcomputerchoice();
        round(choice.toLowerCase(),computerchoice);

        const player = document.querySelector('.player-choice');
        const computer = document.querySelector('.computer-choice');
        player.textContent = choice;
        computer.textContent = computerchoice.toUpperCase();


    });
     
  });


