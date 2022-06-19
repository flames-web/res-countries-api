const form = document.querySelector('#form');
const select = document.querySelector('select');
const container1 = document.querySelector('#container1');
const container2 = document.querySelector('#container2');
const container3 = document.querySelector('#container3');

let card;
function getImages(reply,container) {
    for(let cool of reply){
          card = document.createElement('a');
        card.setAttribute('href','design/text.html');
          console.log(cool.flags.svg)
        card.classList.add('card','country','g-col-3');
         container.append(card)
       const img = document.createElement('img');
       img.classList.add('card-img-top');
       img.src = cool.flags.svg;
       card.append(img);
       const cardBody = document.createElement('div')
       cardBody.classList.add('card-body');
       card.append(cardBody);
       const cardTitle = document.createElement('h5');
       cardTitle.classList.add('card-title');
       cardTitle.innerText = cool.name.common;
       cardBody.append(cardTitle);
       const p1 = document.createElement('p')
       p1.classList.add('card-text');
       p1.innerText = `Population: ${cool.population}`
       cardBody.append(p1);
       const p2 = document.createElement('p')
       p1.classList.add('card-text');
       p2.innerText = `Region : ${cool.region}`
       cardBody.append(p2);
       const p3 = document.createElement('p')
       p1.classList.add('card-text');
       p3.innerText = `Capital: ${cool.capital}`
       cardBody.append(p3);  
    }  
   

}

function clear1() {
   
    container1.remove(card)
}
function clear2() {
   
    container2.remove(card)
}
function clear3() {
    container3.remove(card)
}
function reset1() {
    container1.innerHTML = '';
   document.body.append(container1) 
  
}
function reset2() {
    container2.innerHTML = '';
    document.body.append(container2)
    
}

form.addEventListener('change',async function (e) {   
    e.preventDefault();
    const userInput = form.value;
    clear3();
    clear2();
    reset1();
    const res = await axios.get(`https://restcountries.com/v3.1/name/${userInput}`)
     const resu = res.data;
    getImages(resu,container1);  
})

select.onchange = async function () {
    clear3();
    clear1();
    reset2();
    const res = await axios.get(`https://restcountries.com/v3.1/region/${this.value}`);
    console.log(res.data)
    const results = res.data;
    getImages(results,container2);  
 }

 async function test() {
    const res = await axios.get(`https://restcountries.com/v3.1/all`)
     const response = res.data;
    getImages(response,container3);     
}

