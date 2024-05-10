let light = document.querySelector('.light')
let quyosh = document.querySelector('.quyosh')

quyosh.onclick = function() {
       quyosh.classList.toggle('oy')
       light.classList.toggle('dark')
}



let menu = document.querySelector('.n_center')

function openMenu() {
       menu.classList.toggle('menu')
       light.classList.toggle('hidden')
}



let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let h1 = document.querySelector('.h1')
btn.onclick = function() {
       console.log(inp.value);
       h1.innerHTML = inp.value
}



let colorInp = document.querySelector('.colorInp')
let colorBtn = document.querySelector('.colorBtn')
let colorh1 = document.querySelector('.colorh1')
colorBtn.onclick = function() {
       console.log(colorInp.value);
       colorh1.innerHTML = colorInp.value;
       document.body.style.backgroundColor = 
       colorInp.value;
}