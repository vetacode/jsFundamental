function cobaFungsi() {
  let umur = 45;
  console.log('Nama:', nama); //variable luar (global) dapat dikses dari dalam/local function
  console.log('Umur:', umur);

  nama = 'Bob'; //variable lokal (di dalam function) akan mengoverride variable luar (global) dengan nama yang sama (karena tidak ada deklarasi let/var/const di depan nama)
  console.log('Ganti Nama:', nama); //variable luar hanya digunakan apabila tidak ada variable di local
}

let nama = 'Mosley'; //variable luar (global) hanya digunakan apabila tidak ada variable di local

// console.log(umur); //error, variable hanya dapat diakses local di dalam scope function
cobaFungsi();

//inserting parameters & deafault value
function namaMember(nama, noReg = 0) {
  console.log('Nama Member:' + nama, 'Nomor Registrasi:' + noReg);
}

namaMember(nama); //Nama Member: Bob (Bukan Mosley, walaupun Global variable) //ketika function ini di invoke, maka function akan menerima COPY data parameter yang di passing

//nullish coalescing operator (??)
function showCount(count) {
  // if count is undefined or null, show "unknown"
  alert(count ?? 'unknown');
}

showCount(0); // 0 //if it was using || operator, it would show 'unknown' because 0 is a falsy value
showCount(null); // unknown
showCount(); // unknown
