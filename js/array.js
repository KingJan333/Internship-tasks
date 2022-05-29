const myArray = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'alex'},
    {id: 3, name: 'gloria'},
    {id: 4, name: 'marty'}
]

let myElement = myArray.find(element => element.id == 3)

// console.log(myElement.name)

let myElementIndex = myArray.findIndex(element => element.id == 2)
// console.log(myElementIndex)

// myArray.forEach(element => console.log(element.name))

let elFilter = myArray.filter(element => element.id < 4)

// console.log(elFilter)

let myMap = myArray.map(element => element * 3)

// console.log(myMap.length)

const car = [
    'audi',
    'bmw',
    'kia',
    'volvo'
]

let hasCarAudi = car.includes('audi')
// console.log(hasCarAudi)

let hasCarBmw = car.indexOf('bmw')
// console.log(hasCarBmw)

const numbers = [1, 2, 3, 4]

const otherNumbers = [5, 6, 7, 8]

let fullNumbers = numbers.concat(otherNumbers)
// console.log(fullNumbers)

let fullNumbersSpread = [...numbers, ...otherNumbers]
// console.log(fullNumbersSpread)

const animals = ['cat', 'dog', 'rabbit', 'owl']

let houseAnimals = animals.slice(0,3)
// console.log(houseAnimals)

const flatArray = [1, [2, [3]]]

let flatArray1 = flatArray.flat(1)
// console.log(flatArray1)

let flatArray2 = flatArray.flat(Infinity)
// console.log(flatArray2)

const potentialParticipants = [
    { id: 'k38i', name: 'john', age: 17 },
    { id: 'baf3', name: 'mary', age: 13 },
    { id: 'a111', name: 'gary', age: 24 },
    { id: 'fx34', name: 'emma', age: 34 },
]
   
const participantsFormatted = potentialParticipants
    .filter(user => user.age < 18)
    .map(user => user.name)
    .join(', ')
   
// console.log(participantsFormatted)

const nodes = document.querySelectorAll('.todoItem')

const todoItems = Array.from(nodes)

// console.log(todoItems)

const todos = ['Написание статьи', 'Вычитка']
todos.push('Публикация')
// console.log(todos)

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май']
// console.log(months)
months.splice(1,2)
// console.log(months)

const ticket = [1, 2, 3, 4, 5]

const firstTicket = ticket.shift()
// console.log(firstTicket)
// console.log(ticket)

const firstTicket2 = ticket.unshift(1)
// console.log(firstTicket2)
// console.log(ticket)