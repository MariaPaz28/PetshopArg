//http://petshoparg.pythonanywhere.com/users/'+2
//https://jsonplaceholder.typicode.com/users/1

let email = document.getElementById("email");
let contrasena = document.getElementById("clave");
let btn_registro = document.getElementById("button-registro");


    function login(){
        //window.preventdefault();
        fetch('https://petshoparg.pythonanywhere.com/users')
        .then(respuesta => respuesta.json())
        .then(datos => {

    const myJSON = JSON.stringify(datos);
    console.log(datos);
    alert(myJSON);
        datos.forEach(element => {
            let usuario = {
                id:element.id,
                nombre:element.nombre,
                apellido:element.apellido,
                email:element.email,
                contrasena:element.contrasena,
                tipousuario :element.tipousuario
            }
            
            //alert(usuario.contrasena+" "+usuario.email);
            
            if(usuario.email==email.value){
                
               
                    window.location.href="productos.html";
                
                
            }
            else{
                window.location.href="index.html";
               // alert("JAJAJAJAJJAJAJAJJ");
            } 
    })
      

    
  })
    }

  






