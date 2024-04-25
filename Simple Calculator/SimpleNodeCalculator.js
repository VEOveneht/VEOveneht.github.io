const readline = require('readline');
const rl = readline.Interface(
    process.stdin,
    process.stdout
)

let opsi, angka1, angka2, total, lanjut;

function kalkulator() {
    rl.question('Pertama: ', (input1) => {
        rl.question('Kedua: ', (input2) => {
            rl.question('opsi: ', (inputOpsi) => {
                angka1 = parseFloat(input1);
                angka2 = parseFloat(input2);
                opsi = inputOpsi;

                switch (opsi) {
                    case '+':
                        total = angka1 + angka2
                        console.log(`Hasil: ${total}`);
                        break;
                    case '-':
                        total = angka1 - angka2
                        console.log(`Hasil: ${total}`);
                        break;
                    case '*':
                        total = angka1 * angka2
                        console.log(`Hasil: ${total}`);
                        break;
                    case '/':
                        total = angka1 / angka2
                        if (angka1 || angka2 == 0) {
                            console.log('Tidak bisa dibagi 0')
                        } else {
                            console.log(`Hasil: ${total}`);
                        }
                        break;
                    default:
                        console.log('Masukkan Input dengan Benar!');
                }
                rl.question('lanjut? (y/n): ', (jawab) => {
                    if (jawab.toLowerCase == 'y') {
                        kalkulator();
                    } else {
                        console.log('---------------- Kalkulator Close :) ----------------');
                        rl.close()
                    }
                })
            })
        })
    })
}

console.log('---------------- Kalkulator Sederhana ----------------');
kalkulator();