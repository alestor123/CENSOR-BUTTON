var audios = ['bleep','dolphin','quack','distortion'],
btns = document.getElementById('btns');
audio = document.getElementById('audio');
audios.forEach(sound => {
var btn = document.createElement('button')
btn.id = 'button'
btn.innerHTML = sound.charAt(0).toUpperCase() + sound.slice(1)
btn.setAttribute('onclick',`playEffect('${sound}')`)
btns.appendChild(btn)
})
function playEffect(name) {
audio.src = `./public/assets/audio/${name}.mp3`
audio.play()
}
