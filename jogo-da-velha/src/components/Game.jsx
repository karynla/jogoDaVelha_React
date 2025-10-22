{
  /*
    Faz todo o gerenciamento da logica do jogo
    alem de montar os squares/quadrados
    */
}

import { useState } from "react";
import "./Game.css";
import Square from "./Square";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let newRound = false;

  function handleSquareClick(i) {
    //lide com o click do quadrado
    if (squares[i]) return; //verifica se ja existe um elemento na posicao 1, se nao, sai do if
    const nextSquares = [...squares]; //copia da lista dos quadrados, para poder alterar a copia e nao a original
    nextSquares[i] = xIsNext ? "x" : "o";
    setSquares(nextSquares); // altera a copia e atualiza a
    setXIsNext(!xIsNext); // altera para o contrario do que é a condicao atual (true or false)
  }

  return (
    <div className="game">
      <h1 className="title">Jogo da velha</h1>
      <div className="status">Situação</div>
      <div className="board">
        <div className="row">
          {[0, 1, 2].map((i) => (
            <Square value={squares[i]} onClick={() => handleSquareClick(i)} />
          ))}
        </div>
        <div className="row">
          {[3, 4, 5].map((i) => (
            <Square value={squares[i]} onClick={() => handleSquareClick(i)} />
          ))}
        </div>
        <div className="row">
          {[6, 7, 8].map((i) => (
            <Square value={squares[i]} onClick={() => handleSquareClick(i)} />
          ))}
        </div>
      </div>
      <button className="reset">Novo Jogo</button>
    </div>
  );
}

export default Game;
