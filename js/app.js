'use strict';

// ========== global variables==========

var pictureOneEl = document.getElementById('picture-one'); // =====images can give properties from the js
var pictureTwoEl = document.getElementById('picture-two'); // =====images can give properties from the js
var pictureThreeEl = document.getElementById('picture-three'); // =====images can give properties from the js
var pictureContener = document.getElementById('picture-contener'); // =====listener wiLL listen to this conainer
var catalogList = document.getElementById('catalogList'); // =====render result
var ctx = document.getElementById('myChart').getContext('2d');


var totalClickedAllowed = 25;
var clicked = 0;
var allPictures = [];
var renderQueue = [];
var votesArray = [];
var viewsArray = [];
var namesArray = [];


function Pictures(name) {
  this.src = `img/${name}.jpg`;
  this.name = name;
  this.votes = 0;
  this.views = 0;
  allPictures.push(this);
}

function getRandompictures() {
  return Math.floor(Math.random() * allPictures.length);
}
// ==============excuted code===========

new Pictures('bag');
new Pictures('banana');
new Pictures('bathroom');
new Pictures('boots');
new Pictures('breakfast');
new Pictures('bubblegum');
new Pictures('chair');
new Pictures('cthulhu');
new Pictures('dog-duck');
new Pictures('dragon');
new Pictures('pen');
new Pictures('pet-sweep');
new Pictures('scissors');
new Pictures('shark');
new Pictures('sweep');
new Pictures('tauntaun');
new Pictures('unicorn');
new Pictures('usb');
new Pictures('water-can');
new Pictures('wine-glass');



function populateRenderQueue() {
  renderQueue = [];
  while (renderQueue.length < 3) {
    var uniquePicture = getRandompictures();

    while (renderQueue.includes(uniquePicture)) {

      uniquePicture = getRandompictures();
    }
    renderQueue.push(uniquePicture);
  }

}
function renderPictures() {
  populateRenderQueue();
  var pictureOne = renderQueue[0];
  var pictureTwo = renderQueue[1];
  var pictureThree = renderQueue[2];


  pictureOneEl.src = allPictures[pictureOne].src;
  pictureOneEl.alt = allPictures[pictureOne].name;
  allPictures[pictureOne].views++;

  pictureTwoEl.src = allPictures[pictureTwo].src;
  pictureTwoEl.alt = allPictures[pictureTwo].name;
  allPictures[pictureTwo].views++;

  pictureThreeEl.src = allPictures[pictureThree].src;
  pictureThreeEl.alt = allPictures[pictureThree].name;
  allPictures[pictureThree].views++;
}
function renderResults() {
  for (var i = 0; i < allPictures.length; i++) {
    var li = document.createElement('li');
    li.textContent = `${allPictures[i].name} had ${allPictures[i].votes} votes, and was seen ${allPictures[i].views} times.`;
    catalogList.appendChild(li);

  }

}
renderPictures(); //  gives us initial image !!


function handleClick(event) {
  var clickedPictures = event.target.alt;
  clicked++;

  for (var i = 0; i < allPictures.length; i++) {
    if (clickedPictures === allPictures[i].name) {
      allPictures[i].votes++;
    }
  }
  // renderPictures();     //  gives us the images after each click!!
  renderPictures();

  if (clicked === totalClickedAllowed) {

    pictureContener.removeEventListener('click', handleClick);
    // renderChart();
    renderResults();
  }
}
pictureContener.addEventListener('click', handleClick);


// /=======/ chart=========
// function getData() {
//   for (var i = 0; i < allPictures.length; i++) {
//     votesArray.push(pictures[i].votes);
//     viewsArray.push(pictures[i].views);
//     namesArray.push(pictures[i].name);
//   }
// }


// getData();

// function renderChart() {
//   // getData();
//   var chartPictures = {
//     type: 'bar',
//     data: {
//       labels: namesArray,
//       datasets: [{
//         label: '# of Votes',

//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.2)',

//         data: votesArray,

//         backgroundColor: 'rgba(54, 162, 235, 0.4)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 2
//       },

//       {
//         label: '# of views',
//         data: viewsArray,
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 2
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//     }
//   };
//   var myChart = new Chart(ctx, chartObject);  //eslint-disable-line
// }
// pictureContener.addEventListener('click', handleClick);