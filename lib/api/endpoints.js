import wrapPromise from './wrapPromise'

const pendingUrl = 'http://www.mocky.io/v2/5dd7ff583100007400055ced'
const completedUrl = 'http://www.mocky.io/v2/5dd7ffde310000b67b055cef'

function fetchPendingTodos() {
  const promise = fetch(pendingUrl)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

function fetchCompletedTodos() {
  const promise = fetch(completedUrl)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

export { fetchPendingTodos, fetchCompletedTodos }
