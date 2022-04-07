
let userData = [];

$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(users) {
    console.log(users);
    return userData = users;
  },
  complete: function() {
    createUserPreview();
  }
});

const createUserPreview = function() {
  userData.results.forEach(user => {
    $('.users-container').append(`<div class="user-thumbnail"><img src="${user.picture.large}"> <h2>${user.name.first}</h2> <h2>${user.name.last}</h2> <p>${user.email}</p> <p>${user.location.city}</p></div>`);
  });
};


