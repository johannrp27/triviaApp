import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
import TriviaContext from '../../context/context'
import shuffleAnswers from '../../helpers/shuffleAnswers'
import AnswerButton from '../AnswerButton/AnswerButton'
import Header from '../Header/Header'
import './Question.scss'
const Question = ({ match }) => {
  const { t } = useTranslation()
  // const history = useHistory()
  // if (!questions.length) history.push('/')

  const { user: { questions } } = useContext(TriviaContext)
  const id = Number(match.params.id)
  const question = questions[id - 1]
  const answers = shuffleAnswers(question.incorrect_answers, question.correct_answer)
  return (
    <>
      <Header/>
      <div className="card data shadow-lg">
        <div className="px-4 pt-5">
          <div className="h4 mb-4 title">
            {question.question}
            {}
          </div>
          <div className="pb-4">
            {answers.map((answer, id) => (
              <AnswerButton letter={65 + id} key={id} answer={answer}/>
            ))}
          </div>
          <div className="mb-3 text-end">
            {
              id === questions.length
                ? <Link to={'/results'}>
                  <button type="button" className="btn btn-primary common shadow">{t('commons.end')}</button>
                </Link>
                : <Link to={`/question/${Number(id) + 1}`}>
                  <button type="button" className="btn btn-primary common shadow">{t('commons.next')}</button>
                </Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
