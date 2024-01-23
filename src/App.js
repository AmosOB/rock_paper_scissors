import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomChoice = () => choices[Math.floor(Math.random() * choices.length)];
  const [player, setPlayer] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(0);

  const handleRock = () => {
    setPlayer('Rock');
    setComputer(randomChoice());
    determineWinner('Rock', computer);
  }
  const handleScissor = () => {
    setPlayer('Scissor');
    setComputer(randomChoice());
    determineWinner('Scissor', computer);
  }
  const handlePaper = () => {
    setPlayer('Paper');
    setComputer(randomChoice());
    determineWinner('Paper', computer);
  }

  const determineWinner = (player, computer) => {
    if (player === computer) {
      // It's a tie, no need to update the result
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissor' && computer === 'Paper')
    ) {
      // Player wins
      setResult((prevResult) => prevResult + 1);
    } else {
      // Computer wins
      setResult((prevResult) => prevResult - 1);
    }
  };

  return (
    <>
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
              <h4 className='mx-3'>{result}</h4>
              <h4 className='mx-3'>{result}</h4>
            </div>
            <div className='d-flex justify-content-center'>
              <button type='button' 
                className='btn btn-dark mx-3' onClick={ handleRock}>Rock
              </button>
              <button type='button' 
                className='btn btn-dark mx-3' onClick={handlePaper}>Paper
              </button>
              <button type='button' 
                className='btn btn-dark mx-3' onClick={handleScissor}>Scissors
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
