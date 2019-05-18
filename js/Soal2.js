const soal = document.getElementById('soal');
var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:8000/api/v1/alumni/Question/ShowQuestion//', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);

      var hasil = data.data
      console.log(hasil)
      
    hasil.forEach(data => {   

      const jawabanA = document.createElement('input');
      jawabanA.setAttribute('type', 'radio');
      jawabanA.setAttribute('value', data.jawabanA);

      const jawabanB = document.createElement('input');
      jawabanB.setAttribute('type', 'radio');
      jawabanB.setAttribute('value', data.jawabanB);

      const jawabanC = document.createElement('input');
      jawabanC.setAttribute('type', 'radio');
      jawabanC.setAttribute('value', data.jawabanC);

      const jawabanD = document.createElement('input');
      jawabanD.setAttribute('type', 'radio');
      jawabanD.setAttribute('value', data.jawabanD);

      const jawabanE = document.createElement('input');
      jawabanE.setAttribute('type', 'radio');
      jawabanE.setAttribute('value', data.jawabanE);

      const pertanyaan = document.createElement('td');
      pertanyaan.textContent = data.pertanyaan;
      soal.appendChild(pertanyaan);


      
      const container = document.createElement('tr');
      soal.appendChild(container);

      const labelA = document.createElement('td');
      labelA.textContent = data.jawabanA;
      labelA.appendChild(jawabanA)
      soal.appendChild(labelA);

      const labelB = document.createElement('td');
      labelB.textContent = data.jawabanB;
      labelB.setAttribute('class', 'ml-5');
      labelB.appendChild(jawabanB)
      soal.appendChild(labelB);

      const labelC = document.createElement('td');
      labelC.textContent = data.jawabanC;
      labelC.setAttribute('class', 'ml-5');
      labelC.appendChild(jawabanC)
      soal.appendChild(labelC);

      const labelD = document.createElement('td');
      labelD.textContent = data.jawabanD;
      labelD.setAttribute('class', 'ml-5');
      labelD.appendChild(jawabanD)
      soal.appendChild(labelD);

      const labelE = document.createElement('td');
      labelE.textContent = data.jawabanE;
      labelE.setAttribute('class', 'ml-5');
      labelE.appendChild(jawabanE)
      soal.appendChild(labelE);




        
        container.appendChild(pertanyaan);
        container.appendChild(labelA);
        container.appendChild(labelB);
        container.appendChild(labelC);
        container.appendChild(labelD);
        container.appendChild(labelE);
    });
}

request.send();

