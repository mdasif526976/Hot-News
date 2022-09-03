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
        // container.innerHTML = "";
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

// home and all news btn works 
// home 
document.getElementById('home').addEventListener('click',function(){
        const a = loadUrl('08');
        console.log(a);
    })
document.getElementById('bnews').addEventListener('click',function(){
        const a = loadUrl('01');
        console.log(a);
    })
document.getElementById('rnews').addEventListener('click',function(){
        const a = loadUrl('02');
        console.log(a);
    })
document.getElementById('inews').addEventListener('click',function(){
        const a = loadUrl('03');
        console.log(a);
    })
document.getElementById('sports').addEventListener('click',function(){
        const a = loadUrl('04');
        console.log(a);
    })
document.getElementById('entertainment').addEventListener('click',function(){
        const a = loadUrl('05');
        console.log(a);
    })
document.getElementById('culture').addEventListener('click',function(){
        const a = loadUrl('06');
        console.log(a);
    })
document.getElementById('arts').addEventListener('click',function(){
        const a = loadUrl('07');
        console.log(a);
    })
document.getElementById('all').addEventListener('click',function(){
        const a = loadUrl('08');
        console.log(a);
    })

// const a = loadUrl('08');
// console.log(a);