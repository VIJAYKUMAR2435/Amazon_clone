console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('Barish Aayi.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
//let gif=document.getElementById('gif');
//let songItems=Array.from(document.getElementByClassName('songItem'));



let songs = [
    { songName: "Barish aayi", filePath: "web development/Barish Aayi.mp3", coverPath: "web development/te.jpg" },
    { songName: "Desh Mere", filePath: "web development/Desh Mere Bhuj - Arijit Singh.mp3", coverPath: "web development/2.jpg" },
    { songName: "Har Har Shambhu ", filePath: "web development/Har Har Shambhu Shiv Mahadeva.mp3", coverPath: "web development/3.jpg" },
    { songName: "Srivalli", filePath: "web development/Srivalli.mp3", coverPath: "covers/4.jpg" },
    { songName: "Mehbooba", filePath: "web development/Mehbooba .mp3", coverPath: "covers/5.jpg" },
    { songName: "Hunkar", filePath: "web development/Hunkara.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tere sath hun main ", filePath: "web development/Tere Saath Hoon Main.mp3", coverPath: "covers/7.jpg" }

]
// songItems.forEach((element,i)=>{
//    console.log(element,i);
//    // element.getElementsByTagName("img")[0].src=songs[i].coverPath;
//    element.getElementByClassName("songName")[0].innertext=songs[i].songName;
// })
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate', () => {
  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
  
    Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
// Array.from(document.getElementByClassName('songItemPlay')).forEach((element)=>{
//     element.addListener('click',(e)=>{
//        console.log(e.target);
//        makeAllPlays();
//        index=parseInt(e.target.id);
//        e.target.classList.remove('fa-circle-play');
//        e.target.classList.add('fa-circle-pause');
//        audioElement.src='songs/${index}.mp3';
//        audioElement.currentTime=0;
//        audioElement.play();
//        masterPlay.classList.remove('fa-circle-play');
//        masterPlay.classList.add('fa-circle-pause');



//    })

    
// })