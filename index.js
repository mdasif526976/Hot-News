// for All news
const loadUrl = (id) =>{
  const url =`https://openapi.programming-hero.com/api/news/category/${id}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data))
}
const display = data =>{
    console.log(data)
    data.forEach(element => {
        console.log(element)
        const container = document.getElementById('contaier');
        container.classList.add('card');
        const div = document.createElement('div');
        div.innerHTML =`
        <div class="row g-4">
        <div class="col-md-3">
          <img src="${element.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.details.slice(0,150)}...</p>
          <div>
              <p class="card-text"> <span class="fs-6 fw-bold">See More</span> <i class="fa-solid fa-arrow-right text-info"></i></p></div>          
              <p class="card-text"><small class="fw-bold"><i class="fa-solid fa-eye"></i> ${element.total_view}</small></p>
          </div>
        </div>
      </div> `;
      container.appendChild(div);
    });
}
const a = loadUrl('08');
console.log(a);