document.addEventListener("DOMContentLoaded", function() {
  const projectList = document.getElementById("projectList");

  loadJSON('js/projects.json', function (data) {
    data.forEach((project) => {
      const projectEl = document.createElement('div');
      projectEl.className = 'project';

      const leftCol = document.createElement('div');
      leftCol.className = 'leftCol';

      const rightCol = document.createElement('div');
      rightCol.className = 'rightCol';

      const imageLink = document.createElement('a');
      imageLink.setAttribute('href', project.siteLink);
      imageLink.setAttribute('target', '_blank');

      const imageEl = document.createElement('img');
      imageEl.setAttribute('src', project.imgSrc);
      imageEl.className = 'featureImage';
      imageLink.appendChild(imageEl);

      const titleEl = document.createElement('h3');
      titleEl.appendChild(document.createTextNode(project.title));

      const descEl = document.createElement('p');
      descEl.appendChild(document.createTextNode(project.description));

      const linksEl = document.createElement('div');
      linksEl.className = 'links';

      if (project.siteLink) {
        const siteLinkEl = document.createElement('a');
        siteLinkEl.setAttribute('href', project.siteLink);
        siteLinkEl.setAttribute('target', '_blank');
        siteLinkEl.className = 'textualLink';
        siteLinkEl.appendChild(document.createTextNode('Live Site'));

        linksEl.appendChild(siteLinkEl);
      }

      if (project.githubLink) {
        const codeLinkEl = document.createElement('a');
        codeLinkEl.setAttribute('href', project.githubLink);
        codeLinkEl.setAttribute('target', '_blank');
        codeLinkEl.className = 'textualLink';
        codeLinkEl.appendChild(document.createTextNode('Code'));

        linksEl.appendChild(codeLinkEl);
      }



      projectEl.appendChild(leftCol);
      projectEl.appendChild(rightCol);

      leftCol.appendChild(imageLink);

      rightCol.appendChild(titleEl);
      rightCol.appendChild(descEl);
      rightCol.appendChild(linksEl);

      projectList.appendChild(projectEl);
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
