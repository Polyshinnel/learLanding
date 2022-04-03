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
        let newCard = `<div class="interactive-list-component__card"><div class="interactive-list-component__card-header"><input type="text" class="interactive-list-component__card-header-text" value="${title}"><img src="assets/img/icons/arrow-down.svg" alt="" class="interactive-list-component__card-header-arrow"></div><div class="interactive-list-component__card-body"><div class="interactive-list-component__card-edit"><div class="interactive-list-component__card-edit-menu-btn"><img src="assets/img/icons/menu.svg" alt="" class="interactive-list-component__card-edit-menu-btn-img"></div><div class="interactive-list-component__card-edit-btn interactive-list-component__card-edit-list"><div class="interactive-list-component__card-edit-btn interactive-list-component__card_edit-btn" data-item="${i}"><img src="assets/img/icons/save.svg" class="interactive-list-component__card_edit-btn-svg"></div><div class="interactive-list-component__card-edit-btn interactive-list-component__card-delete-btn" data-item="${i}"><img src="assets/img/icons/delete.svg" class="interactive-list-component__card-delete-btn-svg"></div></div></div><textarea class="interactive-list-component__card-comment">${comment}</textarea></div></div>`;
        fragmentStr+=newCard;
    }

    let fragment = document.createRange().createContextualFragment(fragmentStr);
    wrapper.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", function () { reloadComments();});


wrapper.addEventListener('click',function(e){
    
    if(e.target.classList.contains('interactive-list-component__card-header') || e.target.classList.contains('interactive-list-component__card-header-arrow') || e.target.classList.contains('interactive-list-component__card-header-text')){
        console.log(e.target.classList)
        let arrow = e.target.querySelector('.interactive-list-component__card-header-arrow');
        console.log(arrow);
        let body = e.target.nextElementSibling;
        arrow.classList.toggle('interactive-list-component__card-header-arrow_active');
        body.classList.toggle('interactive-list-component__card-body_active');
    }

    if(e.target.classList.contains('interactive-list-component__card-edit-menu-btn-img')){
        let parent = e.target.parentElement;
        let menu = parent.nextElementSibling;
        menu.classList.toggle('interactive-list-component__card-edit-list-visible');
    }

    if(e.target.classList.contains('interactive-list-component__card_edit-btn') || e.target.classList.contains('interactive-list-component__card_edit-btn-svg')){
        arrId = e.target.getAttribute('data-item');
        title = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.interactive-list-component__card-header-text').value;
        commetn = e.target.parentElement.parentElement.nextElementSibling.value;

        editBtn(arrId,title,commetn);
        console.log(commentArr);
        alert('Комментарий успешно сохранен!');
    }

    if(e.target.classList.contains('interactive-list-component__card-delete-btn') || e.target.classList.contains('interactive-list-component__card-delete-btn-svg')){
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