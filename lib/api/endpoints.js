const userUrl = 'https://run.mocky.io/v3/79da35a9-1559-4677-ad1b-558f0ee46266'
const todosUrl = 'https://run.mocky.io/v3/8a33e687-bc2f-41ea-b23d-3bc2fb452ead'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function fetchUserDetails() {
  const promise = fetch(userUrl)
    .then((res) => res.json())
    .then(async (res) => {
      // await sleep(1000)
      return res
    })

  return promise
}

function fetchTodos() {
  const promise = fetch(todosUrl)
    .then((res) => res.json())
    .then(async (res) => {
      // await sleep(1100)
      return res.data
    })

  return promise
}

function fetchUserDetailsAndTodos() {
  return Promise.all([fetchUserDetails(), fetchTodos()]).then(
    ([userDetails, todos]) => ({ userDetails, todos })
  )
}

export { fetchUserDetails, fetchTodos, fetchUserDetailsAndTodos }
