# TicTacToe game built by Nikki Riser

Link to the game: https://nriser.github.io/project-tictactoe/


Technologies used:
- Front-end: HTML, CSS, SCSS JavaScript, jQuery
- Back-end: game API, Rails server, ajax, jQuery


## Planning, development, and problem-solving strategy:

In building this game, I followed the recommended schedule provided by the General Assembly consultants. I started with making a wireframe of both the desktop and mobile versions of the game, and then proceeded on to making user stories, which allowed me to think in a user's perspective. I created a repo on Github, and then built the game board with simple HTML/CSS to start it off. I then built the game logic in Javascript, and used jQuery code for events. Moving on to the backend, I created the curl scripts first to model the backend, and then built the backend writing ajax code based on the model.

I had the most trouble with accessing and utilizing the game API. Since I did not build the API, it was initially hard to understand at what point in the code I have access to data returned by the server, and how to manipulate the data to display information that is useful to users. What helped me a lot during the development process was to use console.log at every step of the code in order to pinpoint where exactly I am getting the error responses, and to check what data is being returned at each stage. This strategy has helped me immensely throughout the development process.


## Unsolved problems:

I would like to revisit this game and add more styling, as well as animations. I would also like to make a mobile-friendly page and allow player O to join the game.


## Wireframe:

Desktop version, link 1: https://drive.google.com/open?id=0B085YpY7Y_tmSG5yTTJadktMOUU
Desktop version, link 2: https://drive.google.com/open?id=0B085YpY7Y_tmRXJNZzJwNnM0WlU
Mobile: https://drive.google.com/open?id=0B085YpY7Y_tmaTNyM3ltRVl5Tkk


## User stories:

As a user, I want to sign up and sign in so that I can play the game and keep track of my score.
As a user, I want to be able to add my input when I click on one of the 9 areas of the board.
As a user, I want to see when I have tied 3 markers in a row.
As a user, I want to see if I won, lost, or tied.
As a user, I want to be able to compete with an opponent.
As a user, I want to be able to reset the game so that I can play a new game.
As a user, I want to be able to log out when I finish playing.
