//  create some picture objects
// will have an array of image objects, and randomly display three  different images on the page
// we will click on these  to vote
// we will track our clicks
// when we hit 25 clicks, remove event listener - close polls
// when the polls have closed, we render the results
 
//    ============ global variables===========           

var imgContainer = document.getElementById('img-container');
var buttonContainer = document.getElementById('button');
var voteContainer = document.getElementById('vote');
var clearContainer = document.getElementById('clear');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');

var  picArray = [];  
var totalClicksAllowed = 25;
var clicks = 0;
// number of pictures are displayed. 
var totalImages = 3;

//================  constructor ============
function Pictures(name , src){
    this.name = name
    this.src = `img/$(name}.jpg`; 
    this.views = 0;
    this.votes = 0;
    picArray.push(this);

}
   function getRandomPictueIndex(){
       return Math.floor(Math.random() * Pictures.length);
   }


function desplayPictures() {
new Picture('bag');
new Picture('banana');
new Picture('bathroom');
new Picture('boots');
new Picture('breakfast');
new Picture('bubblegum');
new Picture('chair');
new Picture('cthulhu');
new Picture('dog-duck');
new Picture('dragon');
new Picture('pen');
new Picture('pet-sweep');
new Picture('scissors');
new Picture('shark');
new Picture('sweep');
new Picture('tauntaun');
new Picture('unicorn');
new Picture('usb');
new Picture('water-can');
new Picture('wine-glass');
}






  