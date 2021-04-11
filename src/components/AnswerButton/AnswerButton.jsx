import React from 'react'
import './AnswerButton.scss'

const AnswerButton = ({ answer }) => {
  return (
    <>
      <div type="button" className="btn answer w-100 mb-3 py-2">
        <div className="row">
          <div className="col-2 lead m-0">A</div>
          <div className="col-10 lead m-0 text-start">{answer}</div>
        </div>
      </div>
    </>
  )
}

export default AnswerButton
