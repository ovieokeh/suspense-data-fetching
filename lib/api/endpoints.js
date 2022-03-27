const userUrl = 'https://run.mocky.io/v3/79da35a9-1559-4677-ad1b-558f0ee46266'
const pendingUrl = 'http://www.mocky.io/v2/5dd7ff583100007400055ced'
const completedUrl = 'http://www.mocky.io/v2/5dd7ffde310000b67b055cef'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function fetchUser() {
  const promise = fetch(userUrl)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(1000)
      console.log('res', res)
      return res
    })

  return promise
}

function fetchPendingTodos() {
  const promise = fetch(pendingUrl)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(1000)
      return res.data
    })

  return promise
}

function fetchCompletedTodos() {
  const promise = fetch(completedUrl)
    .then((res) => res.json())
    .then(async (res) => {
      await sleep(2000)
      return res.data
    })

  return promise
}

export { fetchUser, fetchPendingTodos, fetchCompletedTodos }
