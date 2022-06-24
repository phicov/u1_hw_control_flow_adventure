alert(`Hello! Welcome to butterfly effect!`)
alert(`Later on you will receive a mysterious power to help you succeed in life!`)
alert(`Make sure you read through the whole message don't cheat and follow the directions in each message!`)
alert(`Let's begin!`)
let userName = prompt("What is your name?")
alert(`Nice to meet you, ${userName}!`)
let sport = prompt("What's your favorite sport?")
if (sport == "Basketball") {
  alert(`Good choice!`)
}else {
  alert(`Bad Choice... Is it because you're short? Anyways.. Let's try basketball! ;)`)
}

let userHeight = prompt("How tall are you? (In Inches)")
if (userHeight >= 72) {
  alert(`Wow you're pretty tall you're gonna have a lot of fun!`)
}else if (userHeight < 72) {
  alert(`That's unfortunate.. But I'm sure you'll have fun if you set your mind to it!`)
}

alert('You are given the power to stop time and if you make a mistake you are able to go back a certain amount of time! How awesome!!')

alert(`The game is starting! Make sure you tie your shoes well.`)
let lifeChoice = prompt("Do you tie your shoes?")
if (lifeChoice == "yes"){
  alert(`Prevention is always important ;)!`)
}else {
  alert('You have lost the championship game for your team when you tripped on your untied shoes, missing the game winning shot. You had your life lined up, women, sponsor, drafts, money. It was all there one shoe tying away. But you chose to be negligent. Now here you are at the bottom of the barrel working a low-paying job where you get kicked and spit at on the street. Maybe you should be more preventative. If you want another go at life please, restart the page.')
}

alert (`You get passed the ball!`)
let choiceOne = prompt('You have three choices, A piss your pants from all the big men surrounding you, B pass to an open teamate, C throw the ball at the ref that called a shitty play.')
switch(choiceOne) {
  case 'A':
    alert(`How embarassing. Your life is over. Please restart the page..`)
    break;
  case 'B':
    alert(`Good choice, you just put your team in the lead!`)
    break;
  case 'C':
    alert(`He deserved that. But you got thrown out of the game. While your life may not be over cuz nobody liked that cunt ref. Your career in basketball is over. Maybe pursue programming?`)
    break;
    default:
    alert(`You didn't pick an answer goof. Restart the game please.`)
}
alert(`The Score is 100-98 with your team behind!`)
alert(`You get passed the ball! Only 5 seconds left on the clock!`)
let choiceTwo = prompt('You are put in a difficult situation. It is all or nothing everything on you. Your choices are: A, internally combust from the pressure, B gaslight the other team, C Pull out a glock and shoot everyone, D Jizz on the floor so they dont come near and make that shot.')

switch(choiceTwo) {
  case 'A':
    alert(`It happens. Restart the game.`)
    break;
  case 'B':
    alert(`You gaslight the other team into letting you score! It's very effective, all of the opponents have mommy issues!`)
    break;
  case 'C':
    alert(`While you scored, everyone is dead so does it really matter? Also you are wanted for mass-murder, your life is over. Restart the game.`)
    break;
    case 'D':
    alert(`Your teamates are disgusted! It's very effective! You have a free net, you shoot and score!`)
    break;
    default:
    alert(`You didn't choose anything dumbass. Restart the game.`)
}
alert(`Congratulations, you win in life! I hope you made it this far without cheating. If you cheated I know where you live! :)`)
alert(`There's two good endings restart and try to get them both!`)