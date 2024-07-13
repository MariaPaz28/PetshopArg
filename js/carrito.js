// TRAEMOS ELEMENTOS CON EL ID
let carrito = document.getElementById("carrito");
let cantProductos = document.getElementById("cantidad-productos");
let listaCarrito = document.getElementById("modalCarrito");
let btn_ocultarC = document.getElementById("btn_ocultar");
let precio_producto=document.querySelectorAll('.precioProd')

//////traer id productos html para carrito
//let productos_seleccionados = document.getElementsByClassName('idProducto');


function agregarProducto(){
    let productos_seleccionados = document.querySelectorAll('.idProducto');
    cantProductos.innerHTML = parseInt(cantProductos.innerHTML) + 1;
    productos_seleccionados.forEach(element => {
        console.log(element);
        //alert(toString(element));
        
    });
    
}


carrito.addEventListener("click",()=>{
    listaCarrito.showModal();
    
    
});

btn_ocultarC.addEventListener("click",()=>{
    listaCarrito.close();
})


