let obj = {apple: 2, orange: 6, watermelon: 12, kiwi: 5, lemon: 4, avocado: 9};

const sorted = Object.keys(obj)
    .sort()
    .reduce((accumulator, key) => {
        accumulator[key] = obj[key];

        return accumulator
    }, {});

// console.log(sorted)

// localStorage

localStorage.setItem('bgColor', 'green')

const bgColor = localStorage.getItem('bgColor')

const fruits = {
    1 : 'apple',
    2 : 'orange',
    3 : 'banana' 
}

localStorage['fruits'] = JSON.stringify(fruits)

const fruitsObj = JSON.parse(localStorage['fruits'])

console.log(fruitsObj)

// Cookie

const btnCookie = () => {
    console.log('add cookie')
   document.cookie = 'user=peter;max-age=300;secure;path=/';
}

//try Catch

let data = '{"name": "Marti", "age": 32}';

try {
    let user = JSON.parse(data)
    document.querySelector('.name1').innerHTML = user.name
} catch(error) {
    console.error('Ошибка есть и поймана')
}

try {
    let user = JSON.parse(data)
    document.querySelector('.name').innerHTML = user.name
} catch(error) {
    console.error('Ошибки нет')
}

// promise 

const myPromise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(console.log('Выполняется1'))
    },3000)
});

const myPromise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(console.log('Выполняется2'))
    },2000)
});

myPromise1
    .then(() => {
        console.log('успешно1')
    })

myPromise2
    .then(() => {
        console.log('успешно2')
    })

const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));
const promise3 = new Promise(resolve => setTimeout(resolve, 3000, 'three'));

Promise.all([promise1, promise2, promise3]).then(value => console.log(value));