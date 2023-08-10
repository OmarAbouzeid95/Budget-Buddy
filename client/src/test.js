


const arr = [{name: 'wfojof', price: 100}, {name: 'wefkgdf', price: 200}]

const total = arr.reduce((total, item) => total + item.price, 0)

console.log(total)