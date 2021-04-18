import React, { useState } from 'react'
import MainPage from './components/MainPage'
import TriviaContext from './context/context'
import './scss/App.scss'
function App () {
  const initialState = {
    questions: [],
    correct: 0
  }
  const [user, setUser] = useState(initialState)
  return (
    <TriviaContext.Provider value={{ user, setUser, initialState }}>
      <div className="App">
        <MainPage />
      </div>
    </TriviaContext.Provider>
  )
}

export default App
