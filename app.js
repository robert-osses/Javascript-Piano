const buttons = document.querySelectorAll('button');

buttons.forEach(
    /*function(button){
        button.addEventListener('click', playSound);
    }*/
    button => button.addEventListener('click', playSound)
)

function playSound(event){
    const button = event.target;
    const note = button.dataset.note;

    const audio = document.getElementById('audio' + note);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

document.addEventListener('keydown', event => {
    const key = event.key;
    const button = document.querySelector(`button[data-key="${key}"]`); // ` alt 96
    
    if(button)
        button.click(); // trigger
});