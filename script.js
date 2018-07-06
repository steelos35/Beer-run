const renderPlayer = () => {
  const playerElement =  document.createElement('div');
  playerElement.className = 'player';
  playerElement.style.left = '0px';
  playerElement.style.top = '0px';
  document.querySelector('.gameBoard').appendChild(playerElement);

}

renderPlayer();


document.body.addEventListener('keydown',evt =>{
  const keyCode = evt.keyCode;
  if ([37, 38, 39, 40].includes(keyCode)) {
    evt.preventDefault();
  }


  switch (keyCode) {
    case 37:
    moveLeft();
    break;
    case 38:
    moveUp();
    break;
    case 39:
    moveRight();
    break;
    case 40:
    moveDown();
    break;
    
  }
})

const player = {
  x:0 , y:0
}

const moveLeft = () => {
  if (canMoveTo(player.x - 1, player.y)) {
    player.x -= 1;
    movePlayerTo(player.x, player.y)
  }
}
const moveRight = () => {
  if (canMoveTo(player.x + 1, player.y)) {
    player.x += 1;
    movePlayerTo(player.x, player.y)
  }
}

const moveUp = () => {
  if (canMoveTo(player.x, player.y - 1)) {
    player.y -= 1;
    movePlayerTo(player.x, player.y)
  }
}

const moveDown = () => {
  if (canMoveTo(player.x, player.y + 1)) {
    player.y += 1;
    movePlayerTo(player.x, player.y)
  }
}


const walls = [
  {x: 0, y: 3},
  {x: 1, y: 1},
  {x: 2, y: 4},
  {x: 3, y: 1},
  {x: 4, y: 2},
  
];


const isThereAWall = (x, y) => {
  // Loop through rocks, and check if any rock is at the given point.
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    if (wall.x === x && wall.y === y) {
      return false;
    }
  }
  return true;
};

const renderWalls = () => {
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    const wallElement = document.createElement('div');
    wallElement.className = 'wall';
    // Multiply the x,y coordinates by 100 because each grid square
    // is 100x100 pixels in size.
    wallElement.style.left = (wall.x * 100).toString() + 'px';
    wallElement.style.top = (wall.y * 100).toString() + 'px';
    document.querySelector('.board').appendChild(wallElement);
  }
};
renderWalls();


const canMoveTo = (x,y) => {
  if (!isCoordinateInGrid(x,y)) {
    return false;
  }
    if (isThereAWall(x,y)) {
      return false;
    }
  return true;
  }



  const isCoordinateInGrid = (x,y) => {
    if (x < 0 || y < 0 || x > 4 || y > 4){
      return false;

    }
    return true;
  }

  const movePlayerTo = (x,y) => {
    const character = document.querySelector('.player');
    character.style.top = (y * 100).toString() + 'px';
    character.style.left = (x * 100).toString() + 'px';
  }