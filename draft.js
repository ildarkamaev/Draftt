const textarea = document.querySelector('#area');

callEventListeners();

function callEventListeners(){
    textarea.addEventListener('keyup', draftToLS);
}

function draftToLS(e){
    let draft = textarea.value;
    let drafts;
    if(localStorage.getItem('tasks') === null){
        drafts = [];
    }else{
        drafts = JSON.parse(localStorage.getItem('drafts'));
    }
    drafts.push(draft);
    localStorage.setItem('drafts', JSON.stringify(draft));
    e.preventDefault();
}
