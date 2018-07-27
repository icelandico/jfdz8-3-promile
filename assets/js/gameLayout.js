
var playButton = document.querySelector(".play");
var instructionsButton = document.querySelector(".instructions");
var instructionsBackButton = document.querySelector('.back');
var buttonsContainer = document.querySelector('.buttons__container');
var instructions = document.querySelector(".instructions__container");
var gameContainer = document.querySelector(".gameContainer");
var startScreen = document.querySelector(".startScreen");
var chooseLevel = document.querySelector(".chooseLevel");
var levelButton = document.querySelector(".level");
var cityBackground = document.querySelector(".wall");


playButton.addEventListener('click', function () {
    startScreen.style.display = 'none';
    gameContainer.style.display = 'block';
});

instructionsButton.addEventListener('click', function () {
    var instructions = document.querySelector(".instructions__container");
    buttonsContainer.style.display = 'none';
    instructions.style.display = 'block';
});

instructionsButton.addEventListener('click', function () {
    instructions.style.display = 'block';
    buttonsContainer.style.display = 'none';
});

instructionsBackButton.addEventListener('click', function () {
    buttonsContainer.style.display = 'flex';
    instructions.style.display = 'none';
});

// levelButton.addEventListener('click', function () {
//     gameContainer.style.display = 'block';
//     chooseLevel.style.display = 'none';
// });


    var random = Math.floor(Math.random() * 10) + 1;
    var images = [
        "url('../images/city_background/1.png')",
        "url('../images/city_background/2.png')",
        "url('../images/city_background/3.png')",
        "url('../images/city_background/4.png')",
        "url('../images/city_background/5.png')",
        "url('../images/city_background/6.png')",
        "url('../images/city_background/7.png')",
        "url('../images/city_background/8.png')",
        "url('../images/city_background/9.png')",
        "url('../images/city_background/10.png')"];
    cityBackground.style.backgroundImage = images[random];
