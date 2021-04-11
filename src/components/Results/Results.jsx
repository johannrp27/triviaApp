import React from 'react'
import { useTranslation } from 'react-i18next'
import winnerLogo from '../../static/icons/winner.svg'
import './Results.scss'
const Results = ({ results = 0 }) => {
  const { t } = useTranslation()

  return (
    <div className="px-4 pt-5 text-center">
      <div className="mb-4 results">
        <img className="pb-5" src={winnerLogo} alt="Winner logo"/>
        <div className="py-3 display-6 bold">{t('result.name')}</div>
        <div className="pb-5">{t('result.t1')} <span className="correctAnswers">{results}</span> {t('result.t2')} </div>
        <button type="button" className="btn btn-again">{t('tryAgain')}</button>
      </div>
    </div>
  )
}

export default Results
