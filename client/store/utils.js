import storage from '@/helpers/storage'

// Mutations constantes
const SET_HABITAT = 'SET_HABITAT' 

export const state = () => ({
    habitat: storage.get('habitat'),
})

export const getters = {
    habitat: state => state.habitat
}

export const actions = {
    setHabitat({ commit }, credits) {
        commit(SET_HABITAT, credits);
        return {ok:1}
    }
}

export const mutations = {
    [SET_HABITAT](state, user) {
        state.habitat = user
        storage.set('habitat', user)
    }
}
