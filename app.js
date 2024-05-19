const wordle = 'ocean'

const input = document.querySelector('.wordInput')
const maxRows = 6
let currentRow = 1
input.focus()

input.addEventListener('input', function(){
    const letters = document.querySelectorAll('.row' + currentRow)
    const inputValue = this.value.toUpperCase()

    letters.forEach((div, index) => {
        div.innerText = inputValue[index] || ''
    })
})

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter' && this.value.length == 5){
        // Check function
        // 
        if(currentRow < maxRows){
            currentRow ++
            this.value = ''
        }
    }
})

input.addEventListener('blur', function(){
    input.focus()
})