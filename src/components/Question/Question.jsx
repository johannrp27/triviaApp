import React from 'react'
import useQuestion from '../../hooks/useQuestion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import AnswerButton from '../AnswerButton/AnswerButton'
import Loader from '../Loader/Loader'
import './Question.scss'
const Question = ({ match }) => {
  const { t } = useTranslation()

  const actualQuestionId = Number(match.params.id)
  const { state, setClicked, addPoint } = useQuestion(actualQuestionId - 1)
  const { question, isLoading, isClicked, isLast } = state

  if (isLoading) return <Loader/>

  return (
    <div className="px-4 pt-5">
      <div className="h4 mb-4 title">
        {question.question}
      </div>
      <div className="pb-3">
        {question.answers?.map((answer, id) => (
          <AnswerButton
            addPoint = {addPoint}
            isClicked={isClicked}
            setClicked={setClicked}
            key={id}
            id={id}
            answer={answer}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </div>
      <div className="mb-3 text-end">
        { isClicked &&
          <Link to={ isLast ? '/results' : `/question/${actualQuestionId + 1}`}>
            <button type="button" className="btn btn-primary common shadow">
              { isLast
                ? t('commons.end')
                : t('commons.next')
              }
            </button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Question
