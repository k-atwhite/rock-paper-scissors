# ROCK PAPER SCISSORS!

## Project Overview
Rock Paper Scissors is the final solo project for Mod 1's Front End Development course. One major learning goal was project management. With just a rough video for a comp, I wrote the code for the HTML, CSS, and JavaScript functionality. My personal goal was to use this project as an opporunity to focus on and understand a clearly deliniated Data Model and DOM. I kept everything realted to my Data Model in my Player.js class file, and Game.js class file. Everything related to the DOM is kept in the main.js. file. I made an effort to clean up my code with clear event bubbling and straightforward functions. This project was also an opportunity to play with CSS, get creative, and see what I can create with my imagination and google!


Project Goals:
* Understand the difference between the data model and how the data is displayed on the DOM
* Iterate through/filter DOM elements using for loops
* Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge
* Solidify and demonstrate your understanding of:
  - DRY JavaScript
  - localStorage to persist data
  - event delegation to handle similar event listeners

## Contributor
[Kat White!](https://github.com/k-atwhite)


## Table of Contents
1. [How to use the app](https://github.com/k-atwhite/rock-paper-scissors/blob/main/README.md#how-to-use-the-app)
2. [Technologies Used](https://github.com/k-atwhite/rock-paper-scissors/blob/main/README.md#technologies-used)
3. [Future Additions](https://github.com/k-atwhite/rock-paper-scissors/blob/main/README.md#future-additions)
4. [Reflections](https://github.com/k-atwhite/rock-paper-scissors/blob/main/README.md#reflections)


## How to use the app
https://user-images.githubusercontent.com/49215782/116325745-1ed72200-a780-11eb-91df-78d5c1085280.mp4


### [View in your browser!](https://k-atwhite.github.io/rock-paper-scissors/)


## Technologies Used
* HTML
* CSS
* JavaScript


## Future Additions
There are so many ways to grow this site. Several examples could be:

Option 1: A simple addition would be a countdown timer displaying the only correct way to count down in rock, paper scissors which is "ROCK!, PAPER!, SCISSORS!, SHOOT!". And on "SHOOT", both sides display their weapon. 

Option 2: Animated images would enliven the page. Perhaps they could wiggle in anticipation whn you hover over them. Perhaps They could bump into each other after the battle countdown.

Option 3: In the Human and Computer panes, keeping track of previously chosen weapons could be useful in strategizing. These would be mini images of the weapons stored underneath the score. 

## Reflections
One of the biggst challenges in this project for me was really understanding the distinction between the Data Model and the DOM. In a superficial way I understand that the DOM is what you say and the Data Model is the source of truth. But when it comes to actually writing the code with those rules in mind, keeping that distinction in mind is challenging. I tried to help myself out but making my mantra "Never update anything in game or player from anywhere BUT Game or Player". 

Another challenge was in new logical problems. I still do not have a good way of consolidating my code that evaluates the winner. It is over 60 lines long and encompasses every possibility. I look at it and think - that ain't it. But I don't know what needs to change...
