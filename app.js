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
    function(){
        form.classList.toggle("input-active")
        inputBox.classList.remove('input-active')
    }
)

