import React from 'react'
import { useTranslation } from 'react-i18next'
import AnswerButton from '../AnswerButton/AnswerButton'
import Header from '../Header/Header'
import './Question.scss'
const Question = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header/>
      <div className="card data shadow-lg">
        <div className="px-4 pt-5">
          <div className="h4 mb-4 title">
            What is the largest organ of the human body?
          </div>
          <div className="pb-4">
            <AnswerButton answer={'Respuesta 1'}/>
            <AnswerButton answer={'Respuesta 2'}/>
            <AnswerButton answer={'Respuesta 3'}/>
            <AnswerButton answer={'Respuesta 4'}/>
          </div>
          <div className="mb-3 text-end">
            <button type="button" className="btn btn-primary common shadow">{t('next')}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
