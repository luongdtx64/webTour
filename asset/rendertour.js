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
    console.log(listTour)
    var htmls = tours.map(function(tour){
        return `
            <div class="list-tour-box d-flex">
                <li class="list-tour-item d-flex flex-column">
                    <a href="#" class="tour-link">${tour.nameTour}</a>
                    <img class="img-tour" src="${tour.imageurl}" alt="" srcset="">
                    <div>
                        <p class="tour-content">${tour.content}</p>
                    </div>
                </li>
            </div>
        `
    })
    listTour.innerHTML = htmls.join('')

}