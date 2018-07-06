const player = {
  x:0 , y:0
}
const renderPlayer = () => {
  const playerElement =  document.createElement('div');
  playerElement.className = 'player';
  playerElement.style.left = '0px';
  playerElement.style.top = '0px';
  document.querySelector('.gameBoard').appendChild(playerElement);
  
}

renderPlayer();


const walls = [
  {x: 0, y: 3},
  {x: 1, y: 1},
  {x: 2, y: 4},
  {x: 3, y: 1},
  {x: 4, y: 2},
  
];

const renderWall = () => {
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    const wallElement = document.createElement ('div');
    wallElement.className = 'walls';
    wallElement.style.left = (wall.x * 100).toString() + 'px';
    wallElement.style.top = (wall.y * 100).toString() + 'px';
    document.querySelector ('.gameBoard').appendChild(wallElement);
  }
};

renderWall();


const beers = [
  {x: 0, y: 2},
  {x: 2, y: 1},
  {x: 3, y: 4},
];


const renderBeer = () => {
  const beerElement =document.querySelectorAll('.beers');
  console.log
  for (let j = 0; j < beerElement.length; j++) {
    beerElement[j].remove();
    console.log('wooohoo!!')
  }

  for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];
    const beerElement = document.createElement ('div');
    beerElement.className = 'beers';
    beerElement.style.left = (beer.x * 100).toString() + 'px';
    beerElement.style.top = (beer.y * 100).toString() + 'px';
    document.querySelector ('.gameBoard').appendChild(beerElement);
  }
};

renderBeer();


const home = 
{x:4, y:4 }


const renderHome = () => {
  const homeElement =  document.createElement('div');
  homeElement.className = 'home';
  homeElement.style.right = '0px';
  homeElement.style.bottom = '0px';
  document.querySelector('.gameBoard').appendChild(homeElement);
}
renderHome();



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


const isCoordinateInGrid = (x,y) => {
  if (x < 0 || y < 0 || x > 4 || y > 4){
    return false;

  }
  return true;
}


const isThereAWall = (x, y) => {
  // Loop through rocks, and check if any rock is at the given point.
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    if (wall.x === x && wall.y === y) {
      return true;
    }
  }
  return false;
};
// check for beers at the coordinate 

const canMoveTo = (x,y) => {
  if (!isCoordinateInGrid(x,y)) {
    return false;
  }
  if (isThereAWall(x,y)) {
    return false;
  }
  if (isThisHome(x,y) && score < 3){
    return false;
  }
  return true;
}

var score = 0;

const removeBeer = (x, y) => {
  for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];
    if (beer.x === x && beer.y === y) {
      beers.splice(i, 1);
      renderBeer();
    score +=1;
      
    }
  
    
  }
};

const isThereABeer = (x, y) => {
  for (let i = 0; i < beers.length; i++) {
    const beer = beers[i];
    if (beer.x === x && beer.y === y) {
      removeBeer()
      return true;
    }
  }
  return false;
};


const isThisHome = (x,y) => {
  if (home.x === x && home.y === y) {
    removeBeer()
    return true;
  }
}



const displayWinMessage = () => {
  // Only display one win message.
  if (document.querySelector('.win-message') !== null) {
    return;
  }
  const winMessageElement = document.createElement('div');
  winMessageElement.className = 'win-message';
  winMessageElement.innerHTML = 'Home Safe!!!';
  document.querySelector('.gameBoard').appendChild(winMessageElement);
};
console.log('game-over')




  const movePlayerTo = (x,y) => {
    const character = document.querySelector('.player');
    character.style.top = (y * 100).toString() + 'px';
    character.style.left = (x * 100).toString() + 'px';
    if (isThereABeer(x,y)) {
      removeBeer(x,y);
      renderBeer();
    }
     if (isThisHome(x,y) && score === 3) {
        displayWinMessage();
      }
      
    }
    
  
    