const canvas = document.querySelector('#canva_game');

const game= canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);



function setCanvasSize (){
    if (window.innerHeight > window.innerWidth){

        canvasSize = window.innerWidth * 0.8;
    } else{
        canvasSize = window.innerHeight *0.8;
    }

canvas.setAttribute('width',canvasSize)
canvas.setAttribute('height',canvasSize)

elementsSize = canvasSize /10

 startGame();

}

function startGame(){
    console.log ({canvasSize, elementsSize});
    game.font = elementsSize + 'px verdana';   
    game.textAlign = 'start';   
    for (let i = 0; i <10; i++) {
        game.fillText(emojis ['X'], elementsSize *i, elementsSize);
    }
    }

// const elementsSize = (canvasSize / 10) -1 }


    // window.innerHeight
    // window.innerWidth
    // game.fillStyle ='purple';
    // game.fillText('nury', 50,50);
    // game.font = '25px verdana' no es funcion sino una propiedad a la que le podemos asignar un valor
    // game.textAlign = 'center';
    // game.fillRect(0,0,100,100);
    // game.clearRect(50,50,50,50);
    // game.fillRect(0,0,100,100);


