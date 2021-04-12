import React, { useState } from 'react'
import MainPage from './components/MainPage'
import TriviaContext from './context/context'
import './scss/App.scss'
function App () {
  const [user, setUser] = useState({
    name: '',
    amount: 5,
    difficulty: 'any',
    type: 'any',
    questions: [],
    correct: 0
  })

  return (
    <TriviaContext.Provider value={{ user, setUser }}>
      <div className="App">
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="row w-100">
            <div className="offset-sm-2 offset-lg-3 col-12 col-sm-8 col-lg-6 ">
              <MainPage />
            </div>
          </div>
        </div>
      </div>
    </TriviaContext.Provider>
  )
}

export default App
