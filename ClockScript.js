const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {

    // Get time
    const now = new Date();

    // Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    // Minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    // Seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    /* Remove transition between 59 and 0
        Set inline style to none to remove transition.
        Set inline style to '' to remove inline style 
        and revert to stylesheet. */
    if (seconds === 0) {
        secondHand.style.transition = 'none';
        if (minutes === 0) {
            minuteHand.style.transition = 'none';
        }
        if (hours === 0) {
            hourHand.style.transition = 'none';
        }
    } else {
        hourHand.style.transition = '';
        minuteHand.style.transition = '';
        secondHand.style.transition = '';
    }



    // Move hands
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


}

setInterval(setDate, 1000);