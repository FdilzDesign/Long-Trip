//contoh atau soal number dlm js yg simple 
const apel = 5000;
const pisang = 10000;
const diskon = 10000;
const totalApel = 3;
const totalPisang = 2;

console.log(apel * 3 + pisang * 2 - diskon)

//cara floating point numebr yg lu pikirkan sendiri
const apel = 5000;
const pisang = 10000;
const diskon = 0.1;
const hargaAsli = 35000 - 35000 * 0.1;

//cara lain const floating point harga asli bisa lu hitung kek gini
const hargaAsli = (apel * 3) + (pisang * 2);
const harga = hargaAsli * (1 - diskon);

//atau juga kek gini
const harga = hargaAsli - hargaAsli * diskon;

console.log(harga);