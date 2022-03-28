import wrapPromise from './wrapPromise'

function fetchData(url) {
  const promise = fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

  return wrapPromise(promise)
}

export default fetchData
