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
// lab 13 retrieve data begins

var retrievedResults = localStorage.getItem('pictureResults'); // IF the data exists, we "grab it off the shelf"
// IF the data exists, we use it!
// NOTE:  we need to NOT reinstantiate goats IF Local Storage ALREADY EXISTS
if (retrievedResults) {
  var parsedRetrievedResults = JSON.parse(retrievedResults); // "unpack the data" - convert from JSON to JavaScript
  allPictures = parsedRetrievedResults;// IF data exists we assign that data to the goats array so we can add more data to existing data
} else {

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
}
// lab 13 retrieve data ends





function populateRenderQueue() {

  while (renderQueue.length > 3) {
    renderQueue.shift();
  }
  while (renderQueue.length < 6) {
    var uniquePicture = getRandompictures();
    while (renderQueue.includes(uniquePicture)) {
      uniquePicture = getRandompictures();
    }
    renderQueue.push(uniquePicture);
  }
  console.log('renderque:', renderQueue);
}
function renderPictures() {
  populateRenderQueue();
  var pictureOne = renderQueue[0];
  var pictureTwo = renderQueue[1];
  var pictureThree = renderQueue[2];


  pictureOneEl.src = allPictures[pictureOne].src; // getting source
  pictureOneEl.alt = allPictures[pictureOne].name; // getting alt
  allPictures[pictureOne].views++; // increment views

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

    renderMyChart();
    renderResults();

    //  lab 13 save data begins

    var stringifiedResults = JSON.stringify(allPictures); // "packs data away" to be stored, we convert to JSON
    localStorage.setItem('pictureResults', stringifiedResults); // store the data - "put the box on the shelf"
    // lab 13 save data ends

  }
}
pictureContener.addEventListener('click', handleClick);




//PUSH DATA INTO ARRAYS INTO CHART FUNCTION

var namesData = [];
var votesData = [];
var viewsData = [];


function getChartData() {
  for (var i = 0; i < allPictures.length; i++) {
    namesData.push(allPictures[i].name);
    votesData.push(allPictures[i].votes);
    viewsData.push(allPictures[i].views);
  }
}
// invoked
function renderMyChart() {
  getChartData(); // invoked
  var myChart = new Chart(ctx, {  //eslint-disable-line

    type: 'bar',
    data: {
      labels: namesData,
      datasets: [
        {
          label: '# of votes',
          data: votesData,
          backgroundColor: 'rgba(255, 128, 128, 0.886)',
          borderColor: 'rgb(76, 173, 252)',
          borderWidth: 2


        },
        {
          label: '# of views ',
          data: votesData,
          backgroundColor: 'rgb(245, 245, 245)',
          borderColor: 'rgb(245, 245, 245)',
          borderWidth: 2,
          hoverBorderColor: 'red',
          hoverBorderWidth: 3
        }
      ]
    },
    options: {
      legend: {
        position: 'top',

      },
      title: {

        text: 'bar chart',

        fontSize: 18,
        padding: 30,
        fontColor: 'rgb(245, 245, 245)'
      }
    }
  });
}
