const pick = ["rock","paper","scissor"];
const begining = document.querySelector('body');
function getcomputerchoice(){
    return pick[Math.floor(Math.random() * 3)];
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

    if(playerscore.textContent == 5){
        window.location.assign("newindex.html");
    }
    else if(computerscore.textContent == 5){   
        window.location.assign("newindex.html");
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


