let commentArr = [
    {
        title: "Заголовок комментария 1",
        comment: "Комментарий 1"
    },
    {
        title: "Заголовок комментария 2",
        comment: "Комментарий 2"
    },
    {
        title: "Заголовок комментария 3",
        comment: "Комментарий 3"
    },
    {
        title: "Заголовок комментария 4",
        comment: "Комментарий 4"
    },
    {
        title: "Заголовок комментария 5",
        comment: "Комментарий 5"
    }
];


function editBtn(arrId,title,comment){
    commentArr[arrId].title = title;
    commentArr[arrId].comment = comment;
}

function deleteBtn(arrId){
    commentArr.splice(arrId,1);
    reloadComments();
}

let wrapper = document.querySelector('.interactive-list-component__wrapper');

function reloadComments(){
    let wrapper = document.querySelector('.interactive-list-component__wrapper');
    wrapper.innerHTML = '';

    let fragmentStr = '';
    for(let i=0;i<commentArr.length;i++){
        let title = commentArr[i].title;
        let comment = commentArr[i].comment;
        let newCard = `<div class="interactive-list-component__card"><div class="interactive-list-component__card-header"><input type="text" class="interactive-list-component__card-header-text" value="${title}"><img src="assets/img/icons/arrow-down.svg" alt="" class="interactive-list-component__card-header-arrow"></div><div class="interactive-list-component__card-body"><div class="interactive-list-component__card-edit"><div class="interactive-list-component__card-edit-menu-btn"><img src="assets/img/icons/menu.svg" alt="" class="interactive-list-component__card-edit-menu-btn-img"></div><div class="interactive-list-component__card-edit-btn interactive-list-component__card-edit-list"><div class="interactive-list-component__card-edit-btn interactive-list-component__card_edit-btn" data-item="${i}"><svg class="interactive-list-component__card_edit-btn_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75233 1.75H10.5V4.66667H8.75233V1.75ZM14 2.33333V14H0V0H11.6667L14 2.33333ZM2.91667 5.25H11.0833V1.16667H2.91667V5.25ZM12.25 7.58333H1.75V12.8333H12.25V7.58333ZM11.0833 8.75H2.91667V9.33333H11.0833V8.75ZM11.0833 9.91667H2.91667V10.5H11.0833V9.91667ZM11.0833 11.0833H2.91667V11.6667H11.0833V11.0833Z" fill="#7868E6"/></svg></div><div class="interactive-list-component__card-edit-btn interactive-list-component__card-delete-btn" data-item="${i}"><svg class="interactive-list-component__card-delete-btn_svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 11.7763L9.14958 6.98775L13.9329 2.15658L11.7763 0L6.986 4.85217L2.1385 0.0670833L0 2.20558L4.85392 7.01225L0.0670833 11.8615L2.20558 14L7.0105 9.14783L11.8434 13.9329L14 11.7763Z" fill="#7868E6"/></svg></div></div></div><textarea class="interactive-list-component__card-comment">${comment}</textarea></div></div>`;
        fragmentStr+=newCard;
    }

    let fragment = document.createRange().createContextualFragment(fragmentStr);
    wrapper.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", function () { reloadComments();});


wrapper.addEventListener('click',function(e){
    if(e.target.classList.contains('interactive-list-component__card-header') || e.target.classList.contains('interactive-list-component__card-header-arrow') || e.target.classList.contains('interactive-list-component__card-header-text')){
        let arrow = e.target.querySelector('.interactive-list-component__card-header-arrow');
        let body = e.target.nextElementSibling;
        arrow.classList.toggle('interactive-list-component__card-header-arrow_active');
        body.classList.toggle('interactive-list-component__card-body_active');
    }

    if(e.target.classList.contains('interactive-list-component__card-edit-menu-btn-img')){
        let parent = e.target.parentElement;
        let menu = parent.nextElementSibling;
        menu.classList.toggle('interactive-list-component__card-edit-list-visible');
    }

    if(e.target.classList.contains('interactive-list-component__card_edit-btn')){
        arrId = e.target.getAttribute('data-item');
        title = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.interactive-list-component__card-header-text').value;
        commetn = e.target.parentElement.parentElement.nextElementSibling.value;

        editBtn(arrId,title,commetn);
        console.log(commentArr);
        alert('Комментарий успешно сохранен!');
    }

    if(e.target.classList.contains('interactive-list-component__card-delete-btn')){
        arrId = e.target.getAttribute('data-item');
        deleteBtn(arrId);
    }
});

let addCommentBtn = document.querySelector('.btn-component_form');
addCommentBtn.onclick = function(){
    let title = document.querySelector('#comment-title').value;
    let commentText = document.querySelector('#comment-text').value;

    let comment = {
        title: title,
        comment: commentText
    };

    commentArr.push(comment);
    reloadComments();

    document.querySelector('#comment-title').value = '';
    commentText = document.querySelector('#comment-text').value = '';
    alert("Комментарий успешно добавлен!");
}