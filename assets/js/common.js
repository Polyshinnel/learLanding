let timeOut
function goUp() {
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    if(top >= 0) {
        window.scrollBy(0,-50);
        timeOut = setTimeout('goUp()',10);
    }else{
        clearTimeout(timeOut);
    }
}

let btnMore = document.querySelector('.btn-component_header');
btnMore.onclick = function(){
    scrollTo();
}
function scrollTo(){
    document.querySelector('#development').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}