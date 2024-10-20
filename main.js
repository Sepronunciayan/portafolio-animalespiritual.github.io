

function modal() {
  setTimeout( ()=> {
  contenViewport.style.display = "flex";
  contenViewport.style.transition = "1s";
}, 4000);
}

// --------------------------------------------------

let girada = false;

function girarCarta(carta) {
  const cara = carta.querySelector(".cara");
  const cruz = carta.querySelector(".cruz");
  
  if (!girada) {
    cara.style.transform = "perspective(600px) rotateX(-180deg)";
    cruz.style.transform = "perspective(600px) rotateX(-360deg)";
    girada = true;
  } else {
    cara.style.transform = "perspective(600px) rotateX(0deg)";
    cruz.style.transform = "perspective(600px) rotateX(-180deg)";
    girada = false;
  }
  
}

function girarCarta(tarot) {
  const cara = tarot.querySelector(".cara");
  const cruz = tarot.querySelector(".cruz");
  if (!girada) {
    cara.style.transform = "perspective(600px) rotateY(180deg)";
    cruz.style.transform = "perspective(600px) rotateY(360deg)";
    girada = true;
  } else {
    cara.style.transform = "perspective(600px) rotateY(0deg)";
    cruz.style.transform = "perspective(600px) rotateY(180deg)";
    girada = false;
  }
}

// -------------------------------------------------

let imprimir = document.getElementById("texto");
let frase =
  "“Por mandato de los cielos y el saber de las estrellas, deslizad vuestro dedo sobre estas nobles cartas, pues solo así el mensaje que os corresponde será revelado, Habréis de clicar dos veces para que se complete la obra. Que las fuerzas del firmamento y el eco de vuestros ancestros guíen vuestros pasos hacia el destino que los hilos del tiempo han tejido para vos, valeroso viajero.”";
let timeOut;
let interval;
let i = 0;

function missatge() {
  timeOut = setTimeout(function () {
    interval = setInterval(function () {
      if (i < frase.length) {
        imprimir.innerHTML += frase[i];
        i++;
      } else {
        clearInterval(interval);
      }
    }, 30);
  }, 500);
}

// -------cierre-modal-inicio------------------------------------------

function cerrarModalInicio() {
  contenViewportInicio.style.display = "none";
}

// -------cierre-modal-cartas------------------------------------------

function mantenerModal() {
  contenViewport.style.display = "flex";
}

function cerrarModal() {
  contenViewport.style.display = "none";
  location.reload();
  cerrarModalInicio();
}

// --------------------------------------------------