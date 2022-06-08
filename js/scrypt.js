"use strict"

const delay = ms => {
    return new Promise(r => setTimeout(() => {
        r()
    }, ms))
}

delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos/1'



// function fetchTodos() {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data: ', data)
//     })
//     .catch(e => console.error(e))