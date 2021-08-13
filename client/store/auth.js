import storage from '@/helpers/storage'

// Mutations constantes
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const state = () => ({
    session: storage.get('session'),
})

export const getters = {
    logged: state => !!state.session
}

export const actions = {
    async login({ commit }, credits) {
        const res = await this.$axios.$post("/users/login", credits)
        if (res) { commit(AUTH_LOGIN, res); }
        return res;
    },
    logout({ commit }) {
        commit(AUTH_LOGOUT)
        return true;
    }
}

export const mutations = {
    [AUTH_LOGIN](state, user) {
        state.session = user
        storage.set('session', user)
    },
    [AUTH_LOGOUT](state) {
        state.session = undefined
        storage.remove('session')
    }
}
