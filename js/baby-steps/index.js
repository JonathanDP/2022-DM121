console.log('teste');

let languageName = "javinha ruim"

console.log(`This is not ${getName()}`);

function getName() {
    return languageName
}

const names = ['nome1', 'nome2', 'nome3']
const print = (name) => console.log(name)

const printFancy = (function (name, index, list){
    console.log(`${index + 1}/${list.length}`, name)
})
//Faz a mesma coisa que a função de cima
// names.forEach(function (name, index, list){
//     console.log(`${index + 1}/${list.length}`, name)
// })

names
    .sort()
    .reverse()
    .map(name => `${name}`)
    .forEach(printFancy)

const timer = 1000
const task = () => console.log('this will be ran in the future')

setTimeout(task, timer)

console.log('acabou?');