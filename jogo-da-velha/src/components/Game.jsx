{
  /*
    Faz todo o gerenciamento da logica do jogo
    alem de montar os squares/quadrados
    */
}

import { useState } from "react";
import "./Game.css";
import Square from "./Square";

// funcao que nao manipula componentes, ela apenas recebe componentes e verifica/compara quem é o vencedor
// quando nao altera o state do componente fica fora da funcao principal
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // linas-horizontal
    [0, 3, 6],
    [2, 4, 7],
    [2, 5, 8], // colunas-vertical
    [0, 4, 8],
    [2, 4, 6], // diagonais
  ];

  // destruction, para cada registro de lines, quero que seja atribuido no a, b e c.
  // na primeira passagem pelo vetor [a,b,c] vao ser [0,1,2]
  for (let [a, b, c] of lines) {
    // SE a casa a está preenchida E o valor da casa a é igual ao valor da casa b E o valor da casa a é igual ao valor da casa c, ENTÃO existe uma vitória nessa linha.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // se nao retornar nenhum resulado(false), nao existe vencedor
  return null;
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  let newRound = false;

  // armazena o vencedor, se estiver vazia é pq nao teve nenhum vencedor
  const winner = calculateWinner(squares);
  // variavel que altera conforme a verificacao
  let status;

  // condicao verifica status do jogo
  if (winner) {
    status = "Vencedor " + winner;
    newRound = true;
  } else if (!squares.includes(null)) {
    status = "Empate!";
    newRound = true;
  } else {
    status = "Próxima jogada " + (xIsNext ? "x" : "o");
    newRound = false;
  }

  function handleSquareClick(i) {
    //lide com o click do quadrado
    if (squares[i] || winner) return; //verifica se ja existe um elemento na posicao 1, se nao, sai do if ou se existe vencedor
    const nextSquares = [...squares]; //copia da lista dos quadrados, para poder alterar a copia e nao a original
    nextSquares[i] = xIsNext ? "x" : "o";
    setSquares(nextSquares); // altera a copia e atualiza a
    setXIsNext(!xIsNext); // altera para o contrario do que é a condicao atual (true or false)
  }
  function resetGame() {
    // se for true, preencha tudo como null-nulo, reinicialize a useState
    setSquares(Array(9).fill(null));
    // x é sempre o primeiro a jogar
    setXIsNext(true);
  }

  return (
    <div className="game">
      <h1 className="title">Jogo da velha</h1>
      <div className={winner ? "status winner" : "status"}>{status}</div>
      <div className="board">
        <div className="row">
          {[0, 1, 2].map((i) => (
            <Square
              value={squares[i]}
              onClick={() => handleSquareClick(i)}
              key={i}
            />
          ))}
        </div>
        <div className="row">
          {[3, 4, 5].map((i) => (
            <Square
              value={squares[i]}
              onClick={() => handleSquareClick(i)}
              key={i}
            />
          ))}
        </div>
        <div className="row">
          {[6, 7, 8].map((i) => (
            <Square
              value={squares[i]}
              onClick={() => handleSquareClick(i)}
              key={i}
            />
          ))}
        </div>
      </div>

      {
        // se newRound for true, o botao aparece, se for false ele some
        newRound && (
          <button className="reset" onClick={resetGame}>
            Novo Jogo
          </button>
        )
      }
    </div>
  );
}

export default Game;
