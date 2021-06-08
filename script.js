//Canvas

const { body } = document;

const width = 500;
const height = 700;

const screenWidth = window.screen.width;
const canvasPosition = screenWidth / 2 - width / 2;
const isMobile = window.matchMedia("(max-width: 600px)");
const gameOverEl = document.createElement("div");

//paddle

const paddleHeight = 10;
const paddleWidth = 50;
const paddleDiff = 25;

let paddleBottomX = 255;
let paddleTopX = 255;
let paddleContact = false;
let playerMoved = false;

//Ball

let ballX = 250;
let ballY = 350;
const ballRadius = 5;

//speed

let speedX;
let speedY;
let trajectoryX;
let computerSpeed;
