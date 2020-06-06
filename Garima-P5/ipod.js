// Create your global letiables below:
var tracklist = ["All We Got", "No problem", "Summer Friends", "D.R.A.M. Sings Special", "Blessings", "Same Drugs", "All Night", "Smoke Break", "How Great", "Angels"];
var volLevels = [];
var volume=0;
var song_time=document.querySelector("input");
var play_time=document.querySelector("#time-elapsed");
var current_time=0;
var playing=false;
var current_song=0;
song_time.max=180;
song_time.value=0;

function init() {
	// Your code goes here
	let str="vl";
	for (let i=0;i<6;++i)
	{
		let level=str+i;
		let vol =document.getElementById(level);
		volLevels[i]=vol;
	}
	for (let i=0;i<3;++i)
	{
		let vol =volLevels[i];
		vol.style.backgroundColor= "rgb(19, 170, 230)";
	}
	volume=3;
};

function volUp() {
	// Your code goes here
	if(volume<6){
		let vol=volLevels[volume];
		vol.style.backgroundColor= "rgb(19, 170, 230)";
		volume++;
	}
	else{
		alert("This is the maximum volume");
	}
}

function volDown() {
	// Your code goes here
	if(volume>0){
		volume--;
		let vol=volLevels[volume];
		vol.style.backgroundColor= "rgb(37, 36, 36)";
	}
	else{
		alert("This is the minimum volume");
	}
	
}

function switchPlay() {
	let play= document.getElementById("play-button");
	let pause= document.getElementById("pause-button");
	if(play && pause) {
		play.classList.toggle('hidden');
		pause.classList.toggle('hidden');
	}
	if(playing==false){
		time=setInterval(volbar,1000);
		playing=true;
	}
	else{
		clearInterval(time);
		playing=false;
		current_time=0;
	}

	song_time.addEventListener('input',changeval);
}

function changeval(){
console.log("showing val");
console.log(song_time.value);
current_time=song_time.value;
}



function volbar(){
	// Your code goes here
	current_time++;
	song_time.value=current_time;
	let time_lapsed=secondsToMs(current_time);
	play_time.innerHTML=time_lapsed;
	if (current_time>180)
	nextSong();
}

function nextSong() {
	// Your code goes here	
	if(current_song<tracklist.length-1) 
	current_song++;
	else 
	current_song=0; 
	let vol=tracklist[current_song];
	let level=document.querySelector("#player-song-name");
	level.innerHTML=vol;
	current_time=0;
	song_time.value=current_time;
	let time_lapsed=secondsToMs(current_time);	
	play_time.innerHTML=time_lapsed;
	
}

function prevSong() {
	// Your code goes here
	if(current_song>0)
	current_song--; 	
	else 
	current_song=tracklist.length-1;	
	let vol=tracklist[current_song];
	let level=document.querySelector("#player-song-name");
	level.innerHTML=vol;
	current_time=0;
	song_time.value=current_time;
	let time_lapsed=secondsToMs(current_time);	
	play_time.innerHTML=time_lapsed;
}

function secondsToMs(d) {
    d = Number(d);
    let min = Math.floor(d / 60);
    let sec = Math.floor(d % 60);
    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();