const username = [
    "yandy",
    "dimas",
    "Mita",
    "sule",
];


if (username.includes("sule")) {
    console.log("Ada sule")
} else if (username.includes("SULE")) {
    console.log("ada tapi huruf besar");
} else if (username.includes("Sule")) 
    console.log("ada tapi huruf yg depan kapital");
  else {
    console.log("gada ada su")
};

console.log("nama ke 1 adalah?" + username[0]);

//fyi urutan angka coding adalah brawal dri 0 bukan 1
//bisa pake username.include buat nyari nama apakah ada di variable
//bisa pake [0,1,2,3](bracket notation namany) buat nemuin nama siapa di angka segitu