
 

export default function({ $axios, store }) {
  console.log("dans le axion pluins",store);
  
  $axios.onError(error => {
    console.log("dans le axion pluins",mapGetters);
    if (error && error.response && error.response.data) {
      app.$toast.error(error.response.data.message);
      Promise.reject(error.response.data.message);

      // console.log(error.response.data.message);
    }
  });
  
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Bearer ${store.state.auth.session?.token ? store.state.auth.session?.token : null}`;
    config.headers.common['uuid'] = `${store.state.auth.session?.userId ? store.state.auth.session?.userId : null}`;
  });
}
  