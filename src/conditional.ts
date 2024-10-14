let num: number = 5

if (num > 6){
    console.log("kondisi pertama")
}
else if (num > 3) {
    console.log("kondisi ke dua")
}
else{
    console.log('kondisi ke tiga')
}

//switch case

let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "senin"
        break;
    case 2:
        dayName = "selasa"
        break;
    case 3:
        dayName = "rabu"
        break;
    case 4:
        dayName = "kamis"
        break;
    case 5:
        dayName = "jumat"
        break;
    case 6:
        dayName = "saptu"
        break;
    case 7:
        dayName = "minggu"
        break;
    default:
        dayName = "hari ini tidak valid"
}
console.log(`hari ke ${day}: ${dayName}`)