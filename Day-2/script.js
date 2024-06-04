/* tugas hari kedua Coursenet prakerja 2024
tampilkan 5 angka ganji dan genap pertama
1 adalah ganjil
2 adalah genap
3 adalah ganjil
4 adalah genap
5 adalah ganjil

memakai if dan for
*/

// pertama saya  looping variabel i dari 1 sampai 5 
for (let i = 1; i <= 5; i++) {
  // setalah di looping variabel i mempunyai nilai 1 sampai 5.
  //saya buat kondisi  jika isi variabel i dibagi 2 sama denagan 0 maka hasilnya true.
  // dan jika tidak sama denagn 0 maka hasilnya false
  if (i % 2 === 0) {
    // output true jika dibagi 2 sama dengan 0  
    console.log(`${i} adalah genap`);
    // output fals jika di bagi 2 tidak sama dengan 0
  } else {
    console.log(`${i} adalah gajil`);
  }
}

// sekian hasil tugas mandiri ke 2 :)
