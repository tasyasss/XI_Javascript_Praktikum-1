// /*
//     FUNGSI
// */


// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Jenis Fungsi
// console.log('>>>>>>>>>>>> JENIS FUNGSI');
//             //fungsi dengan nilai balik            
// console.log('\n\t\t >>> 1. ini fungsi dengan nilai balik');
// //////syntax
// function kali1(a,b){
//     c = a * b;
//     return c;
// }
//     //atau
// function kali2(a,b){
//     return a * b;
// } 


//             //fungsi tanpa nilai balik
// console.log('\n\t\t >>> 2. ini fungsi tanpa nilai balik');
// // //////syntax
// // fuction cetak(x,y){
// //     for(let i = 0; i < y; i++){
// //         console.log(x);
// //     }
// // }


//             //memanggil fungsi
// console.log('\n\t\t >>> 3. ini memanggil fungsi');
// function kali(a,b){
//     return a*b;
// }
// let a = 2.3;
// let b = 2.8;
// let c;
            
// // memanggil fungsi dan menampungnya ke c
// c = kali (a,b);
// console.log(`${a} x ${b} = ${kali(a,b)}`);


// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>PARAMETER FUNGSI
// console.log('\n\n>>>>>>>>>>>> PARAMETER FUNGSI');
//             //pass-by-value
// console.log('\n\t\t >>> 1. ini pass-by-value');
// function tukar(a,b){
//     let c = a;
//     a = b;
//     b = c;
// }
// let x=100, y=200;

// // menampilkan nilai x dan y sebelum ditukar
// console.log('sebelum ditukar');
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);

// // memanggil fungsi tukar()
// tukar(x,y);

// // menampilkan nilai x dan y setelah ditukar
// console.log('\n setelah ditukar');
// console.log(`x: ${x}`);
// console.log(`y: ${y}`);


//             //pass-by-reference
// console.log('\n\t\t >>> 2. ini pass-by-reference');
// function increment(a){
//     a.x += 1;
// }

// // membuat objek
// let obj = new Object();
// // mendefinisikan properti x pada obejk yang telah dibuat
// obj.x = 10;

// // menampilkan nilai obj.x sebelum dinaikkan
// console.log('sebelum dinaikkan nilainya: ');
// console.log(`obj.x: ${obj.x}`);

// // memanggil fungsi increment
// increment(obj);

// // menampilkan nilai obj.x setelah dinaikkan
// console.log('\n setelah dinaikkan nilainya: ');
// console.log(`obj.x: ${obj.x}`);


//             //parameter dg nilai default
// console.log('\n\n\t\t >>> 3. ini parameter nilai default 1');
// function cetak (v, w=3, newLine=true){
//     for(let i=0; i<w; i++){
//         // process.stdout.write(s);
//         // if(newLine)process.stdout.write('\n');
//         console.log(v);
//         if(newLine)console.log('\n');
//     }
// }

// // memanggil fungsi cetak() dengan 1 parameter
// console.log('memanggil fungsi dengan 1 parameter');
// cetak('RPL');

// // memanggil fungsi cetak() dengan 1 parameter
// console.log('memanggil fungsi dengan 2 parameter');
// cetak('RPL', 2);

// // memanggil fungsi cetak() dengan 1 parameter
// console.log('memanggil fungsi dengan 3 parameter');
// cetak('RPL', 1, true);
// cetak('TKJ', 1, false);


//             //variabel length argumen
// console.log('\n\n\t\t >>> 4. ini variabel length argument 1');
// function sum(a){
//     if(!typeof a === 'Array'){
//         console.log('kesalahan: parameter harus bertipe array');
//         return;
//     }

//     let total = 0.0;
//     for(let element of a){
//         total += element;
//     }
//     return total;
// }

// // parameter berupa array dengan dua elemen
// console.log('sum([10,20]) \t: ' + sum([10,20]));

// // parameter berupa array dengan tiga elemen
// console.log('sum([10,20,30]) : ' + sum([10,20,30]));


// console.log('\n\t\t >>>\tini variabel length 2');
// function sum(...a){
//     let total = 0.0;
//     for(let elemen of a){
//         total += elemen;
//     }
//     return total;
// }

// // memanggil fungsi dengan 2 argumen
// console.log('sum(10,20) : ' + sum (10,20));
// // memanggil fungsi dengan 3 argumen
// console.log('sum(10,20,30) : ' + sum (10,20,30));


//             //variabel tanpa nama
// console.log('\n\n\t\t >>> 5. ini fungsi tanpa nama 1');
// var a = 4;
// console.log('nilai a: ' + a);
// var b = 8;
// console.log('nilai b: ' + b);
            
// let tambah = function(a,b){
//     return a + b;
// }
            
// let hasil = tambah(a,b);
// console.log(`${a} + ${b}= ${hasil}`);
            

//             //fungsi callback
//             console.log('\n\n\t\t >>> 6. ini fungsi callback 1');
//             var a = 3;
//             console.log('nilai a: ' + a);
//             var b = 4;
//             console.log('nilai b: ' + b);
            
//             function tambah(a,b){
//                 return a + b;
//             }
//             function kurang(a,b){
//                 return a - b;
//             }
//             function kali(a,b){
//                 return a * b;
//             }
//             function bagi(a,b){
//                 return a / b;
//             }
//             function hitung(a,b,callback){
//                 return callback(a,b);
//             }
            
//             console.log('\n');
//             console.log(`${a} + ${b} = ${hitung(a,b,tambah)}`);
//             console.log(`${a} - ${b} = ${hitung(a,b,kurang)}`);
//             console.log(`${a} * ${b} = ${hitung(a,b,kali)}`);
//             console.log(`${a} / ${b} = ${hitung(a,b,bagi)}`);


//             console.log('\n\t\t >>>\tini fungsi callback 2');
//             var a = 3;
//             console.log('nilai a: ' + a);
//             var b = 4;
//             console.log('nilai b: ' + b);
            
//             function hitung(a,b,callback){
//                 return callback(a,b);
//             }
//             console.log('\n');
//             console.log(`${a} + ${b} = ` + hitung (a,b,function(){return a + b}));
//             console.log(`${a} - ${b} = ` + hitung (a,b,function(){return a - b}));
//             console.log(`${a} * ${b} = ` + hitung (a,b,function(){return a * b}));
//             console.log(`${a} / ${b} = ` + hitung (a,b,function(){return a / b}));
            
            
//             //membuat fungsi didalam fungsi
//             console.log('\n\n\t\t >>> 7. ini fungsi dalam fungsi');

//             console.log('menghitung sisi miring segitiga siku-siku');
//             var a = 3;
//             console.log('nilai alas: ' + a);
//             var b = 4;
//             console.log('nilai tinggi: ' + b);
            
//             function hipotenusa(a,b){
//                 // fungsi lokal
//                 function kuadrat(x){
//                     return x * x;
//                 }
//                 // memanggil fungsi lokal
//                 return c = Math.sqrt(kuadrat(a)+kuadrat(b));
//             }
            
//             var c = hipotenusa(a,b);
//             console.log(`sisi miring = ${c}`);