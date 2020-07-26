// /*
// 	OPERATOR
// */

// console.log('\n	>>>ini JS Operator.js');

// 			// operator penugasan
// console.log('\n	>>>1. ini operator penugasan');
// var k = 1;
// console.log('Nilai k = ' + k);
// k += 1; //x= x+1
// console.log('Setelah ditambah 1 = ' + k);

// k -= 1; //x= x-1
// console.log('Nilai setelah dikurangi 1 = ' + k);

// k /= 2; //x= x/2
// console.log('Nilai setelah dibagi 2 = ' + k);



// 			// operator aritmatika
// console.log('\n	>>>2. ini operator arimetika');
// var a = 5;
// console.log('Nilai a: ' + a);
// var b = 2;
// console.log('Nilai b: ' + b);

// console.log(`${a} + ${b} = ${a+b}`);
// console.log(`${a} - ${b} = ${a-b}`);
// console.log(`${a} * ${b} = ${a*b}`);
// console.log(`${a} / ${b} = ${a/b}`);
// console.log(`${a} % ${b} = ${a%b}`);
// console.log(`${a} ** ${b} = ${a**b}`);


// 			//nilai bulat hasil pembagian
// console.log('\n	>>>ini nilai bulat hasil pembagian');
// var a = 24;
// console.log('Nilai a: ' + a);
// var b = 3;
// console.log('Nilai b: ' + b);

// function PembagianBulat(a,b) {
// 	var c = a/b;

// 	if (c>=0) {
// 		return Math.floor(c);
// 	} else {
// 		return Math.ceil(c);
// 	}
// }
// console.log(`${a} / ${b} = ${PembagianBulat(a,b)}`);


// 			//operator ++
// console.log('\n	>>>3. ini operator increment ++');
// var x;

// console.log('Pre increment');
// x = 27;
// console.log(`x \t\t: ${x}`);
// console.log(`++x \t: ${++x}`);
// console.log(`x \t\t: ${x}`);

// console.log('\nPost increment');
// x = 27;
// console.log(`x \t\t: ${x}`);
// console.log(`x++ \t: ${x++}`);
// console.log(`x \t\t: ${x}`);


// 			//operator --
// console.log('\n	>>>4. ini operator decrement --');
// var y;

// console.log('Pre increment');
// x = 27;
// console.log(`x \t\t: ${x}`);
// console.log(`--x \t: ${--x}`);
// console.log(`x \t\t: ${x}`);

// console.log('\nPost increment');
// x = 27;
// console.log(`x \t\t: ${x}`);
// console.log(`x-- \t: ${x--}`);
// console.log(`x \t\t: ${x}`);


// 			//operator relasional
// console.log('\n	>>>5. ini operator relasional');
// var a = 10, b = 20;
// console.log(`a \t: ${a}`);
// console.log(`a \t: ${b}`);
// console.log(`a==b \t: ${(a==b)}`);
// console.log(`a!=b \t: ${(a!=b)}`);
// console.log(`a<b \t: ${(a<b)}`);
// console.log(`a>b \t: ${(a>b)}`);
// console.log(`a<=b \t: ${(a<=b)}`);
// console.log(`a>=b \t: ${(a>=b)}`);
			
// // operator relasional dalam blok pemilihan
// if (a<b) {
// 	console.log(`a lebih kecil dari b`);
// }
			
// // operator relasional dalam blok perulangan
// console.log('operator relasional dalam blok perulangan');
// var i = a;
// while(i<=b){
// 	console.log(`${i}`);
// 	// process.stdout.write(`${i}`); //menampilkan data ke layar
// 	//tanpa disertai karakter baris baru
// 	//console.log(s) --> processs.stdout.write(s+'\n')
// 	i += 2;
// }


// 			//operator bitwise
// console.log('\n	>>>7. ini operator bitwise');
// var a = 5, b = 28;

// console.log(`a \t\t: ${a}`);
// console.log(`b \t\t: ${(b)}`);
// console.log(`a & b \t: ${(a & b)}`);
// console.log(`a | b \t: ${(a | b)}`);
// console.log(`a ^ b \t: ${(a ^ b)}`);
// console.log(`~a \t\t: ${(~a)}`);

// console.log(`a \t\t: ${(a)}`);
// console.log(`a>>1 \t: ${(a >> 1)}`);
// console.log(`a>>2 \t: ${(a >> 2)}`);
// console.log(`a<<1 \t: ${(a << 1)}`);
// console.log(`a<<2 \t: ${(a << 2)}`);


// 			//operator string
// console.log('\n	>>8. ini operator string');
// var data = ["apel", "durian", "jeruk"];
			
// var s='[';
// for (let i = 0; i<data.length; i++) {
// 	s += '\''+ data[i] +'\'';
// 	if (i < data.length-1) s += ',';
// }
// s += ']';
// console.log('s: ' + s);


// 			//operator kondisional
// console.log('\n	>>>9. ini operator kondisional');
// var kehadiran = 11;
// console.log('jumlah kehadiran: ' + kehadiran);

// predikat = (kehadiran > 10) ? "naik" : "tidak naik";

// console.log(predikat);


// 			//operator instanceof
// console.log('\n	>>>ini operator instanceof');
// var a = 2020;
// var b = new String("RPL");
// var pilih = new Boolean;
// var mapel = ["siskom", "kjd", "iot", "siskomdig"];

// console.log(typeof mapel);
// console.log(typeof a);
// console.log(typeof b);
// console.log(0 in mapel);
// console.log(5 in mapel);
// console.log(b instanceof String);
// console.log(a instanceof Number);
// console.log(pilih instanceof Boolean);