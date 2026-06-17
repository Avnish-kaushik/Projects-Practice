const soundMap = {
    'A': './Sounds/1.mp3',
    'S': './Sounds/2.mp3',
    'D': './Sounds/3.mp3',
    'F': './Sounds/4.mp3',
    'G': './Sounds/5.mp3',
    'H': './Sounds/6.mp3',
    'J': './Sounds/7.mp3',
    'K': './Sounds/8.mp3',
    'L': './Sounds/9.mp3',
}

const btn = document.querySelectorAll('.btn');

btn.forEach(element => {
    element.addEventListener('click', function () {
        console.log(`Button is Clicked ${element.getAttribute('data-key')}`);
        let audio = new Audio(soundMap[element.getAttribute('data-key')]);
        audio.play();
    })
});