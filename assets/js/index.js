let a1, a2, a3, i;

function rekurs(angka, pangkat) {
	if (pangkat == 0) {
		return 1;
	} else {
		return angka * rekurs(angka, pangkat - 1);
	}
}

a1 = prompt(`Siapa Namamu:`);
a2 = prompt(`Berapa Umurmu:`);
a3 = prompt(`Cewek atau Cowok:`);

let text = document.getElementById("text");

if (a1 !== null && a2 !== null && a3 !== null) {
	text.textContent = a1 + a2 + a3;
} else {
	if (a1 === null) {
		text.innerHTML = "KAMU KONTOL";
	}
	if (a2 === null) {
		text.innerHTML = "KONTOL 1";
	}
	if (a3 === null) {
		text.innerHTML = "Wajah lu KEK MEMEK";
	}
}

for (i = 1; i <= 4; i++) {
	console.log(`${rekurs(a1, i)}, ${rekurs(a2, i)}, ${rekurs(a3, i)}`);
}
