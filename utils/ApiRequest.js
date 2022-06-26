import axios from 'axios'
import EncryptionService from '../helpers/encryptionService'

const baseURL = process.env.BASE_URL

const Http = axios.create({ baseURL })

// function refreshAccessToken() {
//   const idToken = localStorage.getItem('payaza_token')
//   const userId = localStorage.getItem('user_id')
//   if (!userId || idToken === 'undefined' || !idToken) {
//     localStorage.clear()
//     window.location.href = '/login'
//   }
//   Http.get('/secure/refreshToken', {
//     headers: {
//       Authorization: 'Bearer ' + idToken,
//       'Request-Service-Key': userId,
//     },
//   })
//     .then((response) => {
//       localStorage.removeItem('payaza_token')
//       localStorage.setItem('payaza_token', response.token)
//       return response
//     })
//     .catch((error) => {
//       localStorage.clear()
//       window.location.href = '/login'
//       return error
//     })
// }

Http.interceptors.response.use(
  (res) => {
    const actualResponse = JSON.parse(EncryptionService.decrypt(res.data))
    if (
      actualResponse.log_user_out ||
      actualResponse.response_message === 'Token Session Expired'
    ) {
      // refreshAccessToken()
      localStorage.clear()
      window.location.href = '/login'
    }
    return actualResponse
  },
  (err) => {
    return err
  }
)

Http.interceptors.request.use((config) => {
  Object.assign(config, {
    data: EncryptionService.encrypt(JSON.stringify(config.data)),
  })

  return config
})

export default Http
