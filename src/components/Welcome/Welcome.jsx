import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TriviaContext from '../../context/context'
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import './Welcome.scss'
import { getQuestions } from '../../helpers/getQuestions'

const Welcome = () => {
  const { t } = useTranslation()
  const { user, setUser, initialState } = useContext(TriviaContext)
  const [style, setStyle] = useState('animate__bounceIn')

  useEffect(() => {
    setUser(initialState)
  }, [])

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value
    })
  }
  const history = useHistory()

  const startTrivia = async () => {
    setStyle('animate__fadeOutLeft')
    const data = await getQuestions(user)
    setUser({ ...user, questions: data })
    history.push(`/question/${1}`)
  }

  return (
    <div className={`animate__animated ${style}`}>
      <Header/>
      <div className="card data shadow-lg">
        <div className="px-4 pt-5">
          <div className="h4 title pb-3">{t('commons.welcome')}</div>
          <div className="mb-3">
            <input
              className="form-control"
              name="name"
              autoComplete="off"
              onChange={handleChange}
              placeholder={t('form.name')}
              aria-label={t('form.name')}/>
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="amount"
              className="form-control"
              onChange={handleChange}
              placeholder={t('numberOfQuestions')}
              aria-label={t('numberOfQuestions')}
              min="0"/>
          </div>
          <div className="mb-3">
            <select className="form-select" name="difficulty" onChange={handleChange} aria-label="Select Difficulty">
              <option value="any">{t('difficult.name')}</option>
              <option value="easy">{t('difficult.easy')}</option>
              <option value="medium">{t('difficult.medium')}</option>
              <option value="hard">{t('difficult.hard')}</option>
            </select>
          </div>
          <div className="mb-3">
            <select className="form-select" name="type" onChange={handleChange} aria-label="Select type of question">
              <option value="any">{t('type.name')}</option>
              <option value="multiple">{t('type.multiple')}</option>
              <option value="boolean">{t('type.boolean')}</option>
            </select>
          </div>
          <div className="mb-3 text-end">
            <button type="button" onClick={startTrivia} className="btn btn-primary common shadow">{t('start')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
