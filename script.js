
const Gameboard = (() => {
    const dashboard = document.querySelector('.dashboard');
    const start = document.querySelector('#start');  
    
    
    start.addEventListener('click', () => {
        createSetupView();
        start.disabled = true;
    })

    const createSetupView = () => {
        
    
    const  button0 = document.createElement('input')
    button0.type = 'button';
    button0.classList.add('style-button');
    button0.classList.add('right');
    dashboard.appendChild(button0);
    const  button1 = document.createElement('input')
    button1.type = 'button';
    button1.classList.add('style-button');
    button1.classList.add('button');
    dashboard.appendChild(button1);
    const  button2 = document.createElement('input')
    button2.type = 'button';
    button2.classList.add('style-button');
    button2.classList.add('left');
    dashboard.appendChild(button2);
    const  button3 = document.createElement('input')
    button3.type = 'button';
    button3.classList.add('style-button');
    button3.classList.add('right');
    dashboard.appendChild(button3);
    const  button4 = document.createElement('input')
    button4.type = 'button';
    button4.classList.add('style-button');
    button4.classList.add('button');
    dashboard.appendChild(button4);
    const  button5 = document.createElement('input')
    button5.type = 'button';
    button5.classList.add('style-button');
    button5.classList.add('left');
    dashboard.appendChild(button5);
    const  button6 = document.createElement('input')
    button6.type = 'button';
    button6.classList.add('style-button');
    button6.classList.add('right');
    dashboard.appendChild(button6);
    const  button7 = document.createElement('input')
    button7.type = 'button';
    button7.classList.add('style-button');
    dashboard.appendChild(button7);
    const  button8 = document.createElement('input')
    button8.type = 'button';
    button8.classList.add('style-button');
    button8.classList.add('left');
    dashboard.appendChild(button8);
    buttons();
    
    }
    
    const buttons = () => {
        const startGame = document.createElement('input');
        const resetGame =  document.createElement('input')
        startGame.type = 'button';
        startGame.classList.add('buttonsGame');
        startGame.value = 'Start Game';
        dashboard.appendChild(startGame);
        resetGame.type = 'button';
        resetGame.classList.add('buttonsGame');
        resetGame.value = 'Reset';
        resetGame.disabled = true;
        dashboard.appendChild(resetGame);


        startGame.addEventListener('click',() => {
            startGame.disabled = true;
            resetGame.disabled = false;
            game.startGame();
        })

        resetGame.addEventListener('click', () => {
            const sonsDashboard = document.querySelectorAll('.style-button')
            game.resetGame();
            sonsDashboard.forEach(element => {
                element.disabled = false
                element.value = '';
            });
        })


    }
    
    return {createSetupView}

})();

const player = (name, symbol) =>{
    
    const getname  = () => name;
    const getsymbol = () => symbol;
    
    return {getname,getsymbol}
};

const game = (() => {
    
    let gameBoardArray = [0 , 0 , 0,
        0 , 0 , 0,
        0 , 0 , 0];
    let turnPlayer = true;
    const showWinnerDom = document.querySelector('#Winner')
    

    const startGame  = () => {
    const namePlayer1 = document.querySelector('#player1').value;
    const namePlayer2 = document.querySelector('#player2').value;
    const player1 = player(`${namePlayer1}`,'O');
    const player2 = player(`${namePlayer2}`,'X');

        const Allbuttons = document.querySelectorAll('.style-button');
        Allbuttons.forEach(function(button,index) {
            button.addEventListener('click', () => {
                if( turnPlayer == true ){
                    button.value = player1.getsymbol();
                    button.disabled = true;
                    turnPlayer = false;
                    gameBoardArray[index] = 1;
                    checkWinner();
                }else{
                    button.value = player2.getsymbol();
                    button.disabled = true;
                    turnPlayer = true;
                    gameBoardArray[index] = 2;
                    checkWinner();
                } 
                
               
            })
        })
    }

    const showwinner = () => {
        
        if(turnPlayer == false){
            
            showWinnerDom.textContent = `${player1.value}`;
        }
        if(turnPlayer == true){
            
            showWinnerDom.textContent = `${player2.value}`;
        }
        
    }

    const checkWinner = () => {
         // Horizontal Logic
        if((gameBoardArray[0] == 1 && gameBoardArray[1] == 1 && gameBoardArray[2] == 1 ) || (gameBoardArray[0] == 2 && gameBoardArray[1] == 2 && gameBoardArray[2] == 2) ){
            showwinner()
        }
        if((gameBoardArray[3] == 1 && gameBoardArray[4] == 1 && gameBoardArray[5] == 1) || (gameBoardArray[3] == 2 && gameBoardArray[4] == 2 && gameBoardArray[5] == 2) ){
            showwinner()
        }
        if((gameBoardArray[6] == 1 && gameBoardArray[7] == 1 && gameBoardArray[8] == 1) || (gameBoardArray[6] == 2 && gameBoardArray[7] == 2 && gameBoardArray[8] === 2) ){
            showwinner()
        }
        //vertical
        if((gameBoardArray[0] == 1 && gameBoardArray[3] == 1 && gameBoardArray[6] == 1) || (gameBoardArray[0] == 2 && gameBoardArray[3] == 2 && gameBoardArray[6] == 2) ){
            showwinner()
        }
        if((gameBoardArray[1] == 1 && gameBoardArray[4] == 1 && gameBoardArray[7] == 1) || (gameBoardArray[1] == 2 && gameBoardArray[4] == 2 && gameBoardArray[7] == 2) ){
            showwinner()
        }
        if((gameBoardArray[2] == 1 && gameBoardArray[5] == 1 && gameBoardArray[8] == 1) || (gameBoardArray[2] == 2 && gameBoardArray[5] == 2 && gameBoardArray[8] == 2) ){
            showwinner()
        }
        //equis
        if((gameBoardArray[0] == 1 && gameBoardArray[4] == 1 && gameBoardArray[8] == 1) || (gameBoardArray[0] == 2 && gameBoardArray[4] == 2 && gameBoardArray[8] == 2) ){
            showwinner()
        }
        if((gameBoardArray[2] == 1 && gameBoardArray[4] == 1 && gameBoardArray[6] == 1) || (gameBoardArray[2] == 2 && gameBoardArray[4] == 2 && gameBoardArray[6] == 2) ){
            showwinner()
        }
    }

    const resetGame = () => {
        gameBoardArray = [0 , 0 , 0,
                          0 , 0 , 0,
                          0 , 0 , 0];
        turnPlayer = true;
        showWinnerDom.textContent = '';
    }

    
    return {startGame,resetGame}
})();

