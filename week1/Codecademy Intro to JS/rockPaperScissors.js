const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
      return userInput;
    }else{
      console.log("Error!")
    }
  };
  console.log(getUserChoice('PAPER'));
  console.log(getUserChoice('pa'));
  
  function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2: 
        return 'scissors';
    }
  }
  console.log(getComputerChoice());
  
  function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
      return "its a tie";
    }
    if(userChoice === "rock"){
      if(computerChoice === "paper"){
        return "User won!"
      }
    }
    if(userChoice === "paper"){
      if(computerChoice === "scissors"){
        return "The computer won!";
      }else{
        "You won!";
      }
    }
    if(userChoice === "scissors"){
      if(computerChoice === "rock"){
        return "The computer won!";
      }else{
        return "You won!";
      }
    }
    if(userChoice === "bomb"){
      return "User WON!"
    }
  }
  
  console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
  console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();