const timeEle = document.querySelector('#time');
export const updateClock = () => {
    const now = new Date(); // actual time
    const hour = String(now.getHours()).padStart(2, '0'); // convert to string because of padStart(only string accepted), pad start set up number of characters
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeEle.textContent = `${hour}:${minutes}:${seconds}`;
};
