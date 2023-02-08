var app = new Vue({
  el: "#app",
  data: {
    items: null,
  },
  mounted: function () {
    axios
      .get("https://api.upbit.com/v1/market/all")
      .then((response) => (this.items = response))
      .catch((error) => console.log(error));
  },
});
