const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.innerText;

    if (sound === 'stop') {
      stopSounds();
    } else {
      stopSounds();
      const audio = document.getElementById(sound);
      if (audio) {
        audio.play();
      }
    }
  });
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
