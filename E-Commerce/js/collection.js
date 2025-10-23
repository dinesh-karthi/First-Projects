const navBtns = document.querySelectorAll('.nav-item button')
const input = document.querySelectorAll('.form-group input')

const carousel = document.querySelectorAll('.carousel-item')
console.log(carousel[1])
for (var i = 0; i < navBtns.length; i++) {

}
navBtns[1].addEventListener('click', function(){
 carousel[1].classList.toogle
 ('active')
})

navBtns[2].addEventListener('click', function(){
 carousel[2].classList.add('active')
})

setTimeout(carousel[1].classList.remove('active'),1000)

