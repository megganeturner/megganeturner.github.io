document.addEventListener("DOMContentLoaded", function() {
  loadJSON('js/projects.json', function (data) {
    data.forEach((element) => {
      console.log(element);
    });
  });

});


function loadJSON(url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      return callback(data);
    } else {
      console.log('We reached our target server, but it returned an error');
    }
  }
  request.onerror = function() {
    console.log('There was a connection error of some sort');
  };
  request.send();
}
