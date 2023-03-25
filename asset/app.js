
const btnSignUp = document.querySelector(".openSignUp")
const modalSignUp = document.querySelector(".modal-signUp")
const modalLogin = document.querySelector(".modal-login")

const modalContainer = document.querySelector(".modal-container")
const modalContainer2 = document.querySelector(".modal-container-2")

const btnLogin = document.querySelector('.openLogin')
btnSignUp.addEventListener('click',function(){
    modalSignUp.style.display = 'block'
})

btnLogin.addEventListener('click',function(){
    modalLogin.style.display = 'block'
})

const btnCloses=document.querySelectorAll('.btn-close')
btnCloses.forEach(function(btnClose){
    btnClose.onclick = function(){
        modalSignUp.style.display= 'none'
        modalLogin.style.display = 'none'
    }
})