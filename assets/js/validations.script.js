const contactForm = document.getElementById("contact-form");

// Función para validar el campo de texto (al menos 1 palabra y menos de 25)
const validateTextArea = (input) => {
  const words = input.split(/\s+/).filter((word) => word.length > 0);
  return words.length > 0 && words.length <= 25;
};

// Función para validar el formato de correo electrónico
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Función para validar el formulario
const validateForm = (formData) => {
  
  let isValid = true;
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const nameInput = document.getElementById("error-name");
  const mailInput = document.getElementById("error-email");
  const messageInput = document.getElementById("error-message");
  
  //Limpia los mensajes de error 
  nameInput.textContent = "";
  mailInput.textContent = ""; 
  messageInput.textContent = "";
  
  //Retorna falso en caso de que no se cumpla la validacion
  //Imprime el mensaje de error en el campo que corresponda
  if (name.trim().length < 3) 
  {
    nameInput.textContent = "Name needs 3+ letters."
  
    isValid = false;
  }

  if (!validateEmail(email)) 
  {
    mailInput.textContent = "Enter a valid email."

    isValid = false;
  }

  if (!validateTextArea(message)) 
  {
    messageInput.textContent = "Message limited to 25 words."

    isValid = false;
  }

  return isValid; // El formulario es válido
};

// Evento de envío del formulario
document.getElementById("contact-form").addEventListener("submit", (event) => {
  const formData = new FormData(event.target);

  if (!validateForm(formData)) 
  {
        event.preventDefault(); // Evitar que el formulario se envíe si la validación falla
  }
  else
  {
     // Limpiar campos del formulario
     document.getElementById("name").value = "";
     document.getElementById("email").value = "";
     document.getElementById("message").value = "";
    alert("Formulario enviado, encuanto podamos nos pondremos en contacto.");
  }
});
