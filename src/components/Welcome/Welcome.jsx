import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import './Welcome.scss'

const Welcome = () => {
  const { t } = useTranslation()
  const initialState = {
    name: '',
    numberQuestions: '',
    difficult: '',
    type: ''
  }
  const [input] = useState(initialState)
  const history = useHistory()

  const startTrivia = () => {
    history.push('/question')
    console.log(input)
  }
  return (
    <>
      <Header/>
      <div className="card data shadow-lg">
        <div className="px-4 pt-5">
          <div className="h4 title pb-3">{t('commons.welcome')}</div>
          <div className="mb-3">
            <input className="form-control" autoComplete="off" id={t('form.name')} placeholder={t('form.name')} aria-label={t('form.name')}/>
          </div>
          <div className="mb-3">
            <input type="number" className="form-control" placeholder={t('numberOfQuestions')} aria-label={t('numberOfQuestions')}/>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Select Difficulty">
              <option defaultValue>{t('difficult.name')}</option>
              <option value="easy">{t('difficult.easy')}</option>
              <option value="medium">{t('difficult.medium')}</option>
              <option value="hard">{t('difficult.hard')}</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" aria-label="Select type of question">
              <option defaultValue>{t('type.name')}</option>
              <option value="multiple">{t('type.multiple')}</option>
              <option value="tof">{t('type.tof')}</option>
            </select>
          </div>
          <div className="mb-3 text-end">
            <button type="button" onClick={startTrivia} className="btn btn-primary common shadow">{t('start')}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Welcome
