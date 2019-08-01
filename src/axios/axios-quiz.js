import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-2c5d5.firebaseio.com'
})