$(function() {
  url: 'https://www.codeschool.com/users/faljordani.json',
  dataType: 'jsonp',
  success: function(response) {
    $("#badges").ajax()
  }
});
