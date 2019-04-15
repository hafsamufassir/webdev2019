// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// if (myHeading.textContent === 'Hello world!') {
//   alert('Hello world!!');    
// } else {
//   alert('Awwww...');    
// }

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/nature.jpg') {
      myImage.setAttribute ('src','images/nature2.jpg');
    } else {
      myImage.setAttribute ('src','images/nature.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.'); //promt - brings up  dialog box, like alert
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Welcome to this page, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to this page, ' + storedName + '!';
}

myButton.onclick = function() {
  setUserName();
}

// var myHTML = document.querySelector('html');
// myHTML.onclick = function() {};
