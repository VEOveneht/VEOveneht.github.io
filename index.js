const log = console.log;

function profile() {
	log("Telah di Klik");
}

function tugas() {
	log("Telah di Klik");
}

function kontak() {
	log("Telah di Klik");
}

// Kalkulator
function calculate() {
	const num1 = parseFloat(document.getElementsByName("num1")[0].value);
	const operator = document.getElementsByName("operator")[0].value;
	const num2 = parseFloat(document.getElementsByName("num2")[0].value);
	let hasil;

	switch (operator) {
		case "tambah":
			hasil = num1 + num2;
			break;
		case "kurang":
			hasil = num1 - num2;
			break;
		case "kali":
			hasil = num1 * num2;
			break;
		case "bagi":
			if (num2 !== 0) {
				hasil = num1 / num2;
			} else {
				hasil = 'Error: Tidak bisa dibagi nol "0"';
			}
			break;
		default:
			hasil = "Operasi tidak berjalan, Masukkan Angka yang anda inginkan";
			break;
	}

	document.getElementById("hasil").innerText = "Hasil: " + hasil;
}

// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// let nama, usia;

// rl.question(`Nama Kamu: `, (inputNama) => {
// 	nama = inputNama;
// 	log(`${nama} Jeleki`);
// 	rl.question(`Usia Kamu: `, (inputUsia) => {
// 		usia = inputUsia;
// 		if (usia > 20) {
// 			log(`USIA KAMU ${usia} TAHUN!? DASAR TUA! `);
// 		} else if (usia < 20) {
// 			log(`${usia} Segitu mah Masih Bocil`);
// 		}
// 		rl.close();
// 	});
// });
