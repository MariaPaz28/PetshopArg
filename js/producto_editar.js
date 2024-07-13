console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        url:'https://petshoparg.pythonanywhere.com/productos/'+id,//cambie de numero 1 la url
        id:0,
        nombre:"",
        imagen:"",
        stock:0,
        precio:0,
        tipoproducto:0,
        
       }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id,
                    this.nombre = data.nombre,
                    this.imagen=data.imagen,
                    this.stock=data.stock,
                    this.precio=data.precio,
                    this.tipoproducto=data.tipoproducto
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
        },
        modificar() {
            let producto = {
                id:this.id,
                nombre:this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen,
                tipoproducto:this.tipoproducto
            }
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "productos.html"; // navega a productos.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')