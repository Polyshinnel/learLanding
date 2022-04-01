let posX = 0;
let posY = 0;

let moveLeft = false;
let moveUp = false;
let circle = document.getElementById('circle');

let timeId = null;

function startAnimation(){
    if(timeId == null){
        timeId = setInterval(move, 10);

        function move() {
            switch (posX) {
                case 1110:
                    moveLeft = true;
                    break;
                case 0:
                    moveLeft = false;
                    break;
            }
            switch (posY) {
                case 394:
                    moveUp = true;
                    break;
                case 0:
                    moveUp = false;
                    break;
            }
            moveLeft ?
                posX -= 3 : posX += 3;
            moveUp ?
                posY -= 1 : posY += 1;
    
            circle.style.left = posX + 'px';
            circle.style.top = posY + 'px';
        }

        document.querySelector('.btn-component_animation').innerHTML = "Остановить анимацию";
    }else{
        clearInterval(timeId)
        timeId = null
        document.querySelector('.btn-component_animation').innerHTML = "Запустить анимацию";
    }
    
}




