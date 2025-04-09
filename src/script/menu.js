// para mostrar la caja
const menu=document.getElementById('menuResponsivo')

const hamburguesaIcono=document.getElementById('hamburguesa')
const a=document.getElementById('cerrarH')
// guardo en una variable el cerrar hamburguesa
const cerrarHamburguesa=document.getElementById('cerrar-hamburguesa')
const b=document.getElementById('btnResponsivo')

const responsivo=document.getElementById('btnResponsivo').addEventListener('click',()=>{
    
    menu.classList.remove('hidden');
    cerrarHamburguesa.classList.remove('hidden');
    hamburguesaIcono.classList.toggle('hidden')

})

const cerrarResponsivo=document.getElementById('cerrar-hamburguesa').addEventListener('click',()=>{

    menu.classList.add('hidden')
    cerrarHamburguesa.classList.add('hidden');
    //responsivo();
    hamburguesaIcono.classList.remove('hidden')
})