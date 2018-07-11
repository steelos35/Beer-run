# Beer-run

  This is a grid based game that requires picking up all the tokens(beers) and navigating around the maze like board.  The home icon is not active unless all tokens are retrieved.

Process:

The project was set to be a 5x5 board with some obstacles and tokens to pick up and then proceed home.  The main idea of the project is to showcase the JavaScript that was taught and show our understanding of it.  

![wireframe](https://user-images.githubusercontent.com/39779666/42573673-c09bfec8-84ea-11e8-9b74-207fea62d984.png)


  I had a plan and some ideas of how I wanted to code it.  I tried to work on a 5x5 grid and it was a good idea to have an overall plan but I kept getting stuck on how to start. Upon consulting with my project lead, I was given some ideas and given some feedback on the project.  After reviewing sites and videos on my basic concept i had a better understanding on what i needed to do.  Prioritizing what needed to be done proved to be a good start and helped me see that I needed to break down the ideas and start from the smallest possible idea which was to build a 2x2 grid and have a cursor move around the board freely and with no errors.  

![5x5 basic board](https://user-images.githubusercontent.com/39779666/42573757-f9f9bc50-84ea-11e8-9f3d-0b9d09ec1a52.png)

![5x5 with icons](https://user-images.githubusercontent.com/39779666/42573773-0810d364-84eb-11e8-8ec9-d76b6f91d51e.png)

  I then felt comfortable moving to a 5x5 grid and doing the same process.  Once I felt comfortable and understood the logic I was able to create a  character and then moved onto building walls and tokens.  I was then able to take all the pieces and write a code that checked for the walls that were placed static around the game board.  If the cell was occupied the character was not allowed to move there using a boolean argument.  

![5x5 board with background](https://user-images.githubusercontent.com/39779666/42573806-16ad475e-84eb-11e8-993a-8edbcbb6e87f.png)

  Once the obstacles were in place and the character being able to move around the game-board I worked on getting the beers and having them disappear from the screen.  Setting the code to recognize the locations of the beer and add a point value was relatively simple to implement.  There was a problem when I wanted to have the beer icons to disappear upon collecting them.  I had to refer to the blare game and help from another group to tackle this problem.  

![5x12 layout1](https://user-images.githubusercontent.com/39779666/42573831-25b854aa-84eb-11e8-9da9-f6ca99cd610d.png)
![5x12 layout 2](https://user-images.githubusercontent.com/39779666/42573851-356f494e-84eb-11e8-818a-a1b52e4a3c01.png)
![5x12 layout 3](https://user-images.githubusercontent.com/39779666/42573901-5477b056-84eb-11e8-8407-14673271b686.png)
![5x12 walls and beer layout](https://user-images.githubusercontent.com/39779666/42573916-5faa335e-84eb-11e8-8b66-d907190089bd.png)

  It was very satisfying to have the small game work and have it work the way I envisioned.  After seeing the process I was not satisfied with it being just 5x5.  I knew I can expand this game and make it work with more cells.  I stepped away from my work and thought about how big I wanted to expand this.  I sat and drew some versions and locations of the walls and beers.  This lead me to make it more of a maze game.  The board expanded to a 5x12 layout and needed more walls and beers.  Since they were set static on the board it was easy to set up.  But upon expansion i had to be mindful of resetting the values that were set to make the original board.  I increased the value to collect to 7 and expand the parameters of the grid restrictions.  After working on the css a bit I had it tested by some friends and had it ready for submittal.  

![12x5 board](https://user-images.githubusercontent.com/39779666/42573930-6a5f6396-84eb-11e8-98de-27b8791ed760.png)

 This project taught me a-lot about many aspects.  I had to learn to plan effectively and keep assessing the plan and work accordingly.  Also, I had to realize that I cannot do this on my own and that others will have similar problems.  By simply asking I can learn from others and know that I am not the only person with issues that arise.  Researching websites and watching videos provided to be a-lot of help understanding the topics I was having trouble with.  I hope to carry this confidence and knowledge not only to future projects in class but also to wherever I land a job.  And who would of thought that such an insight can come from a silly game.

