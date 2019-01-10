import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quizapp-e37ee.firebaseio.com/'
})