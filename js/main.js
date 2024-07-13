const { createApp } = Vue
createApp({
  data() {
    return {

    // ACÁ VA MI URL LOCAL
      //url: "./js/servicios.json",
      url: "./js/servicios.json",
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            console.log(data)
            this.datos = data
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },   
created() {  // created() se ejecuta cada vez que se crea el objeto VUE
  this.fetchData(this.url)
}
}).mount('#app')
