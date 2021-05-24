// Put your code here

const names = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log(names)

function filterItems(arr, query) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

console.log(filterItems(names, 'the'))