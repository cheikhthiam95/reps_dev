export default function ({ store: { getters = {} }, redirect }) {
  if (!getters['auth/logged']) {
    return redirect('/login');
  }
}
