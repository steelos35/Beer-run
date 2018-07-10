

//render player and set him on the board

const player = 
{x:0 , y:0}


const renderPlayer = () => {
  const playerElement =  document.createElement('div');
  playerElement.className = 'player';
  playerElement.style.left = '0px';
  playerElement.style.top = '0px';
  document.querySelector('.gameBoard').appendChild(playerElement);
  
}

renderPlayer();



//set the walls as static points on the board
const walls = [
  {x: 0, y: 3},
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 2, y: 4},
  {x: 3, y: 0},
  {x: 3, y: 2},
  {x: 4, y: 3},
  {x: 5, y: 0},
  {x: 5, y: 1},
  {x: 6, y: 3},
  {x: 6, y: 4},
  {x: 7, y: 1},
  {x: 8, y: 2},
  {x: 8, y: 3},
  {x: 9, y: 0},
  {x: 10, y: 2},
  {x: 10, y: 3},
  {x: 11, y: 0},
  
];


//render walls and create div for them and set them to read the cells instead of pixels 
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

//set the walls as static points on the board
const beers = [
  {x: 0, y: 4},
  {x: 3, y: 3},
  {x: 4, y: 0},
  {x: 6, y: 1},
  {x: 7, y: 4},
  {x: 9, y: 2},
  {x: 10, y: 0},
];


//render beers and create div for them and set them to read the cells instead of pixels 

const renderBeer = () => {
  const beerElement =document.querySelectorAll('.beers');
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

//set home as static point on the board
const home = 
{x:11, y:4};


//render home and create div for it and set it to read the cell instead of pixels 
const renderHome = () => {
  const homeElement =  document.createElement('div');
  homeElement.className = 'home';
  homeElement.style.right = '0px';
  homeElement.style.bottom = '0px';
  document.querySelector('.gameBoard').appendChild(homeElement);
}
renderHome();


//add an event listener to recognize the key strokes we are using for the game
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

// create instances where the player is allowed to move on the board
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


//set the boundries to the board via cells
const isCoordinateInGrid = (x,y) => {
  if (x < 0 || y < 0 || x > 11 || y > 4){
    return false;

  }
  return true;
}


// Loop through rocks, and check if any rock is at the given point.
const isThereAWall = (x, y) => {
  for (let i = 0; i < walls.length; i++) {
    const wall = walls[i];
    if (wall.x === x && wall.y === y) {
      return true;
    }
  }
  return false;
};

//constraints to the moves of the player, checking the boundries, walls
const canMoveTo = (x,y) => {
  if (!isCoordinateInGrid(x,y)) {
    return false;
  }
  if (isThereAWall(x,y)) {
    return false;
  }
  //checks if the cell is the home cell and whether the player has collected all beers before 
  //activating the home cell
  if (isThisHome(x,y) && score < 7) {
    return false;
  }
  return true;
}


//setting the score to zero to be able to use it
var score = 0;


//remove the beers as they are landed on and increment the score
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


//checking for beers at the cell
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

//checking to see if the cell is the one set for home
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
  //create the div for the win message and link it to the gameboard
  const winMessageElement = document.createElement('div');
  winMessageElement.className = 'win-message';
  winMessageElement.innerHTML = '';
  document.querySelector('.gameBoard').appendChild(winMessageElement);
  console.log('gameover')
};

//setting arguments checking for movement of the player, token, wining statement and
//displaying the win message if all areguements are met
const movePlayerTo = (x,y) => {
  const character = document.querySelector('.player');
  character.style.top = (y * 100).toString() + 'px';
  character.style.left = (x * 100).toString() + 'px';
  if (isThereABeer(x,y)) {
    removeBeer(x,y);
    renderBeer();
  }
  if (isThisHome(x,y) && score === 7) {
    displayWinMessage();
  }
  
};



