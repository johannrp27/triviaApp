import shuffleAnswers from './shuffleAnswers'
import axios from 'axios'

export const getQuestions = async (amount, difficulty, type) => {
  const URL = 'https://opentdb.com/api.php'
  const params = { amount, difficulty, type }
  const { data } = await axios.get(URL, { params: params })

  if (data.response_code === 0) {
    const questions = data.results.map((question, id) => {
      const questionDecoded = decodeHTML(question.question)
      const incorrectAnswers = question.incorrect_answers.map(ans => decodeHTML(ans))
      const correctAnswer = decodeHTML(question.correct_answer)
      const shuffledAnswers = shuffleAnswers(incorrectAnswers, correctAnswer)
      return {
        id,
        category: question.category,
        question: questionDecoded,
        correctAnswer: correctAnswer,
        answers: shuffledAnswers
      }
    })
    return questions
  }
  return 'Cannot fetch questions, there is something wrong in url'
}

const decodeHTML = (text) => {
  const textArea = document.createElement('textarea')
  textArea.innerHTML = text
  return textArea.value
}
