// Cara penulisan ini namanya adalah "fungsi" (function)
// akan dipelajari nanti yah !
function kalkulasiNilaiTotal(uts, uas, tugas) {
  // TODO: 1. set nilaiUts dari parameter `uts`
  const nilaiUts;

  // TODO: 2. set nilaiUas dari parameter `uas`
  const nilaiUas;

  // TODO: 3. set nilaiTugas dari parameter `tugas`
  const nilaiTugas;

  // TODO: 4. lakukan perhitungan di sini
  // nilaiTotal didapat dari penjumlahan sebagai berikut
  // - 30% dari nilai UTS
  // - 30% dari nilai Tugas
  // - 40% dari nilai UAS
  const nilaiTotal;

  // JANGAN DIMODIFIKASI
  return nilaiTotal;
};

function cetakHasil(total) {
  // TODO: 5. set nilaiTotal dari parameter `total`
  const nilaiTotal;
  
  // TODO: 6. dengan menggunakan relational operator
  // buatlah pernyataan apakah orang ini dianggap lulus atau tidak
  // dilihat dari apakah nilaiTotal lebih besar sama dengan 70
  const apakahLulus;

  // Bagian ini tidak DIMODIFIKASI
  let kalimatHasil;

  // Cara penulisan ini namanya adalah `pernyataan kondisi` (conditional statement)
  // akan dipelajari nanti yah !
  if(apakahLulus) {
    // TODO: 7. tuliskan hasil akhir - berhasil lulus
    // Ganti kalimatHasil jadi [Selamat ! Anda lulus dengan nilai <nilaiTotal>.]

    console.log(kalimatHasil);
  } else {
    // TODO: 8. tuliskan hasil akhir - tidak lulus
    // Ganti kalimatHasil jadi [Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.]
    
    console.log(kalimatHasil);
  }
}

// Main function
// JANGAN DIMODIFIKASI
function main() {
  // Anak 1: Lulus
  let nilaiAnakPertama = kalkulasiNilaiTotal(80,70,70);
  cetakHasil(nilaiAnakPertama);
  // Output: Selamat ! Anda lulus dengan nilai 73.

  // Anak 2: Tidak Lulus
  let nilaiAnakKedua = kalkulasiNilaiTotal(70,60,70);
  cetakHasil(nilaiAnakKedua);
  // Output: Mohon maaf... Anda dinyatakan tidak lulus karena nilai Anda kurang dari 70.
}
// TEST
main();