$(function() {
  $.ajax ({
    url: 'https://www.codeschool.com/users/faljordani.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log("response",response.courses.completed);
    }
  });
});
