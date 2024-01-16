
let score;
let temps;
let alien;
let timeRemaining = true;

window.addEventListener("load", () => {

    score = document.querySelector("#input-score")
    temps = document.querySelector("#input-timer")
    alien = new Alien("alien");
    clock();
    tick();
})

const tick = () => {
    
    if(timeRemaining)
    {
        alien.tick();
        window.requestAnimationFrame(tick); 
    }
    
}
const clock = () => {

    if(temps.value > 0)
        setTimeout(() => {temps.value--; clock();}, 1000);
    else
    timeRemaining = false;
}