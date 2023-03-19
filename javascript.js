function getComputerChoice(){
    let result = Math.floor( Math.random() *3 );
//  let result = Round number ( Generate 0.1-0.9 )(call to nothing) *3 ); 

    if (result == 0)
       return "Rock";
    else if
       (result == 1)
       return "Paper";
    else if
       (result == 2)
       return "Scissors";
        
}

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

console.log(getComputerChoice());

function getPlayerChoice(){
    
}

/*
1. Make a function for NPC that returns rock, paper or scissors √
2. Make a function that allows Player to click between rock, paper or scissors 
3. Make a function that decides who gets points based on I-XI outcome

    A. Make a function that returns a list of outcomes

    I.    ( rock == rock ) tie
    II.   ( rock < paper ) lose
    III.  ( rock > scissors ) win
    IV.   ( paper > rock ) 
    V.    ( paper == paper )
    VI.   ( paper < scissors )
    VII.  ( scissors < rock )
    VIII. ( scissors > paper )
    IX.   ( scissors == scissors )

    B. Make a function that counts each win / loss as data
        - If else statement

        Write a function that plays a single round of Rock Paper Scissors. 
        The function should take two parameters.
        - playerSelection 
        - computerSelection 
        - return a string that declares the winner of the round like so: 
        "You Lose! Paper beats Rock"
        Make your function’s playerSelection parameter case-insensitive.
*/