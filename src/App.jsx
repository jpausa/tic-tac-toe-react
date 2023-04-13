import "./App.css";
import Square from "./Square";

const TURNS = {
  X: "x",
  O: "o",
};

function App() {
  const board = Array(9).fill(null);
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {index}
            </Square>
          );
        })}
      </section>
    </main>
  );
}

export default App;
