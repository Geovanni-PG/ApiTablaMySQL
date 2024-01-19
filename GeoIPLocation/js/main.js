//alert("Hola mundo")
let ip=document.getElementById("ip");
let pais=document.getElementById("pais");
let continente=document.getElementById("continente");
let zona_horaria=document.getElementById("zona_horaria");
// Define la función flecha que se ejecutará al cargar o actualizar la página
const SolicitudAPI = () => {
  //Hacer una petición para un usuario con ID especifico 
  axios.get('file:///D:/GeoIPLocation/Inicio.html')
    .then(function (response) {    
      // Manejar la respuestas exitosa
      console.log(response.data);

      ip.innerHTML = response.data.ip;
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continente;
      zona_horaria.innerHTML = response.data.zona_horaria;
    })
    .catch(function (error) {
      // Manejar error
      console.log(error);
    })
    .finally(function () {
      // Siempre se ejecutara
    });
};
// Llama al evento LOAD cada vez que se refresca o actualiza la pagina 
//y llama a la funcion SolicitudAPI que tiene la rutina de llamar a la API desde Axios
window.addEventListener("load", SolicitudAPI);



