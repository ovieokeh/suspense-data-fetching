import wrapPromise from './wrapPromise'

const l = console.log
const url = 'http://www.mocky.io/v2/5dd3ef132f00004700d4f83a'

function fetchTodos() {
  l('fetching todos')

  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

function fetchTodo(id) {
  l('fetching todo with id', id)

  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  const todo = promise.then((res) => res[id - 1])

  return wrapPromise(todo)
}

export { fetchTodos, fetchTodo }
