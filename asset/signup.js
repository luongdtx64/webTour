const form = document.querySelector('.signUp-form')
form.addEventListener('submit',handlerSignup)
function handlerSignup(event){
    event.preventDefault()
    const userSignUp=document.querySelector('input[name="user"]').value
    const passwordSignUp=document.querySelector('input[name="password"]').value
    const phoneSignUp=document.querySelector('input[name="phoneNumber"]').value
    const emailSignUp=document.querySelector('input[name="email"]').value
    const typeAcc = "guest"
    const data = {
        nameuser : userSignUp,
        password:passwordSignUp,
        phone:phoneSignUp,
        email:emailSignUp,
        typeAccount:typeAcc
    }
    console.log(JSON.stringify(data))
    fetch('http://localhost:3000/account',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
        'Content-Type': 'application/json'
        }
    })
    .then(function(response){
        return response.json()
    } )
    .then(data => {
        alert('đăng kí thành công',data)
        modalSignUp.style.display = 'none'
    })




}