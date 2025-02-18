import {initTimer} from './timer.js';
import {parallax} from "./parallax.js";
import {launchSlide} from "./slider.js";

document.addEventListener('DOMContentLoaded', ({event}) => {
    const allSeconds = 60 * 10;
    const time = document.getElementById('timer');





    parallax();
    launchSlide();
    initTimer(allSeconds, time);
});
