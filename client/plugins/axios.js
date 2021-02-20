export default function({ $axios, app }) {
  $axios.onError(error => {
    console.log("dans le axion pluins");
    if (error && error.response && error.response.data) {
      app.$toast.error(error.response.data.message);
      Promise.reject(error.response.data.message);

      // console.log(error.response.data.message);
    }
  });
}
