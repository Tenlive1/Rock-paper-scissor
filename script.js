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

function game(){

    let player_score = 0;
    let computer_score =0;

    while(player_score < 5 && computer_score < 5){
        let win_lose = round(getplayerchoice,getcomputerchoice);
        console.log(win_lose);
        if(win_lose.includes("Win")){
            player_score++;
            console.log(player_score + " - " + computer_score);
        }
        else if(win_lose.includes("Lose")){
            computer_score++;
            console.log(player_score + " - " + computer_score);
        }
        
    }
    
    if(player_score >= 5){
        return "you win"
    }
    return "you lost to the computer"

}
console.log(test);
console.log(game());
