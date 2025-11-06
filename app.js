var search = document.querySelector(".fa-magnifying-glass");
var inputBox = document.querySelector(".search-box-container");
var form = document.querySelector(".login-form");
var signinbtn = document.querySelector(".hr-reg");

search.addEventListener(
    'click',
    function () {
        inputBox.classList.toggle('input-active')
        form.classList.remove('input-active')
    }
)



signinbtn.addEventListener(
    'click',
    function () {
        form.classList.toggle("input-active")
        inputBox.classList.remove('input-active')
    }
)

var navbar_bar = document.querySelector('#navbar-bar')
var actionbtn = document.querySelector('.action-btn')

navbar_bar.addEventListener(
    'click',
    function () {
        // console.log('hi')
        actionbtn.classList.toggle('show-action-btn')
    }
)


async function responseApi() {
    var response = await fetch('https://dummyjson.com/products')
    var data = await response.json();

    makeCards(data.products)


}

var npbottom = document.querySelector('.npc-bottom')


function makeCards(apiProducts) {

    for(data of apiProducts){
    newDiv = document.createElement('div')
    newDiv.classList.add('npcb-card')

    newDiv.innerHTML = `
                        <img src="${data.thumbnail}" alt="" width="100%" height="100%">
                        <div>
                        <span>${data.title}</span>
                        <h4>$ ${data.price}</h4>
                        </div>  
    `
    npbottom.appendChild(newDiv)
    }

    console.log(data)


}


responseApi()




