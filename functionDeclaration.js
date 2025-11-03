let nama = 'Mosley'; //variable luar (global) hanya digunakan apabila tidak ada variable di local

function cobaFungsi() {
  let umur = 45;
  console.log('Nama:', nama); //variable luar (global) dapat dikses dari dalam/local function
  console.log('Umur:', umur);

  nama = 'Bob';
  console.log('Ganti Nama:', nama); //variable luar hanya digunakan apabila tidak ada variable di local
}

// console.log(angka); //error, variable hanya dapat diakses local di dalam scope function
cobaFungsi();
