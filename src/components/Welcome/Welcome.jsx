import React from 'react'
import { useTranslation } from 'react-i18next'
import useCustomForm from '../../hooks/useCustomForm'
import './Welcome.scss'

const Welcome = () => {
  const { t } = useTranslation()
  const { register, handleSubmit, startTrivia } = useCustomForm()

  return (
    <div className="px-4 pt-5">
      <div className="h4 title pb-3">{t('commons.welcome')}</div>
      <div className="mb-3">
        <input
          {...register('name', { required: true })}
          autoComplete="off"
          className="form-control"
          placeholder={t('form.name')}
          aria-label={t('form.name')}/>
      </div>
      <div className="mb-3">
        <input
          type="number"
          {...register('amount', {
            min: 0,
            required: true,
            valueAsNumber: true
          })}
          className="form-control"
          placeholder={t('numberOfQuestions')}
          aria-label={t('numberOfQuestions')}
          min="0"/>
      </div>
      <div className="mb-3">
        <select
          {...register('difficulty')}
          className="form-select"
          aria-label="Select Difficulty">
          <option value="">{t('difficult.name')}</option>
          <option value="easy">{t('difficult.easy')}</option>
          <option value="medium">{t('difficult.medium')}</option>
          <option value="hard">{t('difficult.hard')}</option>
        </select>
      </div>
      <div className="mb-3">
        <select
          {...register('type')}
          className="form-select"
          aria-label="Select type of question">
          <option value="">{t('type.name')}</option>
          <option value="multiple">{t('type.multiple')}</option>
          <option value="boolean">{t('type.boolean')}</option>
        </select>
      </div>
      <div className="mb-3 text-end">
        <button type="button" onClick={handleSubmit((e) => startTrivia(e))} className="btn btn-primary common shadow">{t('start')}</button>
      </div>
    </div>
  )
}

export default Welcome
