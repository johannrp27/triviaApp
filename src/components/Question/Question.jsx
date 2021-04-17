import React, { useContext, useEffect, useState } from 'react'
import useCurrentQuestion from '../../hooks/useCurrentQuestion'
import { useTranslation } from 'react-i18next'
import { Link, useHistory } from 'react-router-dom'
import AnswerButton from '../AnswerButton/AnswerButton'
import Header from '../Header/Header'
import Loader from '../Loader/Loader'
import TriviaContext from '../../context/context'
import './Question.scss'
const Question = ({ match }) => {
  const { t } = useTranslation()
  const [clicked, setClicked] = useState(false)
  const [style, setStyle] = useState('animate__fadeInRight')
  const history = useHistory()

  const nextQuestion = () => {
    setStyle('animate__fadeOutLeft')
    setTimeout(() => {
      history.push(`/question/${Number(match.params.id) + 1}`)
    }, 300)
  }
  useEffect(() => {
    setStyle('animate__fadeInRight')
    setClicked(false)
  }, [match.params.id])

  const { question, loading, isLast } = useCurrentQuestion(match.params.id - 1)
  const { setUser } = useContext(TriviaContext)
  if (loading) return <Loader/>
  else {
    return (
      <div className={`animate__animated ${style}`}>
        <Header/>
        <div className="card data shadow-lg">
          <div className="px-4 pt-5">
            <div className="h4 mb-4 title">
              {question.question}
            </div>
            <div className="pb-3">
              {question.answers?.map((answer, id) => (
                <AnswerButton
                  setUser={setUser}
                  clicked={clicked}
                  setClicked={setClicked}
                  key={id}
                  id={id}
                  answer={answer}
                  correctAnswer={question.correctAnswer}
                />
              ))}
            </div>
            <div className="mb-3 text-end">
              { clicked
                ? isLast
                  ? <Link to={'/results'}>
                    <button type="button" className="btn btn-primary common shadow">{t('commons.end')}</button>
                  </Link>
                  : <button type="button" onClick={nextQuestion} className="btn btn-primary common shadow">{t('commons.next')}</button>
                : ''
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question
