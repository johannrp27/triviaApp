import axios from 'axios'

const BASE_URL = 'https://opentdb.com/api.php?'

const fetchQuestions = async (user) => {
  try {
    let params = `amount=${user.amount}`
    params += user.difficulty !== 'any' ? `&difficulty=${user.difficulty}` : ''
    params += user.type !== 'any' ? `&type=${user.type}` : ''
    const { data } = await axios.get(`${BASE_URL}${params}`)
    return data.results
  } catch (error) {
    return error
  }
}

export default fetchQuestions
