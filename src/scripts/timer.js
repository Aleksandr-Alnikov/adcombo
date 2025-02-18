export const initTimer = (allSeconds, time) => {
    let timer = allSeconds,
        hours,
        minutes,
        seconds;

     setInterval(function () {
         hours = parseInt(timer / 3600, 10);
         minutes = parseInt((timer % 3600) / 60, 10);
         seconds = parseInt(timer % 60, 10);

         hours = hours < 10 ? "0" + hours : hours;
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;

         time.textContent = `${hours} : ${minutes} : ${seconds}`;

        if (--timer < 0) {
            timer = allSeconds;
        }
    }, 1000);
};