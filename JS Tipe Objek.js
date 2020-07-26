// /*
//     TIPE OBJEK
// */


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>TIPE OBJEK
console.log('>>>>>>>>>>>> TIPE OBJEK');

//membuat tipe objek           
console.log('\n\t\t >>> 1. ini membuat tipe objek');
////////////////awal membuat tipe objek
function Segitiga(a,t){
    this.alas = a;
    this. tinggi = t;
}
            
Segitiga.prototype.luas = function(){
    return this.alas * this.tinggi / 2;
}
////////////////akhir membuat tipe objek
let obj = new Segitiga(4,5);
console.log(`obj.luas()\t: ${obj.luas()}`);


            //mendefinisikan properti
console.log('\n\t\t >>> 2. ini mendefinisikan properti');
function Segitiga(a,t){
    this.alas = a;
    this.tinggi = t;
}


            //mendefinisikan metode
console.log('\n\t\t >>> 3. ini mendefinisikan metode');
Segitiga.prototype.luas = function(){
    return this.alas * this.tinggi / 2;
}


            // membuat dan menggunakan objek
console.log('\n\t\t >>> 4. ini membuat dan menggunakan objek');
// membuat tipe objek
function Segitiga(a,t){
    this.alas = a;
    this.tinggi = t;
}

Segitiga.prototype.luas = function(){
    return this.alas * this.tinggi / 2;
}

// membuat objek dari tipe Segitiga
let obj = new Segitiga(4,5);

console.log('sebelum nilai properti diubah: ');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);

// mengubah nilai properti alas dan tinggi
obj.alas = 10;
obj.tinggi = 12;

console.log('sesudah nilai properti diubah: ');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);


            // sintaks alternatif untuk membuat objek
console.log('\n\t\t >>> 5. ini sintaks alter untuk membuat objek');
//membuat objek segitiga
let obj = {
    alas : 4,
    tinggi : 5,
    luas : function(){
        return this.alas * this.tinggi / 2;
    }
};

console.log('sebelum nilai properti diubah');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);

// mengubah nilai properti alas dan tinggi
obj.alas = 10;
obj.tinggi = 12;

console.log('sesudah nilai properti diubah');
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);


            // kelas
console.log('\n\t\t >>> 6. ini kelas 1');
class NamaKelas{
    // konstruktor
    constructor(DaftarParameter){

    }
    // daftar metode
    NameMetode1(daftarParameter){

    }
    NameMetode2(daftarParameter){
        
    }
}

console.log('\n\t\t >>>\tini kelas 2');
class Segitiga{
    // konstruktor
    constructor(a,t){
        // mendefinisikan properti
        this.alas = a;
        this.tinggi = t;
    }
    // daftar metode
    luas(){
        return this.alas * this.tinggi / 2;
    }
}


// membuat objek
console.log('\n\t\t >>> 7. ini membuat objek');
class Segitiga{
    // konstruktor
    constructor(a,t){
        // mendefinisikan properti
        this.alas = a;
        this.tinggi = t;
    }
    // daftar metode
    luas(){
        return this.alas * this.tinggi / 2;
    }
}
            
var a = 3;
console.log('nilai alas\t: ' + a);
var t = 4;
console.log('nilai tinggi: ' + t);
            
// membuat objek dari kelas Segitiga
let obj = new Segitiga(a,t);
            
console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);
            

            // metode statis 
console.log('\n\t\t >>> 8. ini metode statis 1');
class Segitiga{
    // konstruktor
    constructor(a,t){
        // mendefinisikan properti
        this.alas = a;
        this.tinggi = t;
    }
    // daftar metode
    luas(){
        return this.alas * this.tinggi / 2;
    }

//////////metode statis
    static buatObjek(a,t){
        return new Segitiga (a,t);
    }
}//////////metode statis

var a = 3;
console.log('nilai alas\t: ' + a);
var t = 4;
console.log('nilai tinggi: ' + t);

//////////memanggil metode statis
let obj = Segitiga.buatObjek(a,t);
//////////memanggil metode statis

console.log(`obj.alas\t: ${obj.alas}`);
console.log(`obj.tinggi\t: ${obj.tinggi}`);
console.log(`obj.luas()\t: ${obj.luas()}`);


console.log('\n\t\t >>>    ini metode statis 2');
var a = 3;
console.log('nilai alas\t: ' + a);
var b = 4;
console.log('nilai tinggi: ' + b);

class Aritmetika{
    static tambah(a,b){
        return a + b;
    }
}
// memanggil metode status
console.log(`${a} + ${b} = ${Aritmetika.tambah(a,b)}`);


            //pewarisan
console.log('\n\t\t >>> 9. ini pewarisan');
var a = 3;
console.log('nilai alas\t: ' + a);
var t = 4;
console.log('nilai tinggi: ' + t);

class Segitiga{
    constructor(a,t) {
        this.alas = a;
        this.tinggi = t;
    }
    luas(){
        return this.alas * this.tinggi / 2;
    }
    cetakPropert(){
        console.log(`alas\t: ${this.alas}`);
        console.log(`tinggi\t: ${this.tinggi}`);
    }
}

class SegitigaWarna extends Segitiga{
    constructor(a,t,w){
        //memanggil konstruktor kelas segitiga
        super(a,t);
        //mendefinisikan properti baru
        this.warna = w;
    }

    cetakPropert(){
        //memanggil segitiga.cetahPropert
        super.cetakPropert();
        console.log(`warna\t: ${this.warna}`);
    }
}

//membuat objek dari kelas SegitigaWarna
let obj = new SegitigaWarna(a,t,'merah');
obj.cetakPropert;

//memanggil metode luas
console.log(`luas()\t\t: ${obj.luas()}`);


            //penanganan eksepsi
            console.log('\n\t\t >>> 9. ini penanganan eksepsi');
            //kelas ekspresi
            class DivisionByZeroError extends Error {
                constructor(msg){
                    super(msg);
                    this.name = this.constructor.name;
                    this.message = msg;
                }
                getMessage(){
                    return this.message;
                }
            }
            var a = 2;
            console.log('nilai a: ' + a);
            var b = 0;
            console.log('nilai b: ' + b);
            
            /////////syntax eksepsi
            try{
                if(b==0){
                    console.log('nilai B tidak boleh 0');
                } while (b!=0){
                    let c = a / b;
                    console.log(`\n${a} / ${b} = ${c}`);
                }
            } catch (e){
                console.log(e.getMessage());
            }
            /////////syntax eksepsi
