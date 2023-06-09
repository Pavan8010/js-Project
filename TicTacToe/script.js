console.log("welcome to tic tac toe")
let music = new Audio('Music/music2.mp3');
let cturn = new Audio('Music/cturn.wav');
let x_win = new Audio('Music/x_win.mp3');
let o_win = new Audio('Music/o_win.wav');
// let gameover = new Audio('gameover.mp3');
let turn = "X";
let gamefinish = false
music.play();

// Function to change the turn
function changeTurn() {
    return turn === "X" ? "O" : "X";
}
// function to check the winner
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            if(document.querySelector('.info').innerText === "X won"){
                gamefinish = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                x_win.play();
            }else{
                gamefinish = true
                document.querySelector('.imgbox').getElementsByTagName('img')[1].style.width = "200px";
                o_win.play();
            }
            document.querySelector('.line').style.width = "20vw"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

//game logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            cturn.play();
            checkWin();
            if(!gamefinish){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// when click on reset button
reset.addEventListener('click' ,()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X"
    gamefinish = false
    document.querySelector('.line').style.width = '0vw'
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

