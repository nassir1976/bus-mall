//  create some picture objects
// will have an array of image objects, and randomly display three  different images on the page
// we will click on these  to vote
// we will track our clicks
// when we hit 25 clicks, remove event listener - close polls
// when the polls have closed, we render the results
 
//    ============ global variables===========           

var imgContainer = document.getElementById('img-container');
var imgOneEl = document.getElementById('image-one');
var imgTwoEl = document.getElementById('image-two');
var imgThreeEl = document.getElementById('image-three');
var myList = document.getElementById('list');


var  pictures = [];  
var totalClicksAllowed = 25;
var clicks = 0;
// number of pictures are displayed. 
var totalImages = 3;

//================  constructor ============
function Picture(name){
    this.name = name;
    this.src = `img/$(name}.jpg`; 
    this.views = 0;
    this.votes = 0;
    pictures.push(this);

}
   function getRandomPictureIndex(){
       return Math.floor(Math.random() * Pictures.length);
   }


function pictures() {
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
};

function getRandomPictures(){
    var pictureOne = getRandomPictureIndex();
    var pictureTwo = getRandomPictureIndex();
    while (pictureOne=== pictureTwo){
        pictureTwo= getRandomPictureIndex();
    }
    imgOneEl.src = Pictures[PictureOne].src ;
    imgOneEl.alt = Pictures[PictureOne].name;
    Pictures[PictureOne].views++;
    
    imgTwoEl.src = Pictures[pictureTwo].src;
    imgTwoEl.alt = Pictures[PictureTwo].name;
    Pictures[Picturetwo].views++;
}
  function renderResult(){
      for(var i = 0 ;i < Pictures.length; i ++){
          var li = document.createElement('li');
          li.textContent = `{pictures[i].name} had ${Pictures[i].votes},and was seen ${Pictures[i].views} times.`;
           myList.appendChild(li);

      }
  }
      renderpictures();
  function handleClick(event){
      var clickedpicture = event.target.alt;
      clicks++;
      
      for (var i = 0; i < pictures.length; i++){
          if(clickedpicture=== pictures[i].name){
            Pictures[i].votes++; 
          }
        }
      
      if(clicks === totalClicksAllowed){
        imgContainer.removeEventListener('click', handleClick);
        
       
      }
    } 
    renderResult();
    imgContainer.addEventListener('click',handleClick);

    