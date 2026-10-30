document.addEventListener("DOMContentLoaded", () => {
  // Inicializar componentes de Materialize
  M.Sidenav.init(document.querySelectorAll(".sidenav"), { edge: "left" });
  M.Modal.init(document.querySelectorAll(".modal"), { dismissible: true });
  M.updateTextFields();

  const articulos = [
    {
      id: 1,
      titulo: "Aprender desarrollo web paso a paso",
      categoria: "Tecnología",
      fecha: "5 de octubre de 2026",
      resumen: "Mis ideas sobre aprender HTML, CSS y JavaScript, practicar y crear una página desde cero.",
      icono: "code",
      arte: "art-code",
      contenido: [
        "Aprender desarrollo web es una experiencia que requiere paciencia, práctica y curiosidad. Al principio puede parecer complicado porque hay muchos conceptos nuevos, pero dividir el aprendizaje en pasos pequeños ayuda bastante. HTML permite organizar el contenido de una página, CSS se utiliza para darle estilo y JavaScript agrega acciones e interactividad.",
        "Una de las cosas más útiles es practicar con proyectos sencillos. Por ejemplo, se puede comenzar con una página que tenga un título, algunos párrafos, enlaces y después agregar colores, tarjetas y un menú. Cuando algo no funciona, revisar el código con calma permite entender el error y aprender de él. Copiar un ejemplo puede servir para empezar, pero modificarlo y experimentar ayuda a comprender mejor cómo funciona.",
        "También es importante guardar los archivos de manera ordenada y probar la página en diferentes tamaños de pantalla. Así se puede descubrir si el diseño se ve bien en una computadora o en un celular. Mi objetivo es seguir practicando, aprender nuevas herramientas y poco a poco crear sitios que sean útiles, atractivos y fáciles de utilizar. Lo importante es no rendirse cuando algo sale mal, porque los errores forman parte del proceso."
      ]
    },
    {
      id: 2,
      titulo: "La tecnología en nuestra vida diaria",
      categoria: "Aprendizaje",
      fecha: "9 de octubre de 2026",
      resumen: "Cómo las herramientas digitales pueden ayudarnos a estudiar, comunicarnos y resolver tareas.",
      icono: "devices",
      arte: "art-tech",
      contenido: [
        "La tecnología está presente en muchas actividades de nuestra vida diaria. La utilizamos para comunicarnos con familiares y amigos, buscar información, escuchar música, estudiar y entretenernos. Los teléfonos, las computadoras y las aplicaciones nos permiten realizar tareas que antes podían tomar mucho más tiempo. Sin embargo, para aprovechar estas herramientas, es importante aprender a utilizarlas de manera responsable.",
        "En la escuela, internet puede ser una gran ayuda para investigar temas, consultar tutoriales y practicar habilidades nuevas. Por ejemplo, si estamos aprendiendo programación, podemos encontrar documentación y ejemplos que nos orienten cuando tenemos dudas. Aun así, no basta con copiar la primera respuesta que aparece: conviene revisar las fuentes, comparar la información y tratar de comprender lo que estamos haciendo.",
        "También debemos cuidar el tiempo que pasamos frente a las pantallas y proteger nuestros datos personales. Utilizar contraseñas seguras, evitar enlaces sospechosos y pensar antes de compartir información son hábitos importantes. Considero que la tecnología es una herramienta valiosa cuando la usamos con equilibrio. Puede ayudarnos a aprender y crear, siempre que mantengamos la curiosidad, el pensamiento crítico y la responsabilidad."
      ]
    },
    {
      id: 3,
      titulo: "Los videojuegos como entretenimiento",
      categoria: "Tiempo libre",
      fecha: "14 de octubre de 2026",
      resumen: "Por qué jugar puede ser divertido y cómo mantener un equilibrio con las demás responsabilidades.",
      icono: "sports_esports",
      arte: "art-games",
      contenido: [
        "Los videojuegos son una de las formas de entretenimiento que disfruto en mi tiempo libre. Existen muchos tipos: aventuras, deportes, estrategia, carreras y juegos que cuentan historias. Cada uno ofrece una experiencia diferente y puede convertirse en una manera de descansar después de un día de clases o de compartir un buen rato con otras personas.",
        "Además de entretener, algunos videojuegos ayudan a practicar habilidades como resolver problemas, tomar decisiones, prestar atención y trabajar en equipo. En ciertos juegos hay que planear una estrategia, aprender las reglas y adaptarse a situaciones inesperadas. Cuando se juega con amigos, también se puede mejorar la comunicación y aprender a colaborar para conseguir un objetivo común.",
        "A pesar de sus beneficios, es importante recordar que jugar debe ser parte de un equilibrio. Las tareas, el descanso, la familia y otras actividades también necesitan tiempo. Por eso es útil organizar los horarios y hacer pausas, especialmente cuando se pasa mucho tiempo sentado frente a una pantalla. Para mí, los videojuegos son una forma de divertirme, pero también una oportunidad para convivir y desconectarme un rato de las preocupaciones. La clave está en disfrutarlos sin descuidar las demás responsabilidades."
      ]
    },
    {
      id: 4,
      titulo: "La lectura y la curiosidad",
      categoria: "Intereses",
      fecha: "20 de octubre de 2026",
      resumen: "Leer nos permite conocer nuevas ideas, imaginar historias y aprender cosas desde distintas perspectivas.",
      icono: "menu_book",
      arte: "art-reading",
      contenido: [
        "Leer es una actividad que puede abrir la puerta a muchos mundos diferentes. Un libro, un artículo o incluso una explicación breve en internet pueden enseñarnos algo que no sabíamos. La lectura no siempre tiene que ser una obligación escolar; también puede ser una forma de relajarnos, imaginar lugares, conocer personajes y descubrir temas que despiertan nuestra curiosidad.",
        "Cuando leemos con atención, practicamos la comprensión, ampliamos nuestro vocabulario y aprendemos a expresar mejor nuestras ideas. También podemos conocer opiniones distintas a las nuestras y pensar por qué una persona ve un tema de otra manera. No es necesario leer muchas páginas en un solo día: dedicar unos minutos de manera constante puede ayudar a formar el hábito y hacer que la lectura sea más agradable.",
        "Me parece interesante combinar la lectura con otros gustos, como la tecnología y los videojuegos. Se pueden leer tutoriales para aprender una herramienta, reseñas para conocer un juego o historias que después nos inspiren a crear algo propio. Lo importante es elegir temas que nos interesen y mantener la mente abierta. Tener curiosidad nos motiva a hacer preguntas, buscar respuestas y seguir aprendiendo. Cada cosa nueva que descubrimos puede convertirse en una idea para un proyecto o en una experiencia que compartamos con los demás."
      ]
    }
  ];

  const contenedor = document.getElementById("lista-articulos");

  articulos.forEach((articulo) => {
    const columna = document.createElement("div");
    columna.className = "col s12 m6 l3 article-col";

    const tarjeta = document.createElement("article");
    tarjeta.className = "article-card";

    const ilustracion = document.createElement("div");
    ilustracion.className = `article-art ${articulo.arte}`;
    const icono = document.createElement("i");
    icono.className = "material-icons";
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = articulo.icono;
    ilustracion.appendChild(icono);

    const contenido = document.createElement("div");
    contenido.className = "article-content";

    const categoria = document.createElement("span");
    categoria.className = "article-category";
    categoria.textContent = articulo.categoria;

    const titulo = document.createElement("h3");
    titulo.textContent = articulo.titulo;

    const fecha = document.createElement("span");
    fecha.className = "article-date";
    fecha.textContent = articulo.fecha;

    const resumen = document.createElement("p");
    resumen.textContent = articulo.resumen;

    const enlace = document.createElement("a");
    enlace.href = "#modal-articulo";
    enlace.className = "article-link modal-trigger";
    enlace.innerHTML = 'Leer artículo completo <i class="material-icons">arrow_forward</i>';
    enlace.addEventListener("click", () => abrirArticulo(articulo));

    contenido.append(categoria, titulo, fecha, resumen, enlace);
    tarjeta.append(ilustracion, contenido);
    columna.appendChild(tarjeta);
    contenedor.appendChild(columna);
  });

  function abrirArticulo(articulo) {
    document.getElementById("modal-categoria").textContent = articulo.categoria;
    document.getElementById("modal-titulo").textContent = articulo.titulo;
    document.getElementById("modal-fecha").textContent = articulo.fecha;
    const cuerpo = document.getElementById("modal-contenido");
    cuerpo.replaceChildren();
    articulo.contenido.forEach((parrafo) => {
      const p = document.createElement("p");
      p.textContent = parrafo;
      cuerpo.appendChild(p);
    });
    const modal = M.Modal.getInstance(document.getElementById("modal-articulo"));
    modal.open();
  }

  document.getElementById("formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const formulario = evento.currentTarget;
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }
    M.toast({ html: "¡Gracias! Los datos del formulario son válidos." });
    formulario.reset();
    M.updateTextFields();
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Cerrar el menú móvil cuando se selecciona una sección
  document.querySelectorAll("#menu-movil a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      const sidenav = M.Sidenav.getInstance(document.getElementById("menu-movil"));
      if (sidenav) sidenav.close();
    });
  });
});
