import React from 'react'
import { useTranslation } from 'react-i18next'
import './Welcome.scss'

const Welcome = () => {
  const { t } = useTranslation()

  return (
    <div className="px-4 cardPadding">
      <div className="h4">Bienvenido</div>
      <div className="mb-3">
        <input className="form-control" id={t('form.name')} placeholder={t('form.name')} aria-label={t('form.name')}/>
      </div>
      <div className="mb-3">
        <input type="number" className="form-control" placeholder={t('numberOfQuestions')} aria-label={t('numberOfQuestions')}/>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="Select Difficulty">
          <option selected>{t('difficult.name')}</option>
          <option value="easy">{t('difficult.easy')}</option>
          <option value="medium">{t('difficult.medium')}</option>
          <option value="hard">{t('difficult.hard')}</option>
        </select>
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="Select type of question">
          <option selected>{t('type.name')}</option>
          <option value="multiple">{t('type.multiple')}</option>
          <option value="tof">{t('type.tof')}</option>
        </select>
      </div>
      <div className="mb-3">
        <button type="button" className="btn btn-primary">{t('start')}</button>
      </div>
    </div>
  )
}

export default Welcome
