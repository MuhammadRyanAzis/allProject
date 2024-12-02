 var our= 'jumat';
var hour= "kamis";
var mix= ['senin','selasa','rabu',hour,[our,'sabtu','minggu']];

console.log(mix[4][0]);

var arr = ['a',true,1]
console.log(arr)

// menampilkan isi array
var arr=['senin','selasa','rabu','kamis'];
console.log['Tampilan Semua array  ' + arr];

// tampilan jika tidak terdaftar
var arr = [];
arr [0]= 'senin';
arr [1]= 'selasa';
arr [2]= 'rabu';
arr [4]= 'kamis';
console.log(arr);

// menghapus isi array
var arr=['senin','selasa','rabu','kamis'];
arr[1]=undefined
console.log(arr);

//simpel penulisan arr untuk banyak
var arr=['senin','selasa','rabu','kamis'];

for ( i=0; i<arr.length;i++) {
    console.log('Pada Hari-  ' + arr)
};

// method join pada array
var arr=['senin','selasa','rabu','kamis'];
console.log(arr.join( ' Dan '));

// method push (menambahkan kalimat di belakang array)
var arr=['senin','selasa','rabu','kamis'];
arr.push('jumat');
console.log('Method push  ' +arr);

// method pop (menghilangkan tulisan yg terakhir)
var arr=['senin','selasa','rabu','kamis'];
arr.pop()
console.log('Method pop  ' +arr);

//method unshift (menambahkan kalimat diawal )
var arr=['senin','selasa','rabu','kamis'];
arr.unshift('minggu');
console.log('Method unshift  ' +arr)

//method shift (untuk menghilangkan kalimat diawal)
var arr=['senin','selasa','rabu','kamis'];
arr.shift();
console.log('Method shift  ' +arr);

//method splice (menambahkan kalimat penyambung )
var arr=['senin','selasa','rabu','kamis'];
arr.splice(3,0,'jumat');
console.log('Method splice  ' +arr);

//method slice (menghapus index yg ada didalam array)
var arr=['senin','selasa','rabu','kamis','jumat'];
var arr2=arr.slice(0,3);
console.log('Method slice  ' + arr)
console.log('Method slice  ' + arr2);

//method ForEach (sama dengan FOR di fucntion)
var nama=['a','b','c','d','e',]
var angka=['1','2','3','4','5']

nama.forEach(function(e, i) {
  console.log("(Method ForEach)" +' Abjad Ke -' + (i+1) + ' Adalah :' + e);
})

//method map (sama dengan ForEach)
var angka=['1','2','3','4','5','6']
var angka2= angka.map(function(e) {
    return e*5;
})
console.log('method map ' + angka2)

//method sort (merapikan index)
var angka=['1','5','2','8','9','5']
angka.sort()
console.log('method sort ' + angka); 


//method sort (jika angka lebih dari 1 digit)
var angka=['1','5','2','30','9','10','8']
angka.sort(function(a,b){
    return a-b;
})
console.log('method sort ' + angka); 

//method filters (untuk mencari sebuah nilai)
var angka=['1','5','2','30','9','10','8']
var angka2=angka.filter(function(e) {
    return e > 5;
})
console.log('method filter ' + angka2)

//method find (untuk mencari satu index)
var angka=['1','5','2','30','9','10','8']
var angka2=angka.find(function(e) {
    return e < 5;
})
console.log('method find ' +angka2)