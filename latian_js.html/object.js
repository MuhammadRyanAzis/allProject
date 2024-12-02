// membuat object sederhana
//var perkenalan={
   //nama:'Ryan',
   //umur:16,
   //sekolah: 'sekolah',
   //ip : [8,3,5,1,6,9,7],
   //rumah : {
    //jalan : 'serayue28',
  //  no : [28,10,5],
//   },
//}
//console.log(perkenalan);

//membuat object dengan fucntion decalartion
//function awal (nama,ip,jurusan,univ) {
   //var detail= {};
   //detail.nama= nama;
   //detail.ip= ip;
   //detail.jurusan= jurusan;
  // detail.univ= univ;
  // return detail;
//}
//var gas= awal('Ryan','0857467299373639474802874','Teknik Informatika','STIN');
//var gaz= awal('Iyan','9726476288409309290315393','Teknik Cyber','SSN');

//membuat object dengan Constructions
//function Atas (namaa,addres,job,collage) {
   //this.namaa=namaa
   //this.addres=addres
   //this.job=job
  // this.collage=collage
//}
//var tampil= new Atas('yoii','6450862535375874647',"keuangan",'STAN')

// this object (this === window (global))
// dengan fucntion declaration
//function awal () {
  //console.log(this)
  //console.log('haloo');
//}
//awal();
//this mengembalikan object global

//dengan object literal
//var obj={a:50,b:200};
//obj.halo= function() {
   //console.log(this);
  // console.log('haloo')
//}
//obj.halo();
//this mengembalikan object yg bersangkutan

//dengan Construction
//function halo(){
   //console.log(this)
  // console.log('halooo')
//}
///var one =new halo();
//var two= new halo();

// *****PROJECT ANGKOT OBJECT*****//
function Angkot (sopir,trayek,penumpang,kas) {
  this.sopir=sopir;
  this.trayek=trayek;
  this.penumpang=penumpang;
  this.kas=kas;

  this.penumpangnaik= function(namapenumpang,namapenumpang1,namapenumpang2) {
    this.penumpang.push(namapenumpang,namapenumpang1,namapenumpang2)
    return this.penumpang
  }
  this.penumpangturun= function(namapenumpang, bayar) {
    if( this.penumpang.length === 0){
      alert('tidak ada penumpang');
      return false
    }
    for(var i=0;i < this.penumpang.length ;i++){
      if(this.penumpang[i] == namapenumpang) {
        this.penumpang[i]= undefined
        this.kas =+ bayar;
        return this.penumpang;
      }
    }
  } 
}
var angkot1= new Angkot('Ryan',['Batu','Malang'],[],'Rp.');
var angkot2= new Angkot('Azis',['Malang','Batu'],[],'Rp.');
var angkot3= new Angkot('hafid',['Malang','Batu'],[],'Rp.');

