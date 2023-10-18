// Función para validar que un campo sea un número entero positivo
const validatePositiveInteger = (input) => {
    const number = Number.parseInt(input);
    return !isNaN(number) && Number.isInteger(number) > 0 && number < 10;
  };
  
  // Función para validar el formulario
  const validateForm = (formData) => {
    const visitors = formData.get("visitors");
  
    if (!validatePositiveInteger(visitors)) {
      alert("Por favor, ingrese una cantidad de visitantes válida (número entero positivo).");
      return false;
    }
  
    alert("Bien hecho!");
    // Agregar aquí más validaciones si es necesario
  
    return true; // El formulario es válido
  };
  
  // Evento de envío del formulario
  document.getElementById("reservation-form").addEventListener("submit", (event) => {
    const formData = new FormData(event.target);
  
    if (!validateForm(formData)) {
      event.preventDefault(); // Evitar que el formulario se envíe si la validación falla
    }
  });
  