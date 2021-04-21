import React, { useState } from 'react'
import MainPage from './components/MainPage'
import TriviaContext from './context/context'

function App () {
  const initialState = {
    questions: [],
    correct: 0
  }
  const [user, setUser] = useState(initialState)
  return (
    <TriviaContext.Provider value={{ user, setUser, initialState }}>
      <MainPage />
    </TriviaContext.Provider>
  )
}

export default App
