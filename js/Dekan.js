const dekan = document.getElementById('dekan');
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/v1/alumni/Dekan/ShowDekan/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);

      var hasil = data.data
      console.log(hasil)
    hasil.forEach(data => {
        const container = document.createElement('tr');

        dekan.appendChild(container);
        const idDekan = document.createElement('td');
        idDekan.textContent = data.idDekan;
        
        const nama = document.createElement('td');
        nama.textContent = data.nama;

        const umur = document.createElement('td');
        umur.textContent = data.umur;

        const jenis_kelamin = document.createElement('td');
        jenis_kelamin.textContent = data.jenis_kelamin

        //   container.appendChild(idDekan);
        container.appendChild(idDekan);
        container.appendChild(nama);
        container.appendChild(umur);
        container.appendChild(jenis_kelamin);
    });
}

request.send();

