// for All news
const loadUrl = (id) =>{
  const url =`https://openapi.programming-hero.com/api/news/category/${id}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data))
}
const display = data =>{
    console.log(data.lenght);

// find----------- item
const lenght =data.lenght;
const find = document.getElementById('result');
find.innerText=lenght;
// console.log(lenght)
// not found working
const notFound = document.getElementById('no-content');
if (data.length === 0) {
    notFound.classList.remove('d-none')
}
else{
    notFound.classList.add('d-none')
  }

//   container
  const container = document.getElementById('contaier'); 
   container.innerHTML = '';
    data.forEach(element => {
        // console.log(element)
        console.log(element.author)
        container.classList.add('card');
     
        const div = document.createElement('div');
        div.innerHTML =`
        <div  class=" card m-5 mb-3 bg-light" style="max-width: 1500px;">
        <div class="row g-4">
        <div class="col-md-3">
          <img src="${element.image_url}" class="img-fluid rounded-start" height="80%" alt="...">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.details.slice(0,150)}...</p>
          <div class="d-flex justify-content-around">
            <div class="d-flex gap-2 pb-5">
            <img class="rounded-circle" src="${element.author.img}" width="50px" alt="">
            <h6 class="pt-3">${element.author.name}</h6>
            </div>
            <div class ="d-flex gap-2 pt-3">
            <p class="card-text"><small class="fw-bold"><i class="fa-solid fa-eye"></i> ${element.total_view}</small></p>
            <p class="card-text"> <span class="fs-6 fw-bold">See More</span> <i class="fa-solid fa-arrow-right text-info"></i></p></div>          
            </div>
          </div>
        </div>
      </div>
      </div> `;
      container.appendChild(div);
    });
    // stop spenar
toggleSpinner(false);
}


// home and all news btn works 
// home 
document.getElementById('home').addEventListener('click',function(){
        const a = loadUrl('08');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('bnews').addEventListener('click',function(){
        const a = loadUrl('01');
        console.log(a);
    })
document.getElementById('rnews').addEventListener('click',function(){
        const a = loadUrl('02');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('inews').addEventListener('click',function(){
        const a = loadUrl('03');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('sports').addEventListener('click',function(){
        const a = loadUrl('04');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('entertainment').addEventListener('click',function(){
        const a = loadUrl('05');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('culture').addEventListener('click',function(){
        const a = loadUrl('06');
        toggleSpinner(true);
        console.log(a);
    })
document.getElementById('arts').addEventListener('click',function(){
        const a = loadUrl('07');
        console.log(a);
        toggleSpinner(true);
    })
document.getElementById('all').addEventListener('click',function(){
        const a = loadUrl('08');
        console.log(a);
        toggleSpinner(true);
    })
//  Spener 
 const toggleSpinner = isLoading => {
    const spenar = document.getElementById('spener');
    if(isLoading){
   spenar.classList.remove('d-none')
    }
    else{
      spenar.classList.add('d-none')
    }
}
// loadUrl('01');