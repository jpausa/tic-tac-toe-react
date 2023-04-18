export const saveGameStorage = (newBoard, newTurn) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const resetGame = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
