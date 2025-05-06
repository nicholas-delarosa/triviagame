// Datos del juego
const preguntas = [
    {
    pregunta: "¿Cuál es el planeta más cercano al sol?",
    opciones: ["A) Mercurio", "B) Venus", "C) Marte"],
    respuesta: "A"
    },
    {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["A) Berlín", "B) París", "C) Madrid"],
    respuesta: "B"
    },
    {
    pregunta: "¿Qué lenguaje se usa principalmente en el desarrollo web?",
    opciones: ["A) Python", "B) Java", "C) JavaScript"],
    respuesta: "C"
    },
    {
    pregunta: "¿Cuántos continentes hay?",
    opciones: ["A) 5", "B) 6", "C) 7"],
    respuesta: "C"
    },
    {
    pregunta: "¿Cuál es el océano más grande del planeta?",
    opciones: ["A) Atlántico", "B) Índico", "C) Pacífico"],
    respuesta: "C"
    },
];

let puntaje = 0;

  // Función para iniciar el juego
function iniciarJuego() {
    alert("¡Bienvenido al simulador de preguntas tipo ABC!\nResponde escribiendo A, B o C.");
    let jugar = confirm("¿Deseas comenzar el juego?");
    if (jugar) {
    hacerPreguntas();
    mostrarResultados();
    } else {
    alert("Juego cancelado. ¡Hasta la próxima!");
    }
}

  // Función para hacer las preguntas
  function hacerPreguntas() {
    for (let i = 0; i < preguntas.length; i++) {
      let p = preguntas[i];
      let mensaje = `Pregunta ${i + 1}:\n${p.pregunta}\n` + p.opciones.join("\n");
      let respuestaUsuario = prompt(mensaje);
  
      // Si el usuario cancela
      if (respuestaUsuario === null) {
        alert("Juego cancelado. ¡Hasta la próxima!");
        console.log("El usuario canceló el juego durante las preguntas.");
        return; // salir de la función para que no sigan las preguntas
      }
  
      respuestaUsuario = respuestaUsuario.toUpperCase();
  
      if (respuestaUsuario === p.respuesta) {
        alert("¡Correcto!");
        puntaje++;
      } else {
        alert(`Incorrecto. La respuesta correcta era ${p.respuesta}`);
      }
    }
  }

  // Función para mostrar resultados
function mostrarResultados() {
    alert(`Juego finalizado.\nObtuviste ${puntaje} de ${preguntas.length} puntos.`);
    console.log(`Tu puntaje fue: ${puntaje}/${preguntas.length}`);
}

  // Iniciar el juego automáticamente al cargar
iniciarJuego();
