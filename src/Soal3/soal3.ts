function cetakSegitigaSikuKanan(tinggi: number) {
    for (let i = 1; i <= tinggi; i++) {
      let bintangDenganSpasi = Array(i).fill('*').join(' ');
      console.log(' '.repeat(2 * (tinggi - i)) + bintangDenganSpasi);
    }
  }
  
  // Contoh penggunaan
  cetakSegitigaSikuKanan(10);