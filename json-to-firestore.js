const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({

});
  
var db = firebase.firestore();

var songs=[
  {
    id: 0,
    name: 'When You Fell From Heaven You Broke All My Bones',
    author: [
      'Rod Scheinkens'
    ],
    userID: 2,
    album: 'Shaking The Days for All They\'re Worth',
    albumArt: 'img/album_0_wayout.jpg',
    songURL3: 'aud/1-actionable.mp3',
    songURL: 'aud/1-actionable.ogg',
    songLength: '3:58',
    colors: {
      lt_bg1: '#e7eae4',
      lt_bg2: '#bad5df',
      dk_bg1: '#73897B',
      dk_bg2: '#42798C',
      lt_pt: '#006873',
      lt_st: '#00a06e',
      dk_pt: '#b7ead1',
      dk_st: '#b5daf5'
    },
    description: '0 words words words words words words words words words words words words ',
    genre: 'Bean Smashing',
    comments: [
      {
        commenter: 'supermario27',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'A few weeks ago',
        comment: 'it\'s a me! mario! and dis-sa song issa bop!'
      }
    ]
  },
  {
    id: 1,
    name: 'Diss Course',
    author: [
      'The Pyrty Zoen'
    ],
    userID: 3,
    album: '11 Minutes of Mayhem EP',
    albumArt: 'img/album_1_moonman.png',
    songURL3: 'aud/2-allthat.mp3',
    songURL: 'aud/2-allthat.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#e7eae4',
      lt_bg2: '#f6bbd7',
      dk_bg1: '#c45aac',
      dk_bg2: '#c45aac',
      lt_pt: '#4c0349',
      lt_st: '#a500ff',
      dk_pt: '#f9a8f6',
      dk_st: '#59177d'
    },
    description: '1 words words words words words words words words words words words words ',
    genre: 'Break Even',
    comments: [
      {
        commenter: 'A Cool Dog',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: '2 days ago',
        comment: 'hey im a dog! my hearing range is in a different range than yours! i can\'t understand music!'
      }
    ]
  },
  {
    id: 2,
    name: 'Long Ways Going Under',
    author: [
      'Arkivet'
    ],
    userID: 4,
    album: 'The Benefits of Doubting',
    albumArt: 'img/album_2_arkivet.png',
    songURL3: 'aud/3-dreams.mp3',
    songURL: 'aud/3-dreams.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#e2f0ee',
      lt_bg2: '#f5c1a8',
      dk_bg1: '#1c3833',
      dk_bg2: '#bb4b16',
      lt_pt: '#483913',
      lt_st: '#08423f',
      dk_pt: '#deb752',
      dk_st: '#70d8d3'
    },
    description: '2 words words words words words words words words words words words words ',
    genre: 'Break Even',
    comments: [
      {
        commenter: 'Definately Not Barack Obama',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: '2 years ago',
        comment: 'This is the only way I can communicate without being tracked. If anyone is reading this, meet me on the Corner of 5th and 7th in Chicago on August 21, 2019. You\'ll see me. Mention the grapefruit you had for breakfast.'
      }
    ]
  },
  {
    id: 3,
    name: 'Underwater Bob n\' Weaving',
    author: [
      'The Concussions'
    ],
    userID: 'concussions-music',
    album: 'Momma Said Knock You Out',
    albumArt: 'img/album_3_momma.png',
    songURL3: 'aud/4-dubstep.mp3',
    songURL: 'aud/4-dubstep.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#ebeded',
      lt_bg2: '#e0c1b5',
      dk_bg1: '#121414',
      dk_bg2: '#bb765b',
      lt_pt: '#2a2323',
      lt_st: '#512e24',
      dk_pt: '#f3e2b0',
      dk_st: '#ff9a7d'
    },
    description: '3 words words words words words words words words words words words words ',
    genre: 'Hard Rock',
    comments: [
      {
        commenter: 'its me bird',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: '2 Hours Ago',
        comment: 'av94ijjjfivu jekmoxo ekjglskja 3 34  sf seflksfje3i4 oan'
      },
      {
        commenter: 'its me bird',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: '2 Hours Ago',
        comment: 'adai8jgr908u038hrajb lo84ahf oa8hf3blkh a3uba-doubae8p ao8ha=sljdk'
      }
    ]
  },
  {
    id: 4,
    name: 'You\'ve Caught Mail',
    author: [
      'Computer & The Brain'
    ],
    userID: 'computer-and-the-brain',
    album: 'Hold Please',
    albumArt: 'img/album_4_computer.jpg',
    songURL3: 'aud/5-erf.mp3',
    songURL: 'aud/5-erf.ogg',
    songLength: '3:22',
    colors: {
      lt_bg1: '#faeab4',
      lt_bg2: '#a7dde2',
      dk_bg1: '#a4820b',
      dk_bg2: '#3598a1',
      lt_pt: '#102422',
      lt_st: '#573208',
      dk_pt: '#29dcca',
      dk_st: '#e5ea10'
    },
    description: '4 words words words words words words words words words words words words ',
    genre: 'Neue Techno',
    comments: [
      {
        commenter: 'Deadmau5_Official⭐',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'A few weeks ago',
        comment: 'good stuff man you got the sound of the future - DM me and ill sign u up with my record label'
      }
    ]
  },
  {
    id: 5,
    name: 'Half Mile',
    author: [
      'Starlite'
    ],
    userID: 'starlite',
    album: 'HOTEL',
    albumArt: 'img/album_5_starlite.jpg',
    songURL3: 'aud/6-highoctane.mp3',
    songURL: 'aud/6-highoctane.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#cfecf5',
      lt_bg2: '#95c4d8',
      dk_bg1: '#223237',
      dk_bg2: '#4d94b1',
      lt_pt: '#177fbd',
      lt_st: '#124254',
      dk_pt: '#F3BBB0',
      dk_st: '#F0EFE2'
    },
    description: '5 words words words words words words words words words words words words ',
    genre: 'Pop Rock',
    comments: [
      {
        commenter: 'pokemon_fanatic2004',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'A month ago',
        comment: 'Oh my God I love this track! I feel like every single note is resonating in my soul! Thank you so so so much!'
      },
      {
        commenter: 'Jose Benaides',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'A few weeks ago',
        comment: 'dude calm down its just a stock music track'
      }
    ]
  },
  {
    id: 6,
    name: 'Jack and Jane',
    author: [
      'Loner Blood'
    ],
    userID: 'loner-blood',
    album: 'I Can Do Better Than This',
    albumArt: 'img/album_6_loner.jpg',
    songURL3: 'aud/1-actionable.mp3',
    songURL: 'aud/7-moose.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#efe5e6',
      lt_bg2: '#e0a598',
      dk_bg1: '#aa787a',
      dk_bg2: '#a94934',
      lt_pt: '#1a4a13',
      lt_st: '#1d2914',
      dk_pt: '#82b6ff',
      dk_st: '#ff8c71'
    },
    description: '6 words words words words words words words words words words words words ',
    genre: 'Pop Rock',
    comments: [
      {
        commenter: 'Your old roomate Don',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'Just... Every Single Day',
        comment: 'Hey man just lettin\' you know I spilled like a whole can of beefaroni all over your bed - but don\'t worry, I\'ll definately clean it later.<br>Oh, also your dog rolled around in it so it\'s kinda smeared all over the place and she needs a bath. Just lettin\' you know. I\'ll clean it up after this next Call of Duty match. Promise. It\'s also on the walls a bit just thought you should know.'
      }
    ]
  },
  {
    id: 7,
    name: 'Heart Bind',
    author: [
      'Failure Impossible'
    ],
    userID: [
      'failure-impossible'
    ],
    album: 'From Here to Milwaukee',
    albumArt: 'img/album_7_milwakee.png',
    songURL3: 'aud/2-allthat.mp3',
    songURL: 'aud/2-allthat.ogg',
    songLength: '2:28',
    colors: {
      lt_bg1: '#f3f1eb',
      lt_bg2: '#f3c7be',
      dk_bg1: '#847f41',
      dk_bg2: '#337c80',
      lt_pt: '#522721',
      lt_st: '#1d2723',
      dk_pt: '#ffffff',
      dk_st: '#47e2b9'
    },
    description: 'This is the description of Song 7. This is the description of Song 7. This is the description of Song 7. This is the description of Song 7. This is the description of Song 7. ',
    genre: 'Pop Rock',
    comments: [
      {
        commenter: 'supermario27',
        commentAvatar: 'https://orig00.deviantart.net/14a8/f/2014/075/a/9/super_mario_avatar_by_hgnwolf-d7aei5r.jpg',
        timestamp: 'A few weeks ago',
        comment: 'it\'s a me! mario! and dis-sa song issa bop!'
      }
    ]
  }
]

songs.forEach(function(obj) {
    db.collection("songs").add({
        name: obj.name,
        authors: obj.author,
        userID: obj.userID,
        album: obj.album,
        albumArt: obj.albumArt,
        songURL: "",
        songLength: obj.songLength,
        likes: 0,
        colors: obj.colors,
        description: obj.description,
        genre: obj.genre,
        comments: obj.comments,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});