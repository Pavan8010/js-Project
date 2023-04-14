//game constant and variable
let inputDir = {x: 0,y: 0};
let foodsound = new Audio('music/food.mp3');
let gameover = new Audio('music/gameover.mp3');
let movesound = new Audio('music/move.mp3');
let musicSound = new Audio('music/music.mp3');
let speed = 5;
let lastPaintTime = 0;
let score = 0;
let snakeArr = [
    {x: 13, y: 15}
]

food = {x: 6, y: 7};

// game functionality
function main(ctime) {

    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}
function isCollide(sarr){

    // if you bumb into yourself
    for(let i = 1; i < sarr.length; i++){
        if(sarr[i].x === sarr[0].x && sarr[i].y === sarr[0].y){
            return true;
        }
    }
    // if you bump into wall 
    if(sarr[0].x >=18 || sarr[0].x<=0 || sarr[0].y >=18 || sarr[0].y<=0){
        return true;
    }
}


function gameEngine(){
    // part1 - update the snake array and food
    if(isCollide(snakeArr)){
        gameover.play();
        musicSound.pause();
        inputDir ={x: 0,y: 0};
        alert("Game Over!");
        snakeArr =[{x: 13, y: 15}];
        musicSound.play();
        score =0;
    }

    // if you have eaten a food item increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodsound.play();
        score += 1;
        if(score > hiscoreval){
            hiscoreval = score;
            localStorage.setItem('hiscore',JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "High Score : " +hiscoreval;
        }
        scoreBox.innerHTML = "Score : " + score;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x,y:snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    // moving the snake
    for(let i = snakeArr.length-2; i>=0; i--){
        // const element = snakeArr[i];
        snakeArr[i+1] = {...snakeArr[i]};  
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part2 - Display the snake and Food
    // display the snake 
    board.innerHTML ="";
    // console.log("display");
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
//     //display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}



let hiscore = localStorage.getItem('hiscore');
if(hiscore === null){
    hiscoreval = 0;
    localStorage.setItem('hiscore',JSON.stringify(hiscoreval));
}else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "High Score : " +hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir = {x:0,y:1}//start the game
    movesound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUP");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});