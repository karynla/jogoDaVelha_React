import "./Square.css";

{
  /*
    quadradinhos dentro do game
    comeca sempre do menor componente para o maior
    */
}
// props (propriedades): value-valor do square onClick-funcao que define o estado do square(x o ou sem nada)
function Square({ value, onClick }) {
  //criando a condicao da classe dinamica para usar no css
  let style = null;

  if (value == "X") style = "square x";
  else if (value == "O") style = "square o";
  else style = "square";

  return (
    <div>
      <button onClick={onClick} className={style}>
        {value}
      </button>
    </div>
  );
}

export default Square;
