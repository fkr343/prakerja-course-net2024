/*
ALGORITMA VOLUME BOLA
program mulai
start
input variabel Jari-jari

program berjalan
jika variabel jari-jari habis di bagi 7
maka lakukan rumus satu = 4/3 * 22/7* jari-jari * jari-jari * jari-jari

jika variabel jari-jari tidak habis di bagi 7
maka lakukan rumus dua =4/3 * PI *  jari-jari * jari-jari * jari-jari
cetak hasil
end
program selesai

/// pseudocode ///
start
variabel jari-jari = 21

program berjalan
if variabel jari-jari habis di bagi 7
4/3 * 22/7 * r * r * r
else variabel jari-jari tidak habis di bagi 7
4/3 * 3.14 * r * r * r

cetak hasil = 4/3 * 22/7 * 21 * 21 * 21 = 38808
end





*/

const hitung = () =>{
  let inputUsers = document.getElementById('inputValue')
  let result = document.getElementById('result')
  if (inputUsers.value % 7 == 0) {
    let hasilSatu = (4 / 3) * 22 / 7 * Math.pow(inputUsers.value, 3)
    result.innerHTML = `hasilnya:${hasilSatu}`
  } else {
    let hasilDua = (4 / 3) * Math.PI * Math.pow(inputUsers.value, 3)
    result.innerHTML = `hasilnya:${hasilDua}`
  }
}