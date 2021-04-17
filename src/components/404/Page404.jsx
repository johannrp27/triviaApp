import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header/Header'
import ovni from '../../static/icons/ovni.svg'
import earth from '../../static/icons/earth.svg'
import './404.scss'
const Page404 = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header activeImage={false}/>
      <div className="card data shadow-lg">
        <div className="px-4 pt-5 text-center">
          <div className="h2 bold pb-3">{t('commons.sorry')}</div>
          <div className="d-flex flex-column justify-content-center pb-4">
            <div style={{ zIndex: 10 }}>
              <img className="img-fluid ovni animate__animated animate__shakeY animate__infinite" src={ovni} alt="Ovni"/>
            </div>
            <div>
              <img className="img-fluid earth" src={earth} alt="Earth"/>
            </div>
          </div>
          <div className="h4 title pb-5">{t('commons.notFound')}</div>
        </div>
      </div>
    </>
  )
}

export default Page404
