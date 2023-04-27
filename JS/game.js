//getting the canvas from page 
let canvas = document.getElementById("canvas");

//set context 
let c = canvas.getContext("2d");

//canvas width and height
canvas.width = (innerWidth / 2) + 200; 
canvas.height = innerHeight / 1.5;

//variables that are used in the game
let showText = false;
let showTextForComputer = false;

//variables to keep track of rolls
let playerthrowNum = 0;
let computerthrowNum = 0;
let computerTurn = false;
let playerTurn = true;
let numberOfWins;
if(localStorage.length != 0){
    numberOfWins = Number(JSON.parse(localStorage[Object.keys(localStorage)[Object.keys(localStorage).length - 1]]).numberOfWins) ;
}
else{
    numberOfWins = 0;
}
console.log(numberOfWins);

//result for player and computer
let playerDiceResult = 0;
let computerDiceResult = 0;

//previous playerDiceResult variables for win by point
let previousDiceResult = 0;

// dice roll button
let i = 0;
function createButton(text,x,y){
    i++;
    let button = document.createElement("button");
    button.id = `btn${i}`;
    button.innerText = text;
    
    //setting the position on the canvas
    button.style.left = `${x}px`
    button.style.top = `${y}px`;
    document.body.appendChild(button);
}
createButton("Roll the Dice",(canvas.width / 2) + 120,canvas.height + 50);
let dices = [];

//for loop that uses an array to iterate through our dice images 
for(let i = 1; i < 7; i++){
    dices[i - 1] = new Image();
    dices[i - 1].src = `../images/Dice-${i}.svg`;
}

let playerDice = [];
let computerDice = [];
let playerDiceResults = [];
let computerDiceResults =  [];
class Dice{
    constructor({img,x,y}){
        this.img = img;
        this.x = x;
        this.y = y;
    }
    roll(){
        c.drawImage(this.img,this.x,this.y);
    }
}

//the initial dice
let x1 = 70;
let x2 = canvas.width - 170;  
for(let i = 0; i < 2; i++){
    playerDice.push(new Dice({img:dices[0],x:x1,y:canvas.height / 2 - 150}));
    computerDice.push(new Dice({img:dices[0],x:x2,y:canvas.height / 2 - 150}));
    x1 += 120;
    x2 -= 120;
}

let won = false;
let wonCom = false;
let playerLost = false;
let computerLost = false;
let result = true;

