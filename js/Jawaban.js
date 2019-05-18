const jawab = document.getElementById('jawaban');
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/v1/alumni/Jawaban/ShowJawaban/', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);

      var hasil = data.data
      console.log(hasil)
    hasil.forEach(data => {
        const container = document.createElement('tr');

        jawab.appendChild(container);
        const id_jawaban = document.createElement('td');
        id_jawaban.textContent = data.id_jawaban;
        
        const NIM = document.createElement('td');
        NIM.textContent = data.NIM;

        const id_question = document.createElement('td');
        id_question.textContent = data.id_question;

        const jawaban = document.createElement('td');
        jawaban.textContent = data.jawaban

        //   container.appendChild(id_jawaban);
        container.appendChild(id_jawaban);
        container.appendChild(NIM);
        container.appendChild(id_question);
        container.appendChild(jawaban);
    });
}

request.send();

