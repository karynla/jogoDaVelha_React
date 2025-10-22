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

  return (
    <div className="game">
      <h1 className="title">Jogo da velha</h1>
      <div className="status">Situação</div>
      <div className="board">
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
      <button className="reset">Novo Jogo</button>
    </div>
  );
}

export default Game;
