let playBtn = document.getElementById(`playButton`);
let pauseBtn = document.getElementById(`pauseButton`);
let audio = document.getElementById(`mySong`);

function hideBtn(button) {
    button.style.display = `none`
}

function showBtn(button) {
    button.style.display = `block`
}

playBtn.addEventListener(`click`, function(){
    hideBtn(playBtn);
    showBtn(pauseBtn);
    audio.play()
})

pauseBtn.addEventListener(`click`, function(){
    hideBtn(pauseBtn);
    showBtn(playBtn);
    audio.pause()
})
