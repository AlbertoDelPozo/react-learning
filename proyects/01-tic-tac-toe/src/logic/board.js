import { WINNER_COMBOS } from "../constants/constants";
export const checkWinnerFrom = (boardToCheck) => {
  // revismaos todas las combinacions ganadoras
  // para ver si X u O ganaron
  for (let combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // si no hay gandor
  return null;
};

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacios en el tablero
  return newBoard.every((squeare) => squeare !== null);
};
