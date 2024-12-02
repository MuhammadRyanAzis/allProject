//** */ contoh kasus function Math //
//function awal(a,b) {
  //  var jumlahA;
    //var jumlahB;
    //var total;

    //jumlahA=a*a*a;
    //jumlahB=b*b*b;
    //total=jumlahA + jumlahB
    //return total;
//}
//console.log(awal(3,6));

//function awal(a,b) {
  //   return a*a*a + b*b*b;
//}
//console.log('refactoring  ' + awal(3,6));

// **fuction math dengan prompt//
//function awal(a,b) {
  //  return a*b;
//}
//var a=parseInt(prompt('Masukkan Angka Pertama'));
//var b=parseInt(prompt('Masukkan Angka kedua'));
//var total=a*b;
//alert(total);

//** refactoring//
//function awal(a,b) {
  //  return a*b;
//}
//var a=parseInt(prompt('Masukkan Angka Pertama'));
//var b=parseInt(prompt('Masukkan Angka kedua'));
//alert(a*b);

// **fuction math tambah kali//
//function tambah(a,b) {
  //  return a+b;
//}
//function kali(a,b) {
  //  return a*b;
//}
//var total;
//total= kali(tambah(3,5),tambah(5,5));
//console.log('hasil fuction tambah kali' + total);

//**function arguments penanganan//
//function tambah() {
    //var hasil = 0;
    //for(var i = 0; i<arguments.length;i++) {
      //  hasil +=arguments[i];
    //}
  //  return hasil;
//}
//var coba=tambah(1,2,3,4);
//console.log(coba);

//**penanganan arguments yang keluar dari fuction//
//function tambah() {
  //  return arguments
//}
//var coba= tambah(1,2,'3','hi',false);
//console.log(coba);