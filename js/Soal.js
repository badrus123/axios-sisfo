

const soal = document.getElementById('soal');
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/v1/alumni/Question/ShowQuestion//', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);

      var hasil = data.data
      // console.log('hasilnya adalah'+hasil)
    hasil.forEach(data => {
        const container = document.createElement('tr');
  
        soal.appendChild(container);
        
        const id_question = document.createElement('td');
        id_question.textContent = data.id_question;
        
        const tahun_kelulusan = document.createElement('td');
        tahun_kelulusan.textContent = data.tahun_kelulusan;

        const pertanyaan = document.createElement('td');
        pertanyaan.textContent = data.pertanyaan;

        const jawabanA = document.createElement('td');
        jawabanA.textContent = data.jawabanA

        const jawabanC = document.createElement('td');
        jawabanC.textContent = data.jawabanC

        const jawabanB = document.createElement('td');
        jawabanB.textContent = data.jawabanB

        const jawabanD = document.createElement('td');
        jawabanD.textContent = data.jawabanD

        const jawabanE = document.createElement('td');
        jawabanE.textContent = data.jawabanE

        //   container.appendChild(id_question);
        container.appendChild(id_question);
        container.appendChild(tahun_kelulusan);
        container.appendChild(pertanyaan);
        container.appendChild(jawabanA);
        container.appendChild(jawabanB);
        container.appendChild(jawabanC);
        container.appendChild(jawabanD);
        container.appendChild(jawabanE);
    });
}

request.send();

