'use strict';


function getDogImage(usersBreedOfDog) {
  let url = `https://dog.ceo/api/breed/${usersBreedOfDog}/images/random`;
  fetch(url)
  .then(response => response.json())
  .then(responseJson => {
    if (responseJson.status === 'success') {
      displayResults(responseJson)
    } else {
      $('.results').removeClass('hidden');
      $('.results').html(responseJson.message)
    }
  })
  .catch(error => alert('no pictures of that breed.'))
}
