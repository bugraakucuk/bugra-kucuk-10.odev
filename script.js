// ****************** random şifre *******************
let karakterler =  ["a", "b", "c", "ç", "d", "e", "f", "g", "ğ", "h", "ı ", "i", "j", "k", "l", "m", "n", "o", "ö", "p", "r", "s", "ş", "t", "u", "ü", "v", "y", "z", "q", "w", "x", "A", "B", "C", "Ç ", "D", "E", "F", "G", "Ğ", "H", "I", "I", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "Ş", "T", "U", "Ü", "V", "Y", "Z", "Q ", "W", "X", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "!", "'", "^", "+", "% ", "&", "/", "(", ")", "=", "?", "-", "_", "*", ",", ";", "`", "{", "}", "[", "]", "@", "|", "<", ">", ".", ":", "é", "$","# "," £ "," € "," ₺ "]
let uzunluk = parseInt(prompt("Şifre uzunluğunu giriniz:"), 10);
function uret() {
    let sonuc = '';
    for (let i = 0; i < uzunluk; i++) {
        let karakter = karakterler[Math.floor(Math.random() * karakterler.length)];
        if (sonuc.indexOf(karakter) === -1) {
            sonuc += karakter;
        } else {
            i--;
        }
    }
    return sonuc;
}

let sonuc = uret();
console.log("Şifre: " + sonuc);

// ****************** random şifre sonu *******************

// ****************** random HEX code renk oluşturma *******************

// function oluşturRenkKodu() {
//     let karakterler = ["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
//     let renkKodu = ""
//     for (let i = 0; i < 6; i++) {
//         renkKodu += karakterler[Math.floor(Math.random() * karakterler.length)]
//     }
//     return renkKodu;
// }
// let karakterler = oluşturRenkKodu();
// console.log(karakterler)

// ****************** random HEX code renk oluşturma sonu *******************

