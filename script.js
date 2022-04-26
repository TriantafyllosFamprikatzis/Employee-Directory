
let userData = [];

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

const createUserPreview = function() {
  userData.results.forEach(user => {
    $('.users-container').append(
      `
        <div class="user-thumbnail">
          <a data-lightbox="example-set" href="${user.picture.large}" title="<h2>${user.name.first} ${user.name.last}</h2><p>${user.email}</p><p>${user.location.city}</p><p>${user.cell}</p><p>${user.location.street.number} ${user.location.street.name} ${user.location.postcode}</p>">
            <img src="${user.picture.large}">
          </a>
          <div class="user-thumbnail__info">
            <h2>${user.name.first} ${user.name.last}</h2>
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
