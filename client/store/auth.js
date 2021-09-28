import storage from '@/helpers/storage'

// Mutations constantes
const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'
const SET_HABITAT = 'SET_HABITAT'
const SET_HABITATS = 'SET_HABITATS'
const SET_RESERVATIONS = 'SET_RESERVATIONS'
const SET_CATEGORIES = 'SET_CATEGORIES'


export const state = () => ({
    session: storage.get('session'),
    currentHabitat: {},
    habitats: [],
    reservations: [],
    categories: []

})

export const getters = {
    logged: state => !!state.session,
    currentHabitat: state => state.currentHabitat,
    reservations: state => state.reservations,
    habitats: state => state.habitats,
    categories: state => state.categories
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
    },

    setCurrentHabitat({ commit }, habitat) {
        commit(SET_HABITAT, habitat);
    },

    async getHabitatsForHote({ commit, state }) {

        const response = await this.$axios.$get(
            "/habitats/findAllby/hoteId/" + state.session.userId
        );
        if (response) {
            commit(SET_HABITATS, response);
        }

        return response;

    },

    getCategorieNameById({ state, commit }, id) {

        return state.categories.filter(
            (categorie) => categorie._id == id
        )[0]?.name
            ? state.categories.filter(
                (categorie) => categorie._id == id
            )[0].name
            : id;
    },

    async getCurrentHabitat({ commit }, habitatId) {

        const response = await this.$axios.$get(
            "/habitats/" + habitatId
        );

        if (response) {
            commit(SET_HABITATS, response);
            return response;
        }
    },

    async createNewHabitat({ state }, habitat) {

        const response = await this.$axios.$post("/habitats/newHabitat", {
            ...habitat,
            hoteId: state.session.userId,
        });

        return response


    },

    async getCategorires() {
        try {
            const response = await this.$axios.$get("/categories/");
            if (response) {
                commit(SET_CATEGORIES, response);

                return response;


            }
        } catch (error) {

            return [];
        }
    }
    ,

    async book({ state }, habitat) {


        const response = await this.$axios.$post("/habitats/newHabitat", {
            ...habitat,
            hoteId: state.session.userId,
        });

        return response


    },

}



export const mutations = {
    [AUTH_LOGIN](state, user) {
        state.session = user
        storage.set('session', user)
    },
    [AUTH_LOGOUT](state) {
        state.session = undefined
        storage.remove('session')
    }, [SET_HABITAT](state, habitat) {
        state.currentHabitat = habitat
    }
    , [SET_HABITATS](state, habitats) {
        state.habitats = habitats
    }

    , [SET_RESERVATIONS](state, reservations) {
        state.reservations = reservations
    }, [SET_CATEGORIES](state, cat) {
        state.categories = cat
    }
}
