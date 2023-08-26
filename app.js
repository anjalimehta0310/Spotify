let music = new Audio('song');
//music.play();
let songs=[
    {
        id:'1',
        songName:` On My Way  <br> <div class="subtitle">Alan Walker, Farruko, and Sabrina Carpenter</div>`,
        imgPath:"img/img11.jpg",
        songpath:"song/1.mp3",
    },
    {
        id:'2',
        songName:` yeh dooriyan <br> <div class="subtitle">Amaal Mallik, Irshad Kamil, and Shreya Ghoshal</div>`,
        imgPath:"img/img10.jpg",
        songpath:"song/2.mp3",
    },
    {
        id:'3',
        songName:`Channa Ve <br>  <div class="subtitle">Arijit Singh</div>`,
        imgPath:"img/img1.jpg",
        songpath:"song/3.mp3",
    },
    {
        id:'4',
        songName:` Sab Tera <br> <div class="subtitle">Armaan Malik</div>`,
        imgPath:"img/img9.jpg",
        songpath:"song/6.mp3",
    },
    {
        id:'5',
        songName:` Tum hi ho <br>  <div class="subtitle">Arijit Singh</div>`,
        imgPath:"img/img3.jpg",
        songpath:"song/4.mp3",
    },
    {
        id:'6',
        songName:` Maan meri Jaan <br> <div class="subtitle">King</div>`,
        imgPath:"img/img4.jpg",
        songpath:"song/7.mp3",
    },
    {
        id:'7',
        songName:` Hamnava mere  <br> <div class="subtitle"> Rocky-Shiv</div> `,
        imgPath:"img/img8.jpg",
        songpath:"song/8.mp3",
    },
    {
        id:'8',
        songName:` Raatan Lambiyan <br> <div class="subtitle"> Asees Kaur and Jubin Nautiyal</div>`,
        imgPath:"img/img5.jpg",
        songpath:"song/5.mp3",
    },
    {
        id:'9',
        songName:` Tumse Pyaar Karke <br> <div class="subtitle">Jubin Nautiyal, Payal Dev, and Tulsi Kumar</div>`,
        imgPath:"img/img14.webp",
        songpath:"song/14.mp3",
    },
    {
        id:'10',
        songName:` Humsafar <br> <div class="subtitle">Akhil Sachdeva</div>`,
        imgPath:"img/img12.jpg",
        songpath:"song/13.mp3",
    },
    {
        id:'11',
        songName:` ishq Risk <br><div class="subtitle">Rahat Fateh Ali Khan</div>`,
        imgPath:"img/img18.jpg",
        songpath:"song/9.mp3",
    },
    {
        id:'12',
        songName:` Sanam Re <br><div class="subtitle">Akhil Sachdeva</div>`,
        imgPath:"img/img19.jpg",
        songpath:"song/10.mp3",
    },
    {
        id:'13',
        songName:` Tere Vaste <br><div class="subtitle">Sachin Jigar</div>`,
        imgPath:"img/img20.webp",
        songpath:"song/11.mp3",
    },
    {
        id:'14',
        songName:` subhanallah <br><div class="subtitle">Shilpa Rao & Sreerama Chandra</div>`,
        imgPath:"img/img21.jpg",
        songpath:"song/12.mp3",
    },
    {
        id:'15',
        songName:`  Apna bna le  <br><div class="subtitle">Sachin jigar & arijit Singh</div>`,
        imgPath:"img/img22.jpg",
        songpath:"song/15.mp3",
    },
    {
        id:'16',
        songName:` kesariya <br><div class="subtitle">Pritam & Amitabh Bhattacharya</div>`,
        imgPath:"img/img23.jpg",
        songpath:"song/16.mp3",
    },
    {
        id:'17',
        songName:` Mahiye Jina Sohna <br><div class="subtitle">Darshan Raval</div>`,
        imgPath:"img/img24.jpg",
        songpath:"song/17.mp3",
    },
    {
        id:'18',
        songName:` Ranjha <br><div class="subtitle">Jasleen Royal,B Praak</div>`,
        imgPath:"img/img25.jpg",
        songpath:"song/18.mp3",
    },
    {
        id:'19',
        songName:` Tum Mere <br><div class="subtitle">Darshan Raval</div>`,
        imgPath:"img/img26.jpg",
        songpath:"song/19.mp3",
    },
    {
        id:'20',
        songName:`  Bekhayalii <br><div class="subtitle">Sachet Tandon</div>`,
        imgPath:"img/img27.jpg",
        songpath:"song/20.mp3",
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].imgPath;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterPlay= document.getElementById('masterPlay');
let wave= document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
let index=0;
// index++;
// console.log(index);
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
       // console.log(index);
       music.src=`song/${index}.mp3`;
       poster_master_play.src=`img/${index}.jpg`
       music.play(); 
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles=songs.filter((els)=>{
            return els.id==index;
       });
       songTitles.forEach(elss=>{
            let {songName}=elss;
            title.innerHTML=songName;
       })
    })
})




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330
});

pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];


pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 330
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 330
});
let pop_album_left = document.getElementById('pop_album_left');
let pop_album_right = document.getElementById('pop_album_right');
let pop_album = document.getElementsByClassName('pop_album')[0];


pop_album_right.addEventListener('click', ()=>{
    pop_album.scrollLeft += 330
});

pop_album_left.addEventListener('click', ()=>{
    pop_album.scrollLeft -= 330
});




