new Vue({
  el: "#root",
  data: {
    countries: [],
    favorite: [],
  },
  methods: {
    search: function (event) {
      let search = event.target.value;
      fetch("https://restcountries.eu/rest/v2/name/" + search)
        .then((res) => res.json())
        .then((data) => (this.countries = data));
    },
    likeCountry: function (country) {
      this.favorite.push(country);
      console.log(this.favorite);
    },
  },
  created() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => (this.countries = data));
  },
  computed: {},
});
