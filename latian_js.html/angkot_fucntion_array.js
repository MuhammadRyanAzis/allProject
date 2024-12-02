var penumpang=[];
var tambahpenumpang= function(namapenumpang, penumpang) { 
   if(penumpang.length == 0) {
     penumpang.push(namapenumpang);
     return penumpang;
   } else{
    for ( var i=0; i < penumpang.length;i++) {
     if(penumpang[i] == undefined){
        penumpang[i] = namapenumpang;
        return penumpang;   
    }
    else if(penumpang[i] == namapenumpang) {
        console.log(namapenumpang + (' Sudah Ada'));
    }
    else if (i = penumpang.length -1) {
        penumpang.push(namapenumpang);
        return penumpang;

    }
     }
   }
}
var hapuspenumpang=function(namapenumpang,penumpang){
if(penumpang.length == 0) {
  console.log('angkot sedang kosong')
  return penumpang
} else {
  for ( var i=0;i <penumpang.length;i++ ){
    if(namapenumpang[i] == namapenumpang) {
     namapenumpang= undefined;    
    } else if ( i == penumpang.length -1){
      console.log(namapenumpang + 'nama ini tidak ada di angkot')
      return penumpang;
    }
  }
}
return penumpang;
}
 










































