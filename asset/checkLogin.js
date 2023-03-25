const boxAccount = document.querySelector('.box-account')
const userBox = document.querySelector('.user-box')
var userName = document.querySelector('.user-name')
var btnCheckLoginGuest = document.querySelector('.btn-Check-Login-Guest')
console.log(btnCheckLoginGuest)
async function checkLoginGuest(){
    var username = document.querySelector('input[name="userLogin"]').value
    var password = document.querySelector('input[name=passwordLogin]').value
    const response = await fetch('http://localhost:3000/account')
    const users = await response.json()
    const user = users.find(function(user){
        return user.nameuser === username && user.password === password
    })
    if(!user){
        alert('sai tài khoản mật khẩu')
    }
    if(user.typeAccount == 'admin'){
        window.location.href = '/qtv/qtv.html'
    }
    else if(user.typeAccount == 'guest'){
        localStorage.setItem('username',username)
        window.location.href = '/admin/indexLoginSuccses.html'
    }
    
}

btnCheckLoginGuest.addEventListener('click',checkLoginGuest)
