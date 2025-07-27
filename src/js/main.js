import { getBackground } from './api/unsplash.js';
import { updateClock } from './ui/clock.js';
import { getCrypto } from './api/coingecko.js';
import { toDoBtn, toDoContainer, showBox, hideBox } from './ui/toDoList.js';
import { getWeather } from './api/weather.js';

updateClock();
setInterval(updateClock, 1000);

window.addEventListener('DOMContentLoaded', getBackground);
getCrypto();

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouch) {
    toDoBtn.addEventListener('touchstart', showBox);
    document.addEventListener('touchstart', (eve) => {
        if (eve.target != toDoContainer) {
            hideBox();
        }
    });
} else {
    toDoBtn.addEventListener('mouseenter', showBox);
    toDoBtn.addEventListener('mouseleave', hideBox);
    toDoContainer.addEventListener('mouseenter', showBox);
    toDoContainer.addEventListener('mouseleave', hideBox);
}

// getWeather();
