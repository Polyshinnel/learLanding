let imgArr = [];
let images = document.querySelectorAll('.slider-miniature img');
let miniatures = document.querySelectorAll('.slider-miniature');

for(let image of images){
    imgArr.push(image.getAttribute('src'));
}

console.log(imgArr);


let index = 0;
let bigImg = document.querySelector('.slider-container img');

function nextImg(){
    index++
    if(index > imgArr.length - 1){
        index = 0;
    }
    bigImg.src = imgArr[index];

    setActiveElem()
}

function prevImg(){
    index--
    if(index < 0){
        index = imgArr.length-1;
    }
    bigImg.src = imgArr[index];

    setActiveElem()
}



for(let miniature of miniatures){
    miniature.onclick = function(){
        let src = this.querySelector('img').getAttribute('src');
        index = imgArr.indexOf(src);
        bigImg.src = imgArr[index];
    }
}

function setActiveElem(){
    for(let miniature of miniatures){
        miniature.classList.remove('slider-miniature_active');
        let src = miniature.querySelector('img').getAttribute('src');
        let srcMain = bigImg.getAttribute('src');
        if(src == srcMain){
            miniature.classList.add('slider-miniature_active');
            let imgData = miniature.querySelector('img');
            let imgTxt = imgData.getAttribute('data-text');
            document.querySelector('.slider-text p').innerHTML = imgTxt;
        }
    }
}

setActiveElem()

