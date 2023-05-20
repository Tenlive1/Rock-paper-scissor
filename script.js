const pick = ["rock","paper","scissor"];

function getcomputerchoice(){
    return pick[Math.floor(Math.random() * 3)];
}

function getplayerchoice(){

    let player = window.prompt("Please pick Rock, Paper or scissor").toLowerCase();

    if(player == pick[0] || player == pick[1] || player ==  pick[2]){
        return player;
    }

    while(true){
        let again = window.prompt("choice does not exist Please pick rock or paper or scissor").toLowerCase();

        if(again == pick[0] || again == pick[1] || again ==  pick[2]){
            return again
        }
    }

    
}

function round(getplayerchoice,getcomputerchoice){
    let player = getplayerchoice();
    let computer = getcomputerchoice();

    if (player == computer){
        return "Draw";
    }
    else if(player == pick[0] && computer == pick[2] || player == pick[1] && computer == pick[0] || player == pick[2] && computer == pick[1]){
        return "You Win! " + player + " beats " + computer;
    }
    else{
        return "You Lose! " + player + " beats " + computer;
    }

}

const btn = document.querySelectorAll('.player-button');

btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        let choice = button.textContent;

        const player = document.querySelector('.player-choice');
        player.textContent = choice;


    });
  });


