"use strict";
document.addEventListener("DOMContentLoaded", function() {
  var playList = [
    {
      author: "led zeppelin",
      song: "stairway to heaven",
      duration: "2:03"
    },
    {
      author: "queen",
      song: "bohemian rhapsody",
      duration: "2:30"
    },
    {
      author: "lynyrd skynyrd",
      song: "free bird",
      duration: "1:56"
    },
    {
      author: "deep purple",
      song: "smoke on the water",
      duration: "3:03"
    },
    {
      author: "jimi hendrix",
      song: "all along the watchtower",
      duration: "2:53"
    },
    {
      author: "AC/DC",
      song: "back in black",
      duration: "2:43"
    },
    {
      author: "queen",
      song: "we will rock you",
      duration: "2:13"
    },
    {
      author: "metallica",
      song: "enter sandman",
      duration: "3:03"
    }
  ];
  var songCounter = playList.length;
  var resultContainer = document.getElementsByTagName("ul")[0];
  createPlayList();
  function createPlayList() {
    for (var i = 0; i < songCounter; i++) {
      var arr = [];
      for (var key in playList[i]) {
        arr.push(
          playList[i][key][0].toUpperCase() + playList[i][key].substr(1)
        );
      }
      resultContainer.appendChild(createElement(arr));
    }
  }
  function createElement([author, songName, duration]) {
    var song = document.createElement("li");
    song.innerHTML =
      `<svg class="ba-tune__like">
         <use xlink:href="#icon-heart">
       </svg>
      <div class="description">
        <span class="duration">` +
      duration +
      `</span>
        <span class="autor">` +
      author +
      `</span>
      </div>
      <div class="songName">` +
      songName +
      `</div>`;
    return song;
  }
});
