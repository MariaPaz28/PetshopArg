let currentIndex = 0;


            let autoplayInterval = null;

            function startAutoplay(interval) {
                stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
                autoplayInterval = setInterval(() => {
                    navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
                }, interval);
            }

            function stopAutoplay() {
                clearInterval(autoplayInterval);
            }

            // Iniciar autoplay con un intervalo de 3 segundos.
            startAutoplay(3000);

            // Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
            document.querySelectorAll('.nav-button').forEach(button => {
                button.addEventListener('click', stopAutoplay);
            });

            document.querySelector('.prev-button').addEventListener('click', () => {
                navigate(-1);
            });

            document.querySelector('.next-button').addEventListener('click', () => {
                navigate(1);
            });

            function navigate(direction) {
                const galleryContainer = document.querySelector('.gallery-container');
                const totalImages = document.querySelectorAll('.gallery-item').length;

                currentIndex = (currentIndex + direction + totalImages) % totalImages;
                const offset = -currentIndex * 100;

                galleryContainer.style.transform = `translateX(${offset}%)`;
            }

// formulario registro

            function registrar(){

                let nombre = document.getElementById("nombre");
                let apellido = document.getElementById("apellido");
                let email = document.getElementById("email");
                let contrasena = document.getElementById("contraseña");
                let registros = [nombre.value,apellido.value,email.value,contrasena.value];
                let diligenciado= true;
            //||apellido.value==null||email.value==null||contrasena.value==null
                
               
                for(let i=0; i<registros.length;i++){
                    if(registros[i]==""){
                        diligenciado=false;
                    }
                }
            
                if(diligenciado){
                    alert("Nombre: "+nombre.value+" "+apellido.value+"\nemail "+email.value+"\nPassword: "+contrasena.value);
                }
                else{
                    alert("Diligencie todos los campos");
                }
            
                alert("Formulario diligenciado lleno"+lleno);
            
            }


            //función consultar desde formulario

            function consultar(){
                let nombre=document.getElementById("nombre");
                let apellido=document.getElementById("apellido");
                let email=document.getElementById("email");
                let edadMascota=document.getElementById("select");
                let genero = document.getElementsByClassName('radio2');
                let seleccionado;

                for(let i=0; i<genero.length; i++){
                    if(genero[i].checked){
                        seleccionado = genero[i].value;
                    }
                }
                
                let datosConsulta = [nombre.value, apellido.value, email.value, seleccionado, edadMascota.value];

                let diligenciado = true;

                for(let i=0; i<datosConsulta.length;i++){
                    if(datosConsulta[i]==""){
                        diligenciado=false;
                    }
                }

                if(diligenciado){
                    alert(nombre.value+" "+apellido.value+"\n"+email.value+"\n"+genero.value+"\n"+edadMascota.value);
                }
                else{
                    alert("please, fill all field text");
                }


            }