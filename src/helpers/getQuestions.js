import shuffleAnswers from './shuffleAnswers'
import axios from 'axios'

export const getQuestions = async (user) => {
  let params = `amount=${user.amount}`
  params += user.difficulty !== 'any' ? `&difficulty=${user.difficulty}` : ''
  params += user.type !== 'any' ? `&type=${user.type}` : ''
  const URL = `https://opentdb.com/api.php?${params}`
  const { data } = await axios.get(URL)

  if (data.response_code === 0) {
    const questions = data.results.map((question, id) => {
      question.incorrect_answers.forEach(ans => decodeHTML(ans))
      const shuffledAnswers = shuffleAnswers(question.incorrect_answers, decodeHTML(question.correct_answer))
      return {
        id,
        category: question.category,
        question: decodeHTML(question.question),
        correctAnswer: question.correct_answer,
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
