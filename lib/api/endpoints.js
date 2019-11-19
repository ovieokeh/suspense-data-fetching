import wrapPromise from './wrapPromise'
import data from './data'

const url = 'https://jsonplaceholder.typicode.com/todos/'
const l = console.log

function fetchTodos() {
  l('fetching todos')

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000)
  })

  return wrapPromise(promise)
}

function fetchTodo(id) {
  l('fetching todo with id', id)

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(data[id - 1])
    }, 2000)
  })

  return wrapPromise(promise)
}

export { fetchTodos, fetchTodo }
