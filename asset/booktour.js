
const formBook = document.querySelector('.booktourForm')
formBook.addEventListener('submit', async (event) => {
    event.preventDefault();
    const startTour = document.getElementById('start-tour').value
    const endTour  =document.getElementById('end-tour').value
    const timeTour = document.getElementById('time-tour').value
    const username = localStorage.getItem('username')
    const data = {
        nametour:endTour,
        nameuser : username,
        diemdon : startTour,
        thoigian : timeTour
    };
    const response = await fetch('http://localhost:3000/datTour', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    alert('đăng kí thành công');
  });