export default {
  data() {
    return {
      search: "",
      items: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      this.$axios
        .$get(`https://rickandmortyapi.com/api/character/?name=${this.search}`)
        .then(r => {
          this.items = r.results;
        });
    }
  }
};
