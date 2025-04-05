document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con un ID que empiece por 'plan'
    const allPlans = document.querySelectorAll('[id^="plan"]');
  
    allPlans.forEach((plan) => {
      plan.addEventListener('click', () => {
        // Crea un nuevo div
        const newDiv = document.createElement('div');
        newDiv.classList.add('bg-gray-200', 'p-4', 'rounded', 'mt-4');
        newDiv.textContent = 'Nuevo contenido para este plan';
  
        // Encuentra el contenedor de la caja clickeada
        const container = document.getElementById('contenedorPlan')
  
        // Inserta el nuevo div después de la caja clickeada
        container.insertAdjacentElement('afterend', newDiv);
      });
    });
  });
  