const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

roundResult = document.querySelector('#roundResult');
scoreMessage = document.querySelector('#scoreMessage');
winner = document.querySelector('#winner');

let playerScore = 0;
let computerScore = 0;

/* Computer generates random 0,1 or 2 and makes a move */
function computerPlay(){
computerMove=['Paper', 'Rock', 'Scissors'];
randomMove=Math.floor(Math.random()*3);
return computerMove[randomMove];
}

function correctInput(selection){
    if (typeof(selection) != "string"){
      return false;
    }else if (selection.length < 4){
      return false;
    }
    else if(selection.length>8){
      return false;
    }
    else{
      selection = selection[0].toUpperCase() + selection.slice(1).toLowerCase();
  
      validInput = {'Paper':'',
                    'Rock':'', 
                   'Scissors':''};
    /* Operator in returns true if selection is contained inside validInput */ 
      if (selection in validInput == false){
        return false;
      }else{
        return selection;
      }
    }
  }

  function playRound(playerMove, computerMove){
    playerMove = correctInput(playerMove);
    computerMove = correctInput(computerMove);
    whoWon.style.display = "none";
    if (playerMove == false | computerMove == false){
      roundResult.textContent = "Please enter 'Paper', 'Rock', or 'Scissors'.";
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }else if (playerMove === computerMove){
      roundResult.textContent = "It's a tie! You both selected " + playerMove + ".";
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }else if (playerMove === 'Scissors' && computerMove === 'Paper'){
      roundResult.textContent = "You Win! Scissors beats Paper!";
      playerScore++;
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }else if (computerMove === 'Scissors' && playerMove === 'Paper'){
      roundResult.textContent = "You Lose! Scissors beats Paper!";
      computerScore++;
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }else if (playerMove < computerMove){
      roundResult.textContent = "You Win! " + playerMove + " beats " + computerMove + ".";
      playerScore++;
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }else {
      roundResult.textContent = "You Lose! " + computerMove + " beats " + playerMove + ".";
      computerScore++;
      scoreMessage.textContent = "Computer: " + computerScore + " Player: " + playerScore;
    }
  
    if (computerScore == 5){
        whoWon.style.display = "block";
        whoWon.textContent = "The computer reached five first. You've lost. Play again?";
        computerScore = 0;
        playerScore = 0;
      }else if (playerScore == 5){
        whoWon.style.display = "block";
        whoWon.textContent = "First to five! You win! Play again?";
        computerScore = 0;
        playerScore = 0;
      }
    }
    
    rock.addEventListener('click', function(){
      playRound('rock', computerPlay())
    });
    paper.addEventListener('click', function(){
      playRound('paper', computerPlay())
    });
    scissors.addEventListener('click', function(){
      playRound('scissors', computerPlay())
    });
   