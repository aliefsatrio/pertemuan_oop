class hewan3 {
    nama!: string;
    kaki!: number;

    constructor(nama: string, kaki: number){
        this.nama = nama;
        this.kaki = kaki;
    }
}

const hewan4 = new hewan3("gajah", 12);
console.log(hewan4);
hewan4.nama = "megalodon"
hewan4.kaki = 0
console.log(hewan4);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class hewan23 {
    constructor(public nama: string, public kaki: number){}
}
const hewan21 = new hewan23("kucing", 4)
console.log(hewan21);
