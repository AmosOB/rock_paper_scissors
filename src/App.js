import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];

  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [playerResult, setPlayerResult] = useState(0);
  const [computerResult, setComputerResult] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);

  const handleChoice = (selectedChoice) => {
    setPlayer(selectedChoice);
    const newComputer = randomChoice();
    setComputer(newComputer);
    determineWinner(selectedChoice, newComputer);
    setGamesPlayed((prevGamesPlayed) => prevGamesPlayed + 1);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      // It's a tie, no need to update the result
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      // Player wins
      setPlayerResult((prevResult) => prevResult + 1);
    } else {
      // Computer wins
      setComputerResult((prevResult) => prevResult + 1);
    }
  };

  const resetGame = () => {
    setPlayer(null);
    setComputer(null);
    setPlayerResult(0);
    setComputerResult(0);
    setGamesPlayed(0);
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-6 bg-success'>
          <div className='d-flex justify-content-center'>
            <h1 className='mx-3'>Player</h1>
            <h1 className='mx-3'>Computer</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <h4 className='mx-3'>{player}</h4>
            <h4 className='mx-3'>{computer}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            <h4 className='mx-3'>{playerResult}</h4>
            <h4 className='mx-3'>{computerResult}</h4>
          </div>
          <div className='d-flex justify-content-center'>
            {gamesPlayed === 3 && (
              <h2>{playerResult > computerResult ? "You win!" : "Computer wins!"}</h2>
            )}
          </div>
          <div className='d-flex justify-content-center'>
            {choices.map((choice) => (
              <button
                key={choice}
                type='button'
                className='btn btn-dark mx-3'
                onClick={() => handleChoice(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
          <div className='d-flex justify-content-center mt-3'>
              <button
                type='button'
                className='btn btn-dark mx-3'
                onClick={resetGame}
              >
                Try Again
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
