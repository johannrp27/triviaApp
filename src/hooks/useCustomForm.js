import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import TriviaContext from '../context/context'
import { getQuestions } from '../helpers/getQuestions'
import { useForm } from 'react-hook-form'

const useCustomForm = () => {
  const { register, handleSubmit } = useForm()

  const { user, setUser } = useContext(TriviaContext)
  const history = useHistory()

  const startTrivia = async (e) => {
    console.log(e)
    const data = await getQuestions(e.amount, e.difficulty, e.type)
    setUser({ ...user, questions: data, ...e })
    history.push(`/question/${1}`)
  }
  return { register, handleSubmit, startTrivia }
}

export default useCustomForm