//animation loop
function animate(){
    //background of canvas
    c.fillStyle = " rgba(0, 0, 0, 0.23)";
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle = "red";

    //rolling the player and comptuer dice 
    playerDice.forEach((playerdice) => {
        playerdice.roll();
    })
    computerDice.forEach((computerdice) => {
        computerdice.roll();
    })

    //showing text on the canvas
    if(showText){
        c.fillStyle = "white";
        c.font = "20px Raleway-Black";
        c.fillText(`Your Roll is ${playerDiceResult}`, 120, 300);

        //if playerDice result is 7 on the first roll then the player instantly wins
        if((playerDiceResult == 7 || playerDiceResult == 11 ) && playerthrowNum == 1){
            c.fillStyle = "rgb(65, 252, 3)";
            c.font = "18px Raleway-Black";
            c.fillText("You Won!", 135, 350);
            computerTurn = true;
        }
        else if((playerDiceResult == 2 || playerDiceResult == 3 || playerDiceResult == 12) && playerthrowNum == 1){
            c.fillStyle = "red";
            c.font = "18px Raleway-Black";
            c.fillText("You Lost!", 135, 350);
            playerLost = true;
            computerTurn = true;
        }
        else if((playerDiceResult == 4 || playerDiceResult == 5 || playerDiceResult == 6 || playerDiceResult == 8 || playerDiceResult == 9 || playerDiceResult == 10) && playerthrowNum == 1){
            c.fillStyle = "rgb(3, 111, 252)";
            c.font = "18px Raleway-Black";
            c.fillText("Point!", 120, 350);
        }

        //if its not the first roll
        if(playerthrowNum > 1){
            for(let i = 0; i < playerDiceResults.length; i++){
                if(i > 0){
                    if(playerDiceResults[i] == playerDiceResults[i + 1] || playerDiceResults[i] == playerDiceResults[i - 1]){
                        c.fillStyle = "rgb(65, 252, 3)";
                        c.font = "18px Raleway-Black";
                        c.fillText("You Won!", 135, 350);
                        won = true;
                        computerTurn = true;
                    }
                }
                else{
                    if(playerDiceResults[i] == playerDiceResults[i + 1]){
                        c.fillStyle = "rgb(65, 252, 3)";
                        c.font = "18px Raleway-Black";
                        c.fillText("You Won!", 135, 350);
                        won = true;
                        computerTurn = true;
                    }
                }
            }
            if(playerDiceResult == 7){
                c.fillStyle = "red";
                c.font = "18px Raleway-Black";
                c.fillText("You Lost!", 135, 350);
                playerLost = true;
                computerTurn = true;
            }
            else if(!won){
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("Point!", 120, 350);
            }
        }
    }
    
    if(showTextForComputer){
        c.fillStyle = "white";
        c.font = "20px Raleway-Black";
        c.fillText(`Computer Roll is ${computerDiceResult}`, canvas.width - 190, 300);

        //if computerDice result is 7 and it is the first roll then the player will instantly win
        if((computerDiceResult == 7 || computerDiceResult == 11 ) && computerthrowNum == 1){
            c.fillStyle = "rgb(65, 252, 3)";
            c.font = "18px Raleway-Black";
            c.fillText("Computer Won", canvas.width - 200, 350);
            computerTurn = false;
            playerTurn = false;
        }
        else if((computerDiceResult == 2 || computerDiceResult == 3 || computerDiceResult == 12) && computerthrowNum == 1){
            c.fillStyle = "red";
            c.font = "18px Raleway-Black";
            c.fillText("Computer Lost", canvas.width - 200, 350);
            computerLost = true;
            computerTurn = false;
            playerTurn = false;
        }
        else if((computerDiceResult == 4 || computerDiceResult == 5 || computerDiceResult == 6 || computerDiceResult == 8 || computerDiceResult == 9 || computerDiceResult == 10) && computerthrowNum == 1){
            c.fillStyle = "rgb(3, 111, 252)";
            c.font = "18px Raleway-Black";
            c.fillText("Point!", canvas.width - 200, 350);
        }

        //if its not the first roll
        if(computerthrowNum > 1){
            for(let i = 0; i < computerDiceResults.length; i++){
                if(i > 0){
                    if(computerDiceResults[i] == computerDiceResults[i + 1] || computerDiceResults[i] == computerDiceResults[i - 1]){
                        c.fillStyle = "rgb(65, 252, 3)";
                        c.font = "18px Raleway-Black";
                        c.fillText("Computer Won", canvas.width - 200, 350);
                        wonCom = true;
                        computerTurn = false;
                        playerTurn = false;
                    }
                }
                else{
                    if(computerDiceResults[i] == computerDiceResults[i + 1]){
                        c.fillStyle = "rgb(65, 252, 3)";
                        c.font = "18px Raleway-Black";
                        c.fillText("Computer Won", canvas.width - 200, 350);
                        wonCom = true;
                        computerTurn = false;
                        playerTurn = false;
                    }
                }
            }
            if(computerDiceResult == 7){
                c.fillStyle = "red";
                c.font = "18px Raleway-Black";
                c.fillText("Computer Lost", canvas.width - 200, 350);
                computerLost = true;
                computerTurn = false;
                playerTurn = false;
            }
            else if(!wonCom){
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("Point!", canvas.width - 200, 350);
            }
        }
    }

    //calculating the winner 
    if(!computerTurn && !playerTurn){
        if(!playerLost && computerLost){
            c.fillStyle = "rgb(3, 111, 252)";
            c.font = "18px Raleway-Black";
            c.fillText("You won the round!", (canvas.width / 2)  - 80, 350);
            if(result){
                numberOfWins++;
                result = false;
            }
        }
        else if(playerLost && !computerLost){
            c.fillStyle = "rgb(3, 111, 252)";
            c.font = "18px Raleway-Black";
            c.fillText("Computer won the round", (canvas.width / 2)  - 100, 350);
        }
        else if(playerLost && computerLost){
            if(playerthrowNum > computerthrowNum){
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("You won the round!", (canvas.width / 2)  - 80, 350);
                if(result){
                    numberOfWins++;
                    result = false;
                }
            }
            else{
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("Computer won the round", (canvas.width / 2)  - 100, 350);
            }
        }
        else if(!playerLost && !computerLost){
            if(playerthrowNum < computerthrowNum){
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("You won the round!", (canvas.width / 2)  - 80, 350);
                if(result){
                    numberOfWins++;
                    result = false;
                }
            }
            else{
                c.fillStyle = "rgb(3, 111, 252)";
                c.font = "18px Raleway-Black";
                c.fillText("Computer won the round", (canvas.width / 2)  - 100, 350);
            }
        }
        btn.innerText = "Play Again!"
    }

    //storing users score in the localStorage 
    if(localStorage.length != 0){
        let username = Object.keys(localStorage)[Object.keys(localStorage).length - 1]
        let obj = JSON.parse(localStorage[username]);
        obj.numberOfWins = String(numberOfWins);
        localStorage.setItem(username,JSON.stringify(obj));
    }

    //calling the animation function over and over
    requestAnimationFrame(animate);
}

animate();

//resizing event listener
addEventListener("resize",()=>{
    canvas.width = (innerWidth / 2) + 200;
    canvas.height = innerHeight / 1.5;
})

//added a click event listener to the roll button
let btn = document.getElementById("btn1");
btn.addEventListener("click",()=>{
    if(!computerTurn && playerTurn){
        showText = true;
        if(showText){
            playerDiceResult = 0;
        }
        
        //removed the previous ones
        let x = -50;
        playerDice.length = 0;

        //select a random die for player two times using a for loop
        for(let i = 0; i < 2; i++){
            x += 120;
            let randomDice = Math.floor(Math.random() * dices.length);
            playerDiceResult += (randomDice + 1);
            playerDice.push(new Dice({img:dices[randomDice],x:x,y:canvas.height / 2 - 150}));
        }
        playerDiceResults.push(playerDiceResult);
        
        //displaying player text on canvas 
        playerthrowNum++;
    }
    if(btn.innerText == "Play Again!"){
        location.reload();
    }
})

setInterval(()=>{
    if(computerTurn){
        showTextForComputer = true;
        if(showTextForComputer){
            computerDiceResult = 0;
        }
        //removing previous ones
        let x = canvas.width - 40;
        computerDice.length = 0;

        //selecting two random dice for computer using for loop
        for(let i = 0; i < 2; i++){
            x -= 120;
            let randomDice = Math.floor(Math.random() * dices.length);
            computerDiceResult += (randomDice + 1);
            computerDice.push(new Dice({img:dices[randomDice],x:x,y:canvas.height / 2 - 150}));
        }
        computerDiceResults.push(computerDiceResult);

        //displaying computer text on the canvas
        computerthrowNum++;
    }
},1000)
