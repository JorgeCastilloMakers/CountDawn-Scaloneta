const countdown = () => {
    const scalonetaDay = new Date("November 22, 2022 07:00:00").getTime();
    const fechaActual = new Date().getTime();
    const cuantoFalta = scalonetaDay - fechaActual;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dia = horas * 24;

    ///////////

    const diasFaltantes = Math.floor(cuantoFalta / dia);
    const horasFaltantes = Math.floor((cuantoFalta % dia) / horas);
    const minutosFaltantes = Math.floor((cuantoFalta % horas) / minutos);
    const segundosFaltantes = Math.floor((cuantoFalta % minutos) / segundos);

    document.getElementById('dia').innerText = diasFaltantes;
    document.getElementById('hora').innerText = horasFaltantes;
    document.getElementById('minutos').innerText = minutosFaltantes;
    document.getElementById('segundos').innerText = segundosFaltantes;
    



}

setInterval(countdown, 1000);