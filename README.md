<h1>Documentacion de TPO CAC - Stio Web Driftwood Tavern - Tavern & inn -</h1>

<h3>Antes de comenzar unas aclaraciones:</h3>
<ol>
  <li>
    El grupo originalmente fue de 5 personas, pero con el paso de la cursada mucha gente dejó y en el caso de este grupo no fue distinto. Uno se fue antes de iniciar el proyecto, y otros dos se salieron a 2 semanas de la entrega y con el trabajo ya iniciado. Honestamente, hubiese sido muy injusto tener que desechar el trabajo hecho o ingresar a otro grupo con trabajo ya hecho, así que el proyecto siguió adelante con solo 2 personas.
  </li>
  <li>
    Hubo problemas con git y no supimos cómo solucionarlos, y si bien el proyecto se desarrollo en conjunto y cada parte aporto lo suyo, los archivos me los pasaban a mí (Leandro Ferrero) y yo me encargaba de hacer el push, por eso están todos hechos por mí. En la parte de acreditacion se indica quien hizo cada parte del proyecto.
  </li>
</ol>

<h2>1 - Titulo y descripción del proyecto</h2>

<ul>
  <li>
    <b>Titulo:</b> Driftwood Tavern - Tavern & inn.
  </li>
  <li>
    <b>Descripcion:</b> El sitio es en sí, es un sitio web de lo que sería un bar, pero para hacer algo distinto se optó por darle otra temática y surgió la idea "¿y si este bar está ubicado en el mundo de Dungeons & Dragons?" "¿Cómo sería que la tabernera nos encargue un sitio para promocionar una taberna en un mundo así?". Bajo esta línea de pensamiento se desarrolló el sitio. Es un sitio web para promocionar una taberna en un mundo de fantasía. Aunque con ligeros cambios puede adaptarse a cualquier bar del mundo real. </br>
    Pequeña aclaración, la página fue pensada en español en un principio, pero como la API consumida está en inglés, y en base a testeos de usuarios ajenos al proyecto que les chocaba que dos idiomas distintos, se optó por cambiar todo a inglés.
  </li>
</ul>

<h2>2 - Publico objetivo</h2>
<ul>
  <li>
    <b>Publico:</b> Aventureros que se encuentren en busca de un buen lugar donde comer, descansar o reabastecer su inventario de pociones.
  </li>
</ul>

<h2>3 - Estructura del sitio</h2>
<ul>
  <li>Estructura:
    <ul>
      <li>Home</li>
      <li>Our History</li>
      <li>Location</li>
      <li>Potions Catalog</li>
      <li>Contact Us</li>
      <li>Social Media</li>
    </ul>
  </li>

  <li>Maquetado:
    <ul>
      <li>
        <b>Maquetado para pantallas inferiores a 1080:</b>
        <img src="https://raw.githubusercontent.com/LeaFerrero/tpo-driftwood-tavern/main/layout/inferior1080.png" alt="imagen pantallas inferiores a            1080">
      </li>
      <li>
        <b>Maquetado para pantallass superiores a 1080:</b>
        <img src="https://raw.githubusercontent.com/LeaFerrero/tpo-driftwood-tavern/main/layout/superior1080.png" alt="imagen pantallas superiores a            1080">
      </li>
      <li>
        <b>Maquetado de cómo se deberían representar las secciones:</b> 
        <img src="https://raw.githubusercontent.com/LeaFerrero/tpo-driftwood-tavern/main/layout/seccion.png" alt="imagen pantallas superiores a 1080">
      </li>
    </ul>
  </li>
</ul>

<h2>4 - Diseño y Estilo:</h2>
<p>
  Teniendo en cuenta que el sitio web está creado para una taberna dentro del juego de rol de Dungeons & Dragons, se buscó darle la estética del manual de dicho juego, tanto fuentes como paleta de colores se <i><b>sacaron del manual</b></i>. Tambien ciertas decisiones funcinales se basaron en dicha estetica, por ejemplo, el formulario de contacto dice que "no pueden enviarse mas de 25 palabras", esta decicion no es abritraria, ya que, dento del juego hay un hechizo, <a href="https://roll20.net/compendium/dnd5e/Sending#content">Sending</a>, que permite enviar un mensaje a distancia de no mas de 25 palabras, y el "scroll of sending" mencionado, es un item consumible que proporciona dicho hehizo.<br><br>
A continuación una foto de una página del manual:
</p>
<img src="https://tothetablereviews.files.wordpress.com/2014/09/img_3155.jpg" alt="imagen de manual DnD">
<br>

<ul>
  <li>
    <b>Diseño y estilo:</b> Medieval fantástico, intentando imitar el manual del jugador de Dungeons & Dragons.
  </li>
  <li>
    <b>Colores:</b> Tonos marrones y amarillos, verde claro para las tablas.
  </li>
  <li><b>Tipografía:</b> Fue conseguida del repositorio https://github.com/jonathonf/solbera-dnd-fonts/tree/master.</br> 
  A continuación una lista de qué tipografía se usa y dónde:
    <ul>
      <li>Mr Eaves Small Caps: encabezados.</li>
      <li>Booksanity: párrafos.</li>
      <li>Scaly Sans: formulario, mensaje de error en el formulario, footer, tbody de la tabla de pociones.</li>
      <li>Scaly Sans Bold: thead de la tabla de pociones.</li>
      <li>Scaly Sans Caps: menú desplegable.</li>
    </ul>
  </li>
</ul>

<h2>5 - Contenido y Funcionalidades</h2>
<ul>
  <li>
    <b>Contenido:</b>
    <ul>
      <li><b>Información detallada sobre los servicios del lugar:</b> taberna, posada, shows, catálogo de pociones y establos</li>
      <li>Información detallada de la historia del lugar.</li>
      <li>Información sobre cómo llegar.</li>
      <li>Imágenes que acompañan el texto y al formulario:
        <ul>
          <li>Imagen de bardo: Extraída del manual del jugador de Dungeons & Dragons 5ta edición.</li>
          <li>Imagen de dormitorio: Ephellem, <a href="https://ar.pinterest.com/ephellem/">Pinterest</a></li>
          <li>Imagen de establo: Extraída de <a href="https://ar.pinterest.com/pin/857654322810939138/">Pinterest</a></li>
          <li>Imagen de estante de pociones: Extraída de <a href="https://www.pinterest.es/pin/21814379439074113/">Pinterest</a></li>
          <li>Imagen de fondo de la taberna: Yami-Yami, <a href="https://www.artstation.com/artwork/QXW90d">ArtStation</a></li>
          <li>Imagen de gente comiendo en la taberna: Extraída de <a href="https://www.diceanddragons.com/post/a-feast-for-adventurers-the-100-                 fantastical-foods-you-can-order-from-a-tavern">Dice and Dragons</a></li>
          <li>Imagen de logo: Creada para el proyecto por Agustina Zappia</li>
          <li>Imagen de Madam Rosene: Creada con IA en <a href="https://stablediffusionweb.com">Stable Diffusion Web</a></li>
          <li>Imagen de scroll: Konstantin Roshchin, <a href="https://www.artstation.com/artwork/VxvLR">ArtStation</a></li>
        </ul>
      </li>
      <li>Iconos utilizados en la página:
        <ul>
          <li><b>Icono de barco (favicon):</b> <a href="https://www.flaticon.es/icono-gratis/galeon_210587">Flaticon</a></li>
          <li><b>Icono de Twitter:</b> <a href="https://www.flaticon.es/icono-gratis/gorjeo_1384049">Flaticon</a></li>
          <li><b>Icono de Facebook:</b> <a href="https://www.flaticon.es/icono-gratis/facebook_1384021?related_id=1384005&origin=search">Flaticon</a>           </li>
          <li><b>Icono de Instagram:</b> <a href="https://www.flaticon.es/icono-gratis/instagram_1384047?                                                        related_id=1384015&origin=search">Flaticon</a></li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <b>Funcionalidades:</b>
    <ul>
      <li>Menu desplegable.</li>
      <li>Formulario de contacto funcional con <a href="https://getform.io">Getform</a>.</li>
    </ul>  
  </li>
</ul>

<h2>6 - Itegrantes del equipo y representante:</h2>
<ul>
  <li><b>Equipo:</b> 
    <ul>
      <li>Leandro Raúl Ferrero: representante, coordinador, maquetacion, diseño, desarrollo, contenido.</li>
      <li>Janni Granados: formulario, validaciones.</li>
    </ul>
  </li>
</ul>

<h2>7 - Cronograma Tentativo:</h2>
<ul>
  <li><b>Diseño y planificación:</b> 1 semana.</li>
  <li><b>Desarrollo y programación:</b> 3 semanas.</li>
  <li><b>Creación de contenido: 1 semana.</b></li>
</ul>

<h2>8 - Recursos Externos:</h2>
<ul>
  <li>Uso de la API <a href="https://open5e.com">Open5e</a> para cargar la lista de pociones que se muestra en la pagina "Potions Catalog".</li>
  <li>Uso del mapa interactivo de <a href="https://neverwinteractive.com">Neverwinter Interactive Maps</a> en la pagina "Location".</li>
  <li>Integración de <a href="https://getform.io">Getform</a> para la funcionalidad del formulario contacto</li>
</ul>

<h2>9 - Desarrollos Futuros y Mejoras Potenciales:</h2>
<ul>
  <li>Cerear una animacion de rueda de carga para mostrar antes de que carge la tabla de pociones.</li>
  <li>Formulario para enviar reservas.</li>
</ul>

<h2>10 - Contacto:</h2>
<ul>
  <li><b>Email de representante:</b><a href="mailto:learferrero@gmail.com" target="" rel="noopener noreferrer nofollow"></a></li>
</ul>

<h2>11 - Fecha de entrega:</h2>
<ul>
  <li><b>30 de Octubre de 2023</b></li>
</ul>

<h2>12 - Acreditaciones adicionales:</h2>
<p>
  El proyecto se sometio a testeos y se itero varias veces para mejorar tanto el contenido como la experiencia de usuiario. Fue una parte importante    para el proyecto asi que considero importante dejarlo asentado.
  Los testeos fueron realizados por gente tanto agena al pryecto como agena a Codo a Codo, se incluye la lista a continuacion, con nombre, 
  dispositivo   y navegador utilizados para el testeo.
</p>
<ul>
  <li>Agustina Zappia: PC - Firefox.
  <li>Mariano Gonzalez Walsh: PC - Opera GX, PC - Google Chrome, Android - Navegador de Samsung.</li>
  <li>Patricia Gonzalez Walsh: PC Opera GX, Android - Google Chrome.</li>
</ul>


