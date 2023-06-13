// Función para redirigir a una página específica según el producto seleccionado
function redirigirProducto(producto) {
  var urlProducto = ''; // Variable para almacenar la URL de la página destino
  
  // Determinar la URL de la página destino según el producto seleccionado
  switch (producto) {
    case 1:
      urlProducto = '/inicio/pro-1.html';
      break;
    case 2:
      urlProducto = '/inicio/pro-2.html';
      break;
    case 3:
      urlProducto = '/inicio/pro-3.html';
      break;
    case 4:
      urlProducto = '/inicio/pro-4.html';
      break;
    default:
      console.log('Producto inválido');
      return; // Si no se selecciona un producto válido, se detiene la ejecución de la función
  }
  
  // Redireccionar a la página destino
  window.location.href = urlProducto;
}
