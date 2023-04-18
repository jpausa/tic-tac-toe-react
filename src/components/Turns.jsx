import { Square } from "./Square";
import { TURNS } from "../constants/common";

export const Turns = ({ turn }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};
