// Función para validar el campo de texto (al menos 1 palabra y menos de 25)
const validateTextArea = (input) => {
  const words = input.split(/\s+/).filter((word) => word.length > 0);
  return words.length > 0 && words.length <= 25;
};

// Función para validar el formato de correo electrónico
const validateEmail = (mail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(mail);
};

// Función para validar el formulario
const validateForm = (formData) => {
  
  let isValid = true;
  
  const name = formData.get("name");
  const mail = formData.get("mail");
  const message = formData.get("message");

  const nameInput = document.getElementById("name");
  const mailInput = document.getElementById("mail");
  const messageInput = document.getElementById("message");

  //Retorna falso en caso de que no se cumpla la validacion
  //Imprime el mensaje de error en el campo que corresponda
  if (name.trim().length < 3) 
  {
    nameInput.value = "";
    nameInput.placeholder = "El nombre debe tener al menos 3 letras.";
  
    isValid = false;
  }

  if (!validateEmail(mail)) 
  {
    mailInput.value = ""; 
    mailInput.placeholder = "Ingrese un email válido.";

    isValid = false;
  }

  if (!validateTextArea(message)) 
  {
    messageInput.value = "";
    messageInput.placeholder = "El área de texto debe contener más hasta 25 palabras.";

    isValid = false;
  }

  return isValid; // El formulario es válido
};

// Evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", (event) => {
  const formData = new FormData(event.target);

  if (!validateForm(formData)) {
        event.preventDefault(); // Evitar que el formulario se envíe si la validación falla
  }
  else
  {
    alert("Formulario enviado, encuanto podamos nos pondremos en contacto.");
  }
});
