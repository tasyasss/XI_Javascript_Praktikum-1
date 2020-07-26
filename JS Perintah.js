// /*
// 	PERINTAH - SELEKSI KONDISI
// */
// console.log('\t\t\t PERINTAH - SELEKSI KONDISI');


// 			//perintah if
// console.log('\n	>>> 1. ini adalah perintah if');
// var x = 6;
// console.log('Nilai x: ' + x);
// var y = 8;
// console.log('Nilai y: ' + y);
// var z;

// if (y===0) {
// 	console.log('Kesalahan: nilai y tidak boleh 0');
// 	process.exit(1);
// }

// z = x/y;
// console.log(`${x} / ${y} = ${z}`);


// 			//perintah if else
// console.log('\n	>>> 2. ini perintah if else');
// var x = 6;
// console.log('Nilai x: ' + x);
// var y = 8;
// console.log('Nilai y: ' + y);
// var z;

// if (y===0) {
// 	console.log('Kesalahan: nilai y tidak boleh 0');
// 	// process.exit(1);
// } else {
// 	z = x/y;
// 	console.log(`${x} / ${y} = ${z}`);
// }


// 			//perintah switch
// console.log('\n	>>> 3. ini perintah switch 1');
// var ruang = 13;
// console.log('No. ruang: ' + ruang);
// var kelas;

// switch(ruang){
// 	case 1 : kelas = "X RPL 1" ; break;
// 	case 2 : kelas = "X RPL 2" ; break;
// 	case 3 : kelas = "X RPL 3" ; break;
// 	case 4 : kelas = "X RPL 4" ; break;
// 	case 5 : kelas = "X RPL 5" ; break;
// 	case 6 : kelas = "X RPL 6" ; break;
// 	case 7 : kelas = "X RPL 7" ; break;
// 	case 8 : kelas = "X RPL 8" ; break;
// 	case 9 : kelas = "X TKJ 1" ; break;
// 	case 10 : kelas = "X TKJ 2" ; break;
// 	case 11 : kelas = "X TKJ 3" ; break;
// 	case 12 : kelas = "X TKJ 4" ; break;
// 	case 13 : kelas = "X TKJ 5" ; break;
// 	case 14 : kelas = "X TKJ 6" ; break;
// 	default:{
// 		console.log(`Tidak termasuk kelas 1`);
// 	}
// }

// console.log(`Kelas ${kelas} adalah ruang ${ruang}`);


// console.log('\n	>>> ini perintah switch 2');
// var ruang = 13;
// console.log('No. ruang: ' + ruang);
// var kelas;

// 	switch(ruang){
// 		case 1 :
// 		case 2 :
// 		case 3 :
// 		case 4 :
// 		case 5 :
// 		case 6 :
// 		case 7 :
// 		case 8 : kelas = "Rekayasa Perangkat Lunah" ; break;
// 		case 9 :
// 		case 10 :
// 		case 12 :
// 		case 13 :
// 		case 14 : kelas = "Teknik Komputer dan Jaringan" ; break;
// 		default:{
// 			console.log(`tidak termasuk dalam cluster kelas x`);
// 		}
// 	}
// console.log(`Kelas ${kelas} adalah ruangan ${ruang}`);



// 			//perintah while
// console.log('\n	>>> 4. ini perintah while 1');
// let i = 1;
// while (i <= 6){
// 	console.log(`angkatan moklet: ${i}`);
// 	i++;
// }
		
// console.log('\n\t>>>\t   ini perintah while 2');
// let data=[40,38,40,37];
// let jumlah = 0;
// let k = 0;
	
// while (k<data.length){
// 	jumlah += data[k];
// 	k++;
// }		
// console.log(`Jumlah seluruh siswa: ${jumlah}`);


// 			//perintah do while
// //perintah do while
// console.log('\n	>>> 5. ini perintah do while 1');
// let a = 0;
// console.log('nilai : ' + a);
		
// while(a < 5){
// 	console.log('hasil perulangan: ' + a);
// 	a++;
// }

	
// console.log('\n	>>> ini perintah do while 2');
// let h = 2;
// do {
// 	console.log(h);
// 	h++;
// } while (h < 5);
		
		
// console.log('\n	>>> ini perintah do while 3');
// let info = [10,20,30,40,50,60];
// let total;
// let q;
		
// total = 0;
// q = 0;
// do {
// 	total += info[q];
// 	q++;
// } while (q < info.length);
	
// console.log(`jumlah info: ${total}`);
		


// 			//perintah for
// console.log('\n	>>> 6. ini perintah for');
// let data = [20,100,10,109];
// let total;
		
// total = 0;
// let q;
// for (q = 0; q < data.length; q++){
// 	total += data[q];
// }		
// console.log(`jumlah info: ${total}`);


// // 			//pengulangan bersarang
// console.log('\n	>>> 7. ini pengulangan bersarang');
// let siswa = [
// 	['-> 1215', '   Adi', '   Malang'],
// 	['-> 1216', '   Budi', '   Tulungagung'],
// 	['-> 1217', '   Doni', '   Tuban'],
// ];

// for (let i = 0; i < siswa.length; i++) {
// 	for (let j = 0; j < siswa[i].length; j++) {
//         console.log(siswa[i][j].toString());
// 		// process.stdout.write(siswa[i][j].toString());
// 		if (j<siswa[i].length-1) {
//             // process.stdout.write('\t');
// 		}
// 	}
// 	console.log();
// }


// 			//perintah for in
// console.log('\n	>>> 8. ini perintah for in 1');
// let data = [40,40,40,38,42,41];
			
// for (let indeks in data){
// 	console.log(`data[${indeks}] = ${data[indeks]}`);
// }
			
// console.log('\n	>>> ini perintah for in 2'); 
// let data = {'rpl1':'40','rpl2':'38','rpl3':'41'};
			
// for (let kunci in data){
// 	console.log(`${kunci} \t = ${data[kunci]}`);
// }


// 			//perintah for off
// console.log('\n	>>> 9. ini perintah for of');
// let data = [12,14,16,18,20,22];

// for(let elemen of data){
// 	console.log(elemen);
// }