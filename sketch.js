var board, P1 = [], P2 = [], P3 = [], P4 = [], P5 = [], P6 = [], INFOSYS = [], TATA = [], WIPRO = [], ADIDAS = [], MICROSOFT = [], APPLE = [], compsAll = [INFOSYS, TATA, WIPRO, ADIDAS, MICROSOFT, APPLE], players = [P1, P2, P3, P4, P5, P6];

function setup(){
  createCanvas(850, 700);
  compsAll.forEach(comp => {comp = addSprites(6);});
  
  players.forEach(player => {player.push(removeINFOSYS());});
  players.forEach(player => {player.push(removeTATA());});
  players.forEach(player => {player.push(removeWIPRO());});
  players.forEach(player => {player.push(removeADIDAS());});
  players.forEach(player => {player.push(removeAPPLE());});
  players.forEach(player => {player.push(removeMICROSOFT());});
}
function draw(){
  background(220);
  drawSprites();
}

function addSprites(count){
return new Array(count).fill(aNewSprite());
}

function aNewSprite(){
  return createSprite(425, 350, 425, 350);
}

function removeCard(deck){ //deck an array
  var RC = parseInt[random(1, 6) -1];
  var CardToRemove = RC;
  var removal = deck.splice(RC, 1)[0];
} 

function removeINFOSYS(){
  removeCard(INFOSYS);
}

function removeTATA(){
  removeCard(TATA);
}

function removeWIPRO(){
  removeCard(WIPRO);
}

function removeADIDAS(){
  removeCard(ADIDAS);
}

function removeAPPLE(){
  removeCard(APPLE);
}

function removeMICROSOFT(){
  removeCard(MICROSOFT);
}