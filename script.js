const pick = ["rock","paper","scissor"];
function getcomputerchoice(){
    return Math.floor(Math.random() * 3);
}

function getplayerchoice(){

    let player = window.prompt("Please pick Rock, Paper or scissor").toLowerCase();

    if(player == pick[0] || player == pick[1] || player ==  pick[3]){
        return player;
    }

    while(true){
        let again = window.prompt("choice does not exist Please pick rock or paper or scissor").toLowerCase();

        if(again == pick[0] || again == pick[1] || again ==  pick[3]){
            return again
        }
    }

    
}

console.log(getplayerchoice());

