const formFeed = document.querySelector('.feedback-box')
formFeed.addEventListener('submit',postFeedBack)
function postFeedBack(event){
    event.preventDefault()
    const feedBack = document.querySelector('input[name="feedback"]').value
    console.log(feedBack)
    if(feedBack!=""){
        const username = localStorage.getItem('username')
        const data = {
            nameuser : username,
            gopy:feedBack
        }
    fetch('http://localhost:3000/gopy',{
        method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response){
        return response.json()
    })
    .then(function(){
        alert('Cảm ơn bạn đã đóng góp ý kiến')
    })
    }
    else{
        alert('bạn chưa nhập bình luận')
    }
    
    
}