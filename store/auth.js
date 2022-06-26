import Http from '../utils/ApiRequest'

export const state = () => ({
  loader: false,
})

export const mutations = {
  START_REQUEST(state) {
    state.loader = true
  },
  STOP_REQUEST(state) {
    state.loader = false
  },
}

export const actions = {
  fetchRates({ commit }, data) {
    Http.defaults.baseURL = this.$config.baseURL
    commit('START_REQUEST')
    const { options, requestClass } = data
    return new Promise((resolve, reject) => {
      Http.post(`/authexchange/${requestClass}`, options)
      .then((response) => {
        commit('STOP_REQUEST')
        console.log(response);
        resolve(response)
      })
      .catch((err) => {
        commit('STOP_REQUEST')
        reject(err)
      })
    })
  }
}