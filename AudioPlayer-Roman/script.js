let data={
    title: ["Smack That",
            "Minor",
            "Patron",
            "Utopia"],
    song:["music/Akon, Eminem – Smack That.mp3",
          "music/MiyaGi & Andy Panda - Minor.mp3",
          "music/Miyagi & Andy Panda - Patron.mp3",
          "music/MiyaGi feat. Andy Panda - Utopia.mp3"],
    poster:["https://media4.giphy.com/media/tqfS3mgQU28ko/giphy.gif?cid=6c09b95298bm3qdjdh28u8mxt3r9e8h2g54fsrlzzj0jb5dk&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://i.makeagif.com/media/6-01-2016/vD9RYr.gif",
            "https://i.pinimg.com/originals/7a/ec/d2/7aecd2a69668d123c8b7b84cffe96087.gif",
            "https://i.pinimg.com/originals/27/d9/b4/27d9b42705744648ceb00f94a130e4f4.gif"],



        }

let song=new Audio ()

window.onload =function(){
    playSong()
}
let currentSong = 0
function playSong(){
    song.src = data.song[currentSong]
    let songTitle=document.getElementById("songTitle")
    songTitle.textContent = data.title[currentSong]
    let img =document.getElementsByClassName("row1")
    img[0].style.backgroundImage = "url("+data.poster[currentSong]+")"
    let main =document.getElementsByClassName("main")
    main[0].style.backgroundImage = "url("+data.poster[currentSong]+")"
}

function playOrPause(){
    let play = document.getElementById("play")
    if(song.paused){
        song.play()
        play.src ="images/pause.png"

    }
    else{
        song.pause()
        play.src="images/play-button-arrowhead.png"
    }
}
