'use strict';

function getDogImage(breedOfDog) {
  console.log(breedOfDog)
  fetch(`https://dog.ceo/api/breed/${breedOfDog}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
          displayResults(responseJson))
      .catch(error => {
        console.log(error)
  });
};

function displayResults(responseJson) {
  console.log(responseJson);
  $(".results").html("");
  $(".results").append(`<img src="${responseJson.message}" class="results">`);
   //display the results section
  $(".results").removeClass("hidden");
};

function watchSubmit() {
  $('form').submit(event => {
    event.preventDefault();
    let breedOfDog = $(event.target).find('#breedOfDog').val()
 getDogImage(breedOfDog);
  });
};

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchSubmit();
});
