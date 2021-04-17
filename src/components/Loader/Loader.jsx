import React from 'react'
import Header from '../Header/Header'

const Loader = () => {
  return (
    <>
      <Header/>
      <div className="card data shadow-lg">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" style={{ width: 3 + 'rem', height: 3 + 'rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
