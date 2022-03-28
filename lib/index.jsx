import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

const mountNode = document.querySelector('#root')
ReactDOM.createRoot(mountNode).render(<App />)
