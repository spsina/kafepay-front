const state = {
  api_token: localStorage.getItem('token')
}

const getters = {
  api_token: state => {
    return state.api_token
  },
  isAuthenticated: state => {
    return state.api_token !== null
  }
}

const mutations = {
  updateToken (state, newToken) {
    state.api_token = newToken
  },
  removeToken (state) {
    state.api_token = null
  }
}

const actions = {
}

// export this module.
export default {
  state,
  mutations,
  getters,
  actions
}
