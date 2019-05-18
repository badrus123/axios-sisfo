const app = document.getElementById('root');
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/v1/alumni/Alumni/ShowAlumni/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
      var hasil = data.data
      console.log(hasil)
    hasil.forEach(data => {
        const container = document.createElement('tr');

        app.appendChild(container);
        const h1 = document.createElement('td');
        h1.textContent = data.NIM;
        
        const p = document.createElement('td');
        p.textContent = data.tahun_kelulusan;

        container.appendChild(h1);
        container.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `SISFO, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();

