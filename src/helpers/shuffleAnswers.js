
const shuffleAnswers = (wrongAnswers = [], correctAnswer = '') => {
  const array = [...wrongAnswers, correctAnswer]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default shuffleAnswers
