console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        
        url:'https://petshoparg.pythonanywhere.com/users/'+id,//cambie de numero 1 la url
        id:0,
        nombre:"",
        apellido:"",
        email:"",
        contrasena:"",
        tipousuario:0
        
       }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    /* this.id=data.id,
                    this.nombre = data.nombre,
                    this.apellido=data.apellido,
                    this.email=data.email,
                    this.contrasena=data.contrasena,
                    this.tipousuario=data.tipousuario */
                })
                .catch(err => {
                    console.error(err);
                    this.error=true
                })
        }
        /*modificar() {
            let producto = {
                id:this.id,
                nombre:this.nombre,
                apellido: this.apellido,
                email: this.email,
                contrasena: this.contrasena,
                tipousuario:this.tipousuario
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
    },*/}
  }).mount('#app')








 /*  function validarUsuario(){
    email = document.querySelector('#email');
    clave = document.querySelector('#contrasena');

    if(email.value=="milagros2001villar@gmail.com" && clave.value=="12345"){
        //alert(email.value+clave.value);
        window.location.href="/productos.html";

    }
    else{
        alert("jajajajajajajj");
    }

    
  }  */