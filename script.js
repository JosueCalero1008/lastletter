let cartaEscrita = false;
let siEscrito = false;
let noEscrito = false;

const cartaCompleta = `Si soy sincero, nunca imaginé que terminarías siendo una persona tan importante para mí. Al principio eras alguien más con quien hablaba, alguien que me llamaba la atención, pero con el tiempo te fuiste convirtiendo en alguien que ocupa un lugar muy especial en mi corazón.

Capaz te acuerdes de la llamada de ayer, donde te conté algunas cosas que siento por ti, pero la verdad es que hay muchas que todavía no he sabido expresar bien. Por eso hice esto, porque quería que vieras con calma todo lo que llevo dentro.

Me gusta hablar contigo. Me gusta escucharte. Me gusta cuando te ríes, cuando me cuentas cosas de tu día y cuando simplemente estamos ahí compartiendo cualquier momento. Me gusta tu voz, porque tiene esa forma de tranquilizarme y hacerme sentir bien incluso en los días complicados.

Y sí, también me gusta todo de ti. Tus cachetitos hermosos que me dan ganas de abrazarte, tu sonrisa, tu boquita, tu nariz, tus ojos y esa forma tan única que tienes de ser tú. Me encanta mi morenita preciosa, porque no solo me gusta por fuera, sino por la persona increíble que he ido conociendo poco a poco.

Y tal vez no te lo digo lo suficiente, pero me encanta la manera en que haces que mis días se sientan diferentes. Hay personas que llegan y pasan, pero tú llegaste y poco a poco te fuiste quedando en mis pensamientos, en mis sonrisas y en esos momentos donde sin darme cuenta termino pensando en ti.

Sé que he cometido errores. Lo de Quito es algo de lo que me arrepiento porque entiendo que te pude hacer sentir mal. No puedo cambiar lo que pasó, pero sí puedo demostrarte con hechos que aprendí de ello. Porque cuando alguien te importa de verdad, no quieres seguir cometiendo los mismos errores.

Quiero que sepas que mis intenciones contigo son sinceras. No estoy aquí para jugar contigo ni para hacerte perder el tiempo. Estoy aquí porque te quiero, porque me haces feliz y porque cada día que pasa me gusta más la idea de seguir construyendo algo bonito contigo.

También quiero que sepas que cuando pienso en ti, no pienso solamente en el presente. Pienso en todos esos momentos bonitos que me gustaría vivir contigo. Pienso en las aventuras que podríamos tener, en las risas que podríamos compartir y en todos esos recuerdos que algún día podríamos mirar hacia atrás y decir: “qué bonito fue vivir todo eso juntos”.

Me gustaría acompañarte en tus días buenos y también en los difíciles. Ser esa persona con la que puedas contar, que te escuche cuando necesites hablar, que te apoye cuando tengas dudas y que celebre contigo cada una de tus alegrías.

Me gustaría crear momentos inolvidables contigo. Viajes, caminatas, salidas improvisadas, conversaciones hasta tarde, abrazos largos y todas esas pequeñas cosas que terminan convirtiéndose en los recuerdos más valiosos.

Quiero ser ese chico que te quiera bonito, que te respete, que te cuide y que te valore como mereces. Quiero ser alguien que te haga sentir especial todos los días, porque sinceramente creo que eres una persona increíble.

Y aunque todavía estamos escribiendo nuestra historia, quiero que sepas algo muy importante: cuando estoy contigo no necesito mirar a nadie más. Mis ojos, mi atención y mi cariño están puestos en ti. Porque de verdad me importas y porque cada día descubro algo nuevo que me gusta de ti.

Lo más bonito de todo esto es que todavía te estoy conociendo. Todavía me quedan muchas cosas por descubrir de ti, muchas risas por escuchar, muchas historias por conocer y muchos momentos por vivir a tu lado.

No sé qué nos depare el futuro, pero sí sé una cosa: me encanta conocerte, me encanta compartir momentos contigo y me encantaría seguir escribiendo esta historia a tu lado.

Gracias por aparecer en mi vida, amor. ❤️

Y si me preguntas qué quiero ahora...

Quiero seguir conociéndote.
Quiero seguir haciéndote sonreír.
Quiero seguir creando recuerdos contigo.
Quiero seguir llenando nuestros días de momentos bonitos.
Y quiero seguir construyendo algo especial a tu lado.

Porque sinceramente creo que apenas estamos comenzando. ❤️`;

function iniciarExperiencia() {
  iniciarMusicaCarta();
  abrirSobre();
}

function iniciarMusicaCarta() {
  const instrumental = document.getElementById("musicaCarta");
  const comoTu = document.getElementById("musicaFinal");

  comoTu.pause();
  comoTu.currentTime = 0;

  instrumental.volume = 0.32;
  instrumental.play().catch(() => {});
}

function iniciarMusicaFinal() {
  const instrumental = document.getElementById("musicaCarta");
  const comoTu = document.getElementById("musicaFinal");

  apagarAudioSuave(instrumental, () => {
    comoTu.currentTime = 0;
    comoTu.volume = 0.38;
    comoTu.play().catch(() => {});
  });
}

function abrirSobre() {
  const sobre = document.querySelector('.sobre');
  sobre.classList.add('abierto');

  lanzarPetalos(30);

  setTimeout(() => {
    mostrarPantalla('carta');

    if (!cartaEscrita) {
      cartaEscrita = true;
      escribirTexto("textoCarta", cartaCompleta, 25, () => {
        document.getElementById("continuarFinal").classList.remove("oculto");
        lanzarPetalos(30);
      });
    }
  }, 1400);
}

function irAlFinal() {
  mostrarPantalla("final");
  iniciarMusicaFinal();
}

function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(pantalla => {
    pantalla.classList.remove('activa');
  });

  document.getElementById(id).classList.add('activa');
  window.scrollTo(0, 0);
}

function respuestaSi() {
  navigator.vibrate?.([200, 100, 200]);

  document.getElementById("overlaySi").classList.remove("oculto");

  reproducirSonido("sonidoFeliz");

  document.getElementById('mensajeSi').classList.remove('oculto');
  document.getElementById('mensajeNo').classList.add('oculto');

  lanzarPetalos(65);
  crearFuegosArtificiales();

  if (!siEscrito) {
    siEscrito = true;
    escribirTexto(
      "textoSi",
      "Entonces... sigamos escribiendo esta historia juntos 🤍",
      55
    );
  }
}

function respuestaNo() {
  document.getElementById("overlaySi").classList.add("oculto");

  reproducirSonido("sonidoTriste");

  document.getElementById('mensajeNo').classList.remove('oculto');
  document.getElementById('mensajeSi').classList.add('oculto');

  lanzarPetalos(35);

  if (!noEscrito) {
    noEscrito = true;
    escribirTexto(
      "textoNo",
      "Bueno... voy a fingir que no vi eso jajaja. Pero igual gracias por leer esto, porque lo hice con mucho cariño y con todo lo que siento por ti.",
      45
    );
  }
}

function apagarAudioSuave(audio, callback) {
  const fade = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume = Math.max(0, audio.volume - 0.05);
    } else {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0.32;
      clearInterval(fade);
      if (callback) callback();
    }
  }, 150);
}

function reproducirSonido(id) {
  const sonido = document.getElementById(id);
  sonido.currentTime = 0;
  sonido.volume = 0.75;
  sonido.play().catch(() => {});
}

function escribirTexto(id, texto, velocidad, callback) {
  const elemento = document.getElementById(id);
  elemento.innerHTML = "";
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;

      const caja = elemento.closest(".texto-carta");
      if (caja) {
        caja.scrollTop = caja.scrollHeight;
      }

      setTimeout(escribir, velocidad);
    } else {
      if (callback) callback();
    }
  }

  escribir();
}

function lanzarPetalos(cantidad) {
  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      crearPetalo();
    }, i * 90);
  }
}

function crearPetalo() {
  const petalo = document.createElement('div');
  petalo.classList.add('petalo');

  petalo.style.left = Math.random() * 100 + 'vw';
  petalo.style.animationDuration = Math.random() * 3 + 4 + 's';
  petalo.style.transform = `scale(${Math.random() * 0.6 + 0.7})`;

  document.body.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 7500);
}

function crearFuegosArtificiales() {
  const colores = [
    "#ff4f9a",
    "#ffd700",
    "#ffffff",
    "#00e1ff",
    "#ff7b00",
    "#a855f7"
  ];

  for (let e = 0; e < 8; e++) {
    setTimeout(() => {
      const centroX = Math.random() * window.innerWidth;
      const centroY = Math.random() * (window.innerHeight * 0.5);

      for (let i = 0; i < 80; i++) {
        const fuego = document.createElement("div");
        fuego.classList.add("fuego");

        fuego.style.left = centroX + "px";
        fuego.style.top = centroY + "px";

        const color = colores[Math.floor(Math.random() * colores.length)];
        fuego.style.background = color;
        fuego.style.color = color;

        const angulo = Math.random() * Math.PI * 2;
        const distancia = Math.random() * 250 + 100;

        fuego.style.setProperty("--x", Math.cos(angulo) * distancia + "px");
        fuego.style.setProperty("--y", Math.sin(angulo) * distancia + "px");

        document.body.appendChild(fuego);

        setTimeout(() => {
          fuego.remove();
        }, 1600);
      }
    }, e * 500);
  }
}

setInterval(() => {
  crearPetalo();
}, 1200);