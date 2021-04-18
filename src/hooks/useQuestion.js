import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TriviaContext from '../context/context'

const useQuestion = (id) => {
  const history = useHistory()
  const { user, setUser } = useContext(TriviaContext)
  const [state, setState] = useState({
    question: '',
    isLoading: true
  })

  const setClicked = () => {
    setState({ ...state, isClicked: true })
  }
  const addPoint = () => {
    setUser({ ...user, correct: user.correct + 1 })
  }

  useEffect(() => {
    const questions = user.questions
    if (questions.length === 0) history.push('/')
    else {
      const currentQuestion = questions[id]
      const isLast = id === questions.length - 1
      setState({
        question: currentQuestion,
        isLoading: false,
        isLast: isLast,
        isClicked: false
      })
    }
  }, [id])

  return { state, setClicked, addPoint }
}

export default useQuestion
