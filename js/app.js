let obj = {apple: 2, orange: 6, watermelon: 12, kiwi: 5, lemon: 4, avocado: 9};

const sorted = Object.keys(obj)
    .sort()
    .reduce((accumulator, key) => {
        accumulator[key] = obj[key];

        return accumulator
    }, {});

console.log(sorted)
