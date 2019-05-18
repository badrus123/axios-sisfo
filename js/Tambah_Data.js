function tambahAlumni(){
    var baseURL = "http://localhost:8000/api/v1/alumni/Alumni/newAlumni/";
  
    var NIM = document.getElementById("NIM").value
    var tahun_kelulusan = document.getElementById("tahun_kelulusan").value
  
    $.post(baseURL,
        {
            NIM: NIM,
            tahun_kelulusan: tahun_kelulusan
        },
        function(data, status){
            alert("Status: " + status);
        });
}

function tambahDekan(){
    var baseURL = "http://localhost:8000/api/v1/alumni/Dekan/newDekan/";
  
    var nama = document.getElementById("nama").value
    var umur = document.getElementById("umur").value
    var jenis_kelamin = document.getElementById("jenis_kelamin").value
  
    $.post(baseURL,
        {
            nama: nama,
            umur: umur,
            jenis_kelamin: jenis_kelamin
        },
        function(data, status){
            alert("Status: " + status);
        });
}

function tambahQuestion(){
    var baseURL = "http://localhost:8000/api/v1/alumni/Question/newQuestion/";
  
    var tahun = document.getElementById("tahun_kelulusan").value
    var pertanyaan = document.getElementById("pertanyaan").value
    var jawabanA = document.getElementById("jawabanA").value
    var jawabanB = document.getElementById("jawabanB").value
    var jawabanC = document.getElementById("jawabanC").value
    var jawabanD = document.getElementById("jawabanD").value
    var jawabanE = document.getElementById("jawabanE").value

    $.post(baseURL,
        {
            tahun_kelulusan: tahun,
            pertanyaan: pertanyaan,
            jawabanA: jawabanA,
            jawabanB: jawabanB,
            jawabanC: jawabanC,
            jawabanD: jawabanD,
            jawabanE: jawabanE
        },
        function(data, status){
            alert("Status: " + status);
        });
}