const checkBtn = document.querySelector('.submit');
const playBtn = document.querySelector('.play')
const againBtn = document.querySelector('.again')
const congoBtn = document.querySelector('.congo')
const firstSrc = document.querySelector('.front-screen')
const playSrc = document.querySelector('.main')
const endSrc = document.querySelector('.end-screen')
const winningSrc = document.querySelector('.winning-screen')
const img = document.querySelector('img')
const input = document.querySelector('input')
const dashCon = document.querySelector('.spaces')
const tip = document.querySelector('h2')
const res = document.querySelector('.confession')
const alertMessage = document.querySelector('.text-danger')

let dynamicOutput

let dash = []
let rand;
let cate
let randomIndex
let char
let amountOfDash
let i = 0
let j = 1

const sports = [
    { origin: 'sport', name: 'cricket', char: ['c', 'r', 'i', 'c', 'k', 'e', 't'] },
    { origin: 'sport', name: 'football', char: ['f', 'o', 'o', 't', 'b', 'a', 'l', 'l'] },
    { origin: 'sport', name: 'volleyball', char: ['v', 'o', 'l', 'l', 'e', 'y', 'b', 'a', 'l', 'l'] },
    { origin: 'sport', name: 'hockey', char: ['h', 'o', 'c', 'k', 'e', 'y'] },
];
const games = [
    { origin: 'game', name: 'pubg', char: ['p', 'u', 'b', 'g'] },
    { origin: 'game', name: 'freefire', char: ['f', 'r', 'e', 'e', 'f', 'i', 'r', 'e'] },
    { origin: 'game', name: 'coc', char: ['c', 'o', 'c'] },
    { origin: 'game', name: 'mario', char: ['m', 'a', 'r', 'i', 'o'] },
];
const fruits = [
    { origin: 'fruit', name: 'apple', char: ['a', 'p', 'p', 'l', 'e'] },
    { origin: 'fruit', name: 'orange', char: ['o', 'r', 'a', 'n', 'g', 'e'] },
    { origin: 'fruit', name: 'mango', char: ['m', 'a', 'n', 'g', 'o'] },
    { origin: 'fruit', name: 'banana', char: ['b', 'a', 'n', 'a', 'n', 'a'] },
];
const categories = [sports, games, fruits]

function end() {
    playSrc.hidden = true
    endSrc.hidden = false
    res.textContent = `The word was ${indie.name}`
}

function generateRandomWord() {
    for (let j = 1; j <= amountOfDash; j++) {
        dash.push('-')
    }
    dashCon.textContent = `${dash}`
}

function winning() {
    playSrc.hidden = true
    winningSrc.hidden = false
}

function addPic(i) {
    if (i == 1) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 2) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 3) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 4) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 5) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 6) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 7) {
        img.src = `./img/hangman-${i}.png`
    } else if (i == 8) {
        img.src = `./img/hangman-${i}.png`
        setTimeout(end, 2000)
    }
}

function afterMath(val, replacedWith) {
    dash[indie.char.indexOf(val)] = replacedWith
    dashCon.textContent = dash

}


function comparison() {

    let inputvalue = document.querySelector('.da-input').value
    let inputValue = inputvalue.toLowerCase()
    console.log(indie.char.indexOf(inputValue))
    console.log(inputValue)

    if (inputValue == '') {
        alertMessage.hidden = false
        input.focus()
        return
    } else {
        alertMessage.hidden = true
    }
    if (indie.char.indexOf(inputValue) > -1) {
        j++
        input.classList.remove('red')
        input.classList.add('green')
        let daIndex = indie.char.indexOf(inputValue)
        let replacedWith = indie.char[daIndex]
        afterMath(inputValue, replacedWith)
        delete indie.char[daIndex]
        if (j == indie.char.length + 1) {
            winning()
        }
    } else {
        i++
        addPic(i)
        input.classList.remove('green')
        input.classList.add('red')
    }
    input.focus()
    document.querySelector('.da-input').value = ''
}

function selectRandomWord() {
    rand = Math.floor(Math.random() * categories.length)
    cate = categories[rand]
    randomIndex = Math.floor(Math.random() * cate.length)
    indie = cate[randomIndex]
    amountOfDash = indie.char.length
    tip.textContent = `The word's a ${indie.origin}`
}

function initiate() {
    selectRandomWord();
    generateRandomWord();
    firstSrc.hidden = true
    playSrc.hidden = false
    endSrc.hidden = true
}

function again() {
    rand = ''
    cate = ''
    randomIndex = ''
    char = ''
    img.src = ``
    input.classList.remove('red', 'green')
    i = 0
    j = 1
    dash = []
    dashCon.textContent = ``
    res.textContent = ``
    tip.textContent = ``
    selectRandomWord();
    generateRandomWord();
    endSrc.hidden = true
    firstSrc.hidden = true
    winningSrc.hidden = true
    playSrc.hidden = false
    document.querySelector('.da-input').value = ''
}

playBtn.addEventListener('click', initiate)
againBtn.addEventListener('click', again)
congoBtn.addEventListener('click', again)
checkBtn.addEventListener('click', comparison);