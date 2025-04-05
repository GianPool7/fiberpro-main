// Seleccionamos todos los div con la clase `plancito` (el contenedor del plan)
const plancitos = document.querySelectorAll('.plancito');


// Iteramos sobre cada `div` y agregamos el `click` event listener
plancitos.forEach((plancito) => {
  plancito.addEventListener('click', (e) => {
    // Obtenemos el `data-id` desde el contenedor `btn`
    const dataId = e.target.closest('#btn').getAttribute('data-id');
    //console.log('El data-id del plan es:', dataId);

    let cantidadA=document.getElementById("cantidadAnterior");
    let actual=document.getElementById("cantidadActual");
    let monto=document.getElementById("precio");

    // obteniendo a la caja
    const contendor=document.getElementById('contendorPlanes');

    //console.log(typeof(dataId));
    
    switch (dataId) {
      case "1":
                
        cantidadA.innerHTML="350 Mbps";
        actual.innerHTML="700 Mbps"
        monto.innerHTML="S/70.00"

        contendor.classList.remove('hidden')

        break;

      case "2":

        cantidadA.innerHTML="400 Mbps";
        actual.innerHTML="800 Mbps"
        monto.innerHTML="S/90.00"


        contendor.classList.remove('hidden')

        break;
    

      case "3":
        
        cantidadA.innerHTML="450 Mbps";
        actual.innerHTML="900 Mbps"
        monto.innerHTML="S/110.00"


        contendor.classList.remove('hidden')

        break;
    
    
      default:
        break;
    }

  });
});

const premiuns=document.querySelectorAll('.planes');

premiuns.forEach((premiun)=>{
  premiun.addEventListener('click',(e)=>{
    const dataIdentificado=e.target.closest('#btnp').getAttribute('data-id');

    let cantidadP=document.getElementById("cantidadAnterior");
    let actualP=document.getElementById("cantidadActual");
    let montoP=document.getElementById("precio");


    // obteniendo a la caja
    const contendor=document.getElementById('contendorPlanes');

    switch (dataIdentificado) {
      case "1":
                
        cantidadP.innerHTML="700 Mbps";
        actualP.innerHTML="1000 Mbps"
        montoP.innerHTML="S/150.00"


        contendor.classList.remove('hidden')

        break;

      case "2":

        cantidadP.innerHTML="800 Mbps";
        actualP.innerHTML="1000 Mbps"
        montoP.innerHTML="S/250.00"


        contendor.classList.remove('hidden')

        break;
    
    
      default:
        break;
    }

  })
})