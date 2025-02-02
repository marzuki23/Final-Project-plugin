"use strict";
function hitungRataRataDanGrade(pemrogramanWeb, pemrogramanKomputer, statistika, sistemBasisData) {
    // Fungsi untuk validasi nilai
    const validasiNilai = (nilai) => {
        return nilai >= 0 && nilai <= 100;
    };
    // Validasi input
    if (!validasiNilai(pemrogramanWeb) ||
        !validasiNilai(pemrogramanKomputer) ||
        !validasiNilai(statistika) ||
        !validasiNilai(sistemBasisData)) {
        console.log("Semua nilai harus antara 0 dan 100!");
        return;
    }
    // Menghitung rata-rata
    const jumlahNilai = pemrogramanWeb + pemrogramanKomputer + statistika + sistemBasisData;
    const rataRata = jumlahNilai / 4;
    // Menentukan grade
    let grade;
    if (rataRata >= 90) {
        grade = 'A';
    }
    else if (rataRata >= 80) {
        grade = 'B';
    }
    else if (rataRata >= 70) {
        grade = 'C';
    }
    else if (rataRata >= 60) {
        grade = 'D';
    }
    else {
        grade = 'E';
    }
    // Output hasil
    console.log(`Rata-rata: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}
// Contoh penggunaan
hitungRataRataDanGrade(85, 90, 78, 92);
