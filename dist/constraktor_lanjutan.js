"use strict";
class hewan3 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const hewan4 = new hewan3("gajah", 12);
console.log(hewan4);
hewan4.nama = "megalodon";
hewan4.kaki = 0;
console.log(hewan4);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class hewan23 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const hewan21 = new hewan23("kucing", 4);
console.log(hewan21);
