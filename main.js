let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let submit = document.getElementById('submit')
let result = document.getElementById('result')
let num;

function Change(id) {
    one.style.backgroundColor = 'hsla(225, 8%, 31%, 0.529)'
    two.style.backgroundColor = 'hsla(225, 8%, 31%, 0.529)'
    three.style.backgroundColor = 'hsla(225, 8%, 31%, 0.529)'
    four.style.backgroundColor = 'hsla(225, 8%, 31%, 0.529)'
    five.style.backgroundColor = 'hsla(225, 8%, 31%, 0.529)'
    document.getElementById(id).style.backgroundColor = '#fff'
    if(id == 'one') {
        num = 1
    }
    else if(id == 'two') {
        num = 2
    }
    else if(id == 'three') {
        num = 3
    }
    else if(id == 'four') {
        num = 4
    }
    else{
        num = 5
    }
    localStorage.setItem('rate',JSON.stringify(num))
}
function showRate(){
    if (num != null){
        window.location.href= 'http://127.0.0.1:5500/thank.html'
        
    }
}
result.innerHTML = JSON.parse(localStorage.rate)


































// one.onclick = () => {show.innerHTML = '1'}
// two.onclick = () => {num = '2'}
// three.onclick = () => {num = '3'}
// four.onclick = () => {num = '4'}
// five.onclick = () => {num = '5'}



