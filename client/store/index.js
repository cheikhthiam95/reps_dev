export const state = () => ({
  session: {
  },
  currentHote:{},
  currentHabitat:{},

});
export const mutations = {
  setSession(state, session) {
    state.session = session;
  },
  setCurrentHote(state, hote) {
    state.currentHote = hote;
  },
  setCurrentHabitat(state, habitat) {
    state.currentHabitat = habitat;
  }
};
