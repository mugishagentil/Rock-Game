import { useState } from "react"

function Game(){
    const [game, setgame] = useState();
    const RandomNumber = Math.random();
    const computerMove = '';

    const RockButton = () => {
        if(RandomNumber > 0 && RandomNumber < 1/2){
            computerMove = "Rock"
        }
        if(RandomNumber > 1/2 && RandomNumber < 1/3){
            computerMove = "Paper"
        }
        if(RandomNumber > 1/3 && RandomNumber < 1){
            computerMove = "Scissor"
        }

        let result = '';
        if(computerMove === "Rock"){
            result = "Tie"
        }
        if(computerMove === "Paper"){
            result = "You Lose"
        }
        if(computerMove === "Scissor"){
            result = "Win"
        }
        setgame({result})
    }

    const PaperButton = () => {
        if(RandomNumber > 0 && RandomNumber < 1/2){
            computerMove = "Rock"
        }
        if(RandomNumber > 1/2 && RandomNumber < 1/3){
            computerMove = "Paper"
        }
        if(RandomNumber > 1/3 && RandomNumber < 1){
            computerMove = "Scissor"
        }

        let result = '';
        if(computerMove === "Rock"){
            result = "Win"
        }
        if(computerMove === "Paper"){
            result ="Tie"
        }
        if(computerMove === "Scissor"){
            result = "Lose"
        }
    }

    const ScissorButton = () => {
        if(RandomNumber > 0 && RandomNumber < 1/2){
            computerMove = "Rock"
        }
        if(RandomNumber > 1/2 && RandomNumber < 1/3){
            computerMove = "Paper"
        }
        if(RandomNumber > 1/3 && RandomNumber < 1){
            computerMove = "Scissor"
        }

        let result = '';
        if(computerMove === "Scissor"){
            result = "Tie"
        }
        if(computerMove === "Rock"){
            result = 'Lose'
        }
        if(computerMove === "Paper"){
            result = "Win"
        }
    }
    return(
        <div className="container">
        <h3>Rock Paper Scissor</h3>
        <p>{game}</p>
        <button onClick={RockButton}>Rock</button>
        <button onClick={PaperButton}>Paper</button>
        <button>Scissor</button>
        </div>
    )
}
export default Game