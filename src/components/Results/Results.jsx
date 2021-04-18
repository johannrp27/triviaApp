import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TriviaContext from '../../context/context'
import winnerLogo from '../../static/icons/winner.svg'
import './Results.scss'
const Results = () => {
  const { t } = useTranslation()
  const { user: { correct } } = useContext(TriviaContext)
  return (
    <div className="px-4 pt-5 text-center">
      <div className="mb-4 results">
        <img className="pb-5" src={winnerLogo} alt="Winner logo"/>
        <div className="py-3 display-6 bold">{t('result.name')}</div>
        <div className="pb-5">{t('result.t1')} <span className="correctAnswers">{correct || 0}</span> {t('result.t2')} </div>
        <Link to={'/'}>
          <button type="button" className="btn btn-again">{t('tryAgain')}</button>
        </Link>
      </div>
    </div>
  )
}

export default Results
