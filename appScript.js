const main = document.querySelector('main')

main.style.display = 'none'

( () => {
    
let fieldNumber, fieldCoefficient

const myArray = []

document.querySelector('.button-array.button-array--add')
.addEventListener('click', () => {
    fieldNumber = document.querySelector('.input-array').value

    if ( fieldNumber !== '' ) {
    myArray.push( fieldNumber )
    
    document.querySelector('.info-array.info-array__output').innerHTML
    = myArray
    } else {
        alert('W polu musi znajdowac sie liczba')
    }
    document.querySelector('.input-array').value = ''
})

document.querySelector('.button-array.button-array--remove')
.addEventListener('click', () => {

    if ( myArray.length > 0) {
    myArray.pop()
    document.querySelector('.info-array.info-array__output').innerHTML = myArray
    } else {
        alert('Tablica jest pusta, nie ma nic do usuniecia')
    }
    
})

document.querySelector('.button-coefficient.button-coefficient--calculate')
.addEventListener('click', (event) => {
    fieldCoefficient = document.querySelector('.input-coefficient').value

    if (fieldCoefficient !=='' && myArray.length > 0) {

    myArray.forEach( (element, index, array) => {
        array[index] = element * fieldCoefficient
    })
    document.querySelector('.info-coefficient.info-coefficient__output').innerHTML = myArray

    event.target.setAttribute('disabled', 'disabled')

    document.querySelector('.input-array').setAttribute('disabled', 'disabled')
    document.querySelector('.button-array--add').setAttribute('disabled', 'disabled')
    document.querySelector('.button-array--remove').setAttribute('disabled', 'disabled')
    document.querySelector('.input-coefficient').setAttribute('disabled', 'disabled')

    } else if (myArray.length === 0) {
    alert('Twoja tablica jest pusta')
    } else {
    alert('Podaj wspolczynnik')
    }      
})

document.querySelector('.button-coefficient.button-coefficient--reset').addEventListener
('click', () => { location.reload(true) })

main.style.display = 'block'
} )()
