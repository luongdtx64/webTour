const username = localStorage.getItem('username')
const user = document.querySelector('.user-name')
user.innerText = `Xin chào: ${username}`