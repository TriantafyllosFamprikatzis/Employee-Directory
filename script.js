
let userData = [];

//Get users
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=US',
  dataType: 'json',
  success: function(users) {
    console.log(users);
    return userData = users;
  },
  complete: function() {
    createUserPreview();
  }
});

//Create user
const createUserPreview = function() {
  userData.results.forEach(user => {
    $('.users-container').append(
      `
        <div class="user-thumbnail">
          <a data-lightbox="example-set" href="${user.picture.large}" title="<h2>${user.name.first} ${user.name.last}</h2><p>${user.email}</p><p>${user.location.city}</p><p>${user.cell}</p><p>${user.location.street.number} ${user.location.street.name} ${user.location.postcode}</p>">
            <img src="${user.picture.large}">
          </a>
          <div class="user-thumbnail__info">
            <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <p>${user.location.city}</p>
          </div>
        </div>
      `);
  });
};

//light box
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
});  

//Search User
function userSearch() {
  let users = document.querySelectorAll('.user-name');
  let searchQuery = document.getElementById('userInput').value; 

  for (let i = 0; i < users.length; i++) {
    if(users[i].innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      users[i].closest('.user-thumbnail').style.display = '';
    } else {
      users[i].closest('.user-thumbnail').style.display = 'none';
    }
  }
}