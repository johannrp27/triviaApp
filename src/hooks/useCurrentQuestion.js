import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import TriviaContext from '../context/context'

const useCurrentQuestion = (id) => {
  const { user } = useContext(TriviaContext)
  const history = useHistory()
  const [state, setState] = useState({
    question: '',
    loading: true,
    isLast: false
  })

  useEffect(() => {
    const questions = user.questions
    if (questions.length === 0) history.push('/')
    else {
      const currentQuestion = questions[id]
      const isLast = id === questions.length - 1
      setState({
        question: currentQuestion,
        loading: false,
        isLast: isLast
      })
    }
  }, [id])

  return state
}

export default useCurrentQuestion
