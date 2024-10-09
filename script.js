let boxes = document.querySelectorAll(".box");
let winContainer = document.querySelector('.win-container');
let winContainerMsg = document.querySelector('.win-container-msg');
let btn = document.querySelectorAll('.btn');

playerO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const disableBoxes = () => {
    boxes.forEach ((box) => {
        box.disabled = true;
    });
}


const enableBoxes = () => {
    boxes.forEach ((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("box-no-shadow");
    });
}


const winMsg  =(player) => {
    winContainer.classList.add('visible');
    winContainer.classList.remove('invisible');

    winContainerMsg.innerText = `Congratulation! Player${player} is winner`;
}


const win = () => {
        
    for (patterns of winPatterns) {
        if (boxes[patterns[0]].innerText == 'O' && boxes[patterns[1]].innerText == 'O' && boxes[patterns[2]].innerText == 'O'){
            console.log('winner');
            disableBoxes();
            winMsg('O');
        } 
        else if (boxes[patterns[0]].innerText == 'X' && boxes[patterns[1]].innerText == 'X' && boxes[patterns[2]].innerText == 'X') {
            console.log('winner');
            disableBoxes();
            winMsg('X');

        };
    };
};


boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if(playerO){
            box.innerText = "O";
            playerO = false;
        } else {
            box.innerText = "X";
            playerO = true;
        };

        box.classList.add("box-no-shadow");
        box.disabled = true;
        win();

    });

});


btn.forEach((button) => {

    button.addEventListener("click", () => {
        enableBoxes();
        winContainer.classList.remove('visible');
        winContainer.classList.add('invisible');
        playerO = true;      // To always start game from 'O'
    });
});