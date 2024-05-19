const wordle = 'ocean'

const input = document.querySelector('.wordInput')
const maxRow = 6
let currentRow = 1
input.focus()

input.addEventListener('input', function(){
    const letters = document.querySelectorAll('.row' + currentRow)
    const inputValue = this.value.toUpperCase()

    letters.forEach((div, index) => {
        div.innerText = inputValue[index] || ''
    })
})

input.addEventListener('blur', function(){
    input.focus()
})