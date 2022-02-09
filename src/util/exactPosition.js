//Troca as posições no slide e muda a cor do ícone para branco(ativado) ou cinza(desativado)
function exactPosition(index = 0, setColor, setPosition) {
  setPosition(index);

  let arr = [false, false, false, false];
  arr[index] = true;
  setColor(arr);
}

export default exactPosition;
