export default function ({ store: { getters = {} }, redirect }) {
  if (!getters.auth || !getters.auth.logged) {
    return redirect('/login');
  }
}
