// for All news
const loadUrl = (id) =>{
  const url =`https://openapi.programming-hero.com/api/news/category/${id}` ;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data))
    .catch(error => console.log(error))
}
const display = (data) =>{
    let datal = data;
    let len = datal.length;
 console.log(data.length)
const findElement = document.getElementById('find');
findElement.innerText = len;
// find.innerText=lenght;
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
        container.classList.add('card');
        const div = document.createElement('div');
        div.innerHTML =`
        <div onclick="modal('${element._id}')" class=" card m-5 mb-3 bg-light" style="max-width: 1500px;">
        <div class="row g-4">
        <div class="col-md-3">
          <img src="${element.image_url}" class="img-fluid rounded-start" height="80%" alt="...">
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.details.slice(0,150)}...</p>
          <div class="d-flex justify-content-sm-around justify-content-md-around">
            <div class="d-flex gap-2 pb-5 justify-content-around">
            <img class="rounded-circle" src="${element.author.img}" width="50px" alt="">
            <h6 class="pt-2 fs-6 text">${element.author.name ? element.author.name:'not found Authour Name'}</h6>
            </div>
            <div class ="d-flex mt-2">
            <p class="card-text "><small class="fw-bold"><i class="fa-solid fa-eye"></i> ${element.total_view}</small></p>
            <button type="button" class="btn btn-sm " data-bs-toggle="modal" data-bs-target="#exampleModal" "> More <i class=" text-info fa-solid fa-arrow-right"></i></button>
            </div>          
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
const modal = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    .then(res => res.json())
    .then(data => modalDetail(data.data[0]))
    .catch(error => console.log(error))
}
const modalDetail = (data)=>{
 const title = document.getElementById('exampleModalLabel');
 title.innerText = data.title;
 console.log(data)   
const modalbody =document.getElementById('modal') ;
modalbody.innerHTML=`
<img src="${data.thumbnail_url}" alt="">
<p> ${data.details}</p>
<div class="d-flex">
<img class="rounded-circle" src="${data.author.img}" width="50px" alt="">
<h6 class="pt-2 fs-6 text">${data.author.name ? data.author.name:'not found Authour Name'}</h6>
</div>
`
}

// const displayModal = 

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
loadUrl('01');