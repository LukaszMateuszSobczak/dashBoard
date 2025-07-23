import { getBackground } from './api/unsplash.js';
import { updateClock } from './ui/clock.js';
import { getCrypto } from './api/coingecko.js';
import { toDoBtn, toDoContainer, showBox, hideBox } from './ui/toDoList.js';

updateClock();
setInterval(updateClock, 1000);

window.addEventListener('DOMContentLoaded', getBackground);
getCrypto();

toDoBtn.addEventListener('mouseenter', showBox);
toDoBtn.addEventListener('mouseleave', hideBox);
toDoContainer.addEventListener('mouseenter', showBox);
toDoContainer.addEventListener('mouseleave', hideBox);
