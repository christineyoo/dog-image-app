'use strict';

function getDogImage() {
const inputValue = $("#quantity").val();
for (let i = 1; i <= inputValue; i++) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
    }
}

function displayResults(responseJson) {
  console.log(responseJson);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});