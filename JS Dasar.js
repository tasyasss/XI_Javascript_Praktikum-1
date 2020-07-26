// /*
// 	komentar
// */
// // console.log("SMK Telkom Malang");
// console.log('	>>>ini komentar');
// console.log("RPL_TKJ");
// console.log("Rekayasa Perangkat Lunak");
// // console.log('Jurusan Multimedia');
// console.log('Teknik Komputer dan Jaringan');
// console.log('');



// /*
// 	variabel
// */
// // variabel var
// console.log('	>>>ini variabel Var');
// var globalVar = 100;

// function f() {
// 	var localVar = 200;

// 	console.log('->Memanggil variabel di dalam fungsi');
// 	console.log('globalVar:' + globalVar);
// 	console.log('localVar:' + localVar);
// }

// f();

// console.log('->Memanggil variabel di luar fungsi');
// console.log('globalVar:' + globalVar);


// // variabel let
// console.log('\n	>>>ini variabel Let dengan variabel i sebagai let');
// for (let i = 0; i < 3; i++) {
// 	console.log('Nilai i:' + i);
// }
// console.log('Di luar blok pengulangan, nilai i adalah ' + i);


// // variabel tanpa kunci
// console.log('\n	>>>ini variabel tanpa kunci');
// for (var i = 0; i < 3; i++) {
// 	console.log('Nilai i:' + i);
// }

// console.log('Di luar blok pengulangan, nilai i adalah ' + i);



// /*
// 	konstanta
// */
// console.log('\n	>>>ini konstanta');
// const phi = 3.14;
// let r = 10;

// console.log('Keliling lingkaran:\n' + (2 * phi * r));



// /*
// 	tipe data
// */
// // tipe primitif
// console.log('\n	>>>ini tipe data tipe primitif 1');
// var a = 9;
// console.log(typeof a);

// var b = new Number(9);
// console.log(typeof b);

// console.log('\n	>>>ini tipe data tipe primitif 2');
// var a = 9;
// console.log(typeof a);

// var b = new Number(9);
// console.log(typeof b);
// console.log(b.toString());


// // tipe Number
// console.log('\n	>>>ini tipe data number');
// var desimal = 18;
// var biner = 0b1010;
// var oktal = 0o25;
// var heksa = 0x24;

// console.log(desimal);
// console.log(biner);
// console.log(oktal);
// console.log(heksa);


// // tipe String
// console.log('\n	>>>ini tipe data string 1');
// 	var a=1, b=2, c=3;
// console.log(a + "+" + b + "=" + c);
// console.log('interpolasi variabel:');
// console.log(`${a} + ${b} = ${c}`);

// console.log('\n	>>>ini tipe data string 2');
// var rpl = 'Rekayasa \n' +
// 'Perangkat \n';
// 'Lunak \n';
// var tkj = 
// `Teknik
// Komputer
// dan Jaringan`;
// console.log(rpl);
// console.log('\n' + tkj);


// // tipe boolean
// console.log('\n	>>>ini tipe data boolean');
// var moklet = true;
// 	while (!moklet){
// 		moklet = false;
// 	}
// console.log(moklet);



// /*
// 	array dalam javascript
// */
// console.log('\n	>>>ini adalah array dalam javascript');
// // array beindeks
// console.log('->array beindeks');
// var organ = ["OSIS", "MPK", "PUSTEL", "Dewan Ambalan"];

// // akses elemen menggunakan indeks 0,1,2,...
// console.log(organ[0]);
// console.log(organ[1]);
// console.log(organ[2]);
// console.log("\n");

// // array asossiatif
// console.log('->array asossiatif');
// var osis = {'ketua': 'a', 'wakil': 'b', 'sekretaris': 'c'};

// console.log(osis['ketua']);
// console.log(osis['wakil']);



// /*
// 	jenis array
// */
// // array beindeks
// console.log('\n	>>>jenis array berindeks');
// let n = 6;
// let a = [20,20,10,10,20,20];
// let total = 0.0;

// for(let i=0; i<n; i++){
// 	a[i];
// 	total += a[i];
// }
// let rata = total/a.length;

// console.log(`\n isi array a\t: [${a}]`);
// console.log(`\n total data\t\t: [${total}]`);
// console.log(`\n rata-rata\t\t: [${rata}]`);

// // array asossiatif
// console.log('\n	>>>jenis array asossiatif');
// let x = new Array();
// x['rpl']='Rekayasa Perangkat Lunak';
// x['tkj']='Teknik Komputer dan Jaringan';

// for(key in x){
// 	console.log(key.toUpperCase() + '\t=' + x[key]);
// }



// /*
// 	array dua dimensi
// */
// console.log('\n	>>>array dua dimensi');
// let siswa = [
// 	['1', 'Adi', 'Malang'],
// 	['2', 'Budi', 'Sidoarjo'],
// 	['3', 'Dea', 'Surabaya']
// ];

// console.log('No \t Nama Siswa \t Asal');
// console.log('--- \t ------ \t --- \t');
// for (let i = 0; i < siswa.length; i++) {
// 	for (let j = 0; j < siswa[i].length; j++) {
// 		// process.stdout.write(siswa[i][j].toString());
// 		console.log(siswa[i][j].toString());
// 		if (j<siswa[i].length-1) {
// 			// process.stdout.write(' \t ');
// 			// console.log(' \t ');
// 		}
// 	}
// 	console.log();
// }


