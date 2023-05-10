Array.from(document.getElementsByTagName('input')).forEach(function(e,i){
    e.addEventListener('keyup', function(){
        if(e.value.length >0){
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ='rotate(180deg)';
        }else{
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ='rotate(0deg)';
        }
    })
})

let menu_btn = document.getElementsByClassName(' bi-three-dots')[0];
let menu = document.getElementById('menu1');

menu_btn.addEventListener('click', function(){
    menu.classList.toggle('ul_active')
})