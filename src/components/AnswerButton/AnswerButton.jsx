import React, { useEffect, useState } from 'react'
import './AnswerButton.scss'
import correctIcon from '../../static/icons/correctAnswer.svg'
import wrongIcon from '../../static/icons/wrongAnswer.svg'

const AnswerButton = ({ addPoint, isClicked, setClicked, correctAnswer, answer, id, letter }) => {
  const [style, setStyle] = useState('notAnswered')

  useEffect(() => {
    setStyle('notAnswered')
  }, [id])

  const handleClick = () => {
    const isCorrect = answer === correctAnswer
    setClicked(true)
    if (isCorrect) {
      setStyle('correct')
      addPoint()
    } else {
      setStyle('wrong')
    }
  }

  return (
    <div type="button" onClick={handleClick} className={`btn radius w-100 mb-3 py-2 ${style} ${isClicked ? 'disabled' : ''}`}>
      <div className="row d-flex align-items-center">
        <div className="col-2 lead m-0">{String.fromCharCode(65 + letter)}</div>
        <div className="col-8 lead m-0 text-start">{answer}</div>
        <div className="col-2 m-0 text-center">
          { isClicked
            ? answer === correctAnswer
              ? <img src={correctIcon} alt="Correct Answer"/>
              : <img src={wrongIcon} alt="Wrong Answer"/>
            : ''
          }
        </div>
      </div>
    </div>
  )
}

export default AnswerButton
