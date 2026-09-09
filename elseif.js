//elseif bsa dipake jika if terlebih dahulu ada
//else tidak bisa ditaruh ditengah else if harus diakhiran
//note:jgn lupa pakai ilmu sebelum"nya

const nilai = 5;

if (nilai < 10) {
    console.log('satuan')
} else if (nilai < 100) {
    console.log('Puluhan')
} else if (nilai < 1000) {
    console.log('Ratusan')
} else {
    console.log('anomaly')
}