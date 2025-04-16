const countdown = () => {
  const mundialDay = new Date("June 11, 2026 00:00:00").getTime();
  const fechaActual = new Date().getTime();
  let cuantoFalta = mundialDay - fechaActual;

  // Evitar que vaya a valores negativos
  if (cuantoFalta <= 0) {
    document.getElementById('dia').innerText = 0;
    document.getElementById('hora').innerText = 0;
    document.getElementById('minutos').innerText = 0;
    document.getElementById('segundos').innerText = 0;
    clearInterval(timer); // detener intervalo
    return;
  }

  const segundos = 1000;
  const minutos = segundos * 60;
  const horas = minutos * 60;
  const dia = horas * 24;

  const diasFaltantes = Math.floor(cuantoFalta / dia);
  const horasFaltantes = Math.floor((cuantoFalta % dia) / horas);
  const minutosFaltantes = Math.floor((cuantoFalta % horas) / minutos);
  const segundosFaltantes = Math.floor((cuantoFalta % minutos) / segundos);

  document.getElementById('dia').innerText = diasFaltantes;
  document.getElementById('hora').innerText = horasFaltantes;
  document.getElementById('minutos').innerText = minutosFaltantes;
  document.getElementById('segundos').innerText = segundosFaltantes;
};

// guardamos el ID para poder hacer clearInterval luego
const timer = setInterval(countdown, 1000);
