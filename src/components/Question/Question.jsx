import React from 'react'
import AnswerButton from '../AnswerButton/AnswerButton'

const Question = () => {
  return (
    <div className="px-4 pt-5">
      <div className="question h4 mb-4">
        What is the largest organ of the human body?
      </div>
      <div>
        <AnswerButton answer={'Respuesta 1'}/>
        <AnswerButton answer={'Respuesta 2'}/>
        <AnswerButton answer={'Respuesta 3'}/>
        <AnswerButton answer={'Respuesta 4'}/>
      </div>
    </div>
  )
}

export default Question
