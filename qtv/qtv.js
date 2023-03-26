var tourApi = 'http://localhost:3000/tour'
function Init(){
    getTour(renderTour)
    
}
Init()
function getTour(callback){
    fetch(tourApi)
    .then(function(response){
        return response.json()
    })
    .then(callback)
}
function renderTour(tours){
    var listTour = document.querySelector(".list-tour")
    var htmls = tours.map(function(tour){
        return `
            <div class="list-tour-box d-flex">
                <li class="list-tour-item d-flex flex-column tour-item-${tour.id}">
                    <a href="#" class="tour-link">${tour.nameTour}</a>
                    <img class="img-tour" src="${tour.imageurl}" alt="" srcset="">
                    <div>
                        <p class="tour-content">${tour.content}</p>
                    </div>
                    <div class="box-crud">
                    <button onclick="showModalupdate(${tour.id})" class="btn-crud">Sửa</button>
                    <button onclick="handleDeleteTour(${tour.id})" class="btn-crud">Xoá</button>
               </div>
                </li>
            </div>
        `
    })
    listTour.innerHTML = htmls.join('')
}
const btnAdd = document.getElementById('btn-add')
console.log(btnAdd)
const modalCreate = document.querySelector('.modalCreate')
const modalUpdate = document.querySelector('.modalUpdate')
function showModalupdate(id){
    modalUpdate.style.display = 'flex'
    handleUpdatetour(id)
}
btnAdd.addEventListener('click',function(){
    modalCreate.style.display = 'flex'
})
function hideModal(modal){
    modal.style.display = 'none'
}
function getImageData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      
      reader.onerror = (error) => {
        reject(error);
      };
      
      reader.readAsDataURL(file);
    });
  }


const formAdd  = document.querySelector('.formAdd')
const formUpdate  = document.querySelector('.formUpdate')

formAdd.addEventListener('submit',function(e){
    e.preventDefault()
    
    const imgFile = document.querySelector('input[name="image"]').files[0]  
    const nameTour = document.querySelector('input[name="nametour"]').value
    const descrp = document.querySelector('input[name="description"]').value

    getImageData(imgFile)
    .then(function(imgdata){
        
        const formdata = {
            nameTour:nameTour,
            imageurl:imgdata,
            content:descrp
        }
        return fetch(tourApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(formdata)
        })
    })
    .then(response => response.json())
    .then(formdata => {
    console.log(formdata)
        alert('Thêm tour thành công');
        modalCreate.style.display = 'none'
        getTour(renderTour)
    })
    .catch(error => {
    console.error('Lỗi khi thêm chuyến đi', error);
    });
    
    
      
});
function handleDeleteTour(id){
    var choose = confirm('Bạn có muốn xoá không')
    if(choose==true){
        fetch(tourApi + '/' + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                }
        })
        .then(function(response){
            return response.json()
        })
        .then(function(){
            var tourItem = document.querySelector(`.tour-item-${id}`)
            if(tourItem){
                tourItem.remove()
            }
            alert(`Đã xoá tour có id ${id}`)
            
        })
    }
}
function handleUpdatetour(id){
    formUpdate.addEventListener('submit',function(e){
        e.stopPropagation()
        var choose = confirm('Bạn có muốn sửa không?')
        if(choose==true){
            const imgFile = document.querySelector('input[name="imageupdate"]').files[0]  
            const nameTour = document.querySelector('input[name="nametourupdate"]').value
            const descrp = document.querySelector('input[name="descriptionupdate"]').value
    
            getImageData(imgFile)
            .then(function(imgdata){
                
                const formdata = {
                    nameTour:nameTour,
                    imageurl:imgdata,
                    content:descrp
                }
                return fetch(tourApi + '/' + id , {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify(formdata)
                })
            })
            .then(response => response.json())
            .then(formdata => {
                alert('Sửa thông tin tour thành công');
                modalUpdate.style.display = 'none'
                getTour(renderTour)
            })
            .catch(error => {
            console.error('Lỗi khi thêm chuyến đi', error);
            });
            }
        
    })
}
