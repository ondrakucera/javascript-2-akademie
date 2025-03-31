import { lide } from "./lide.js";
import { zamestnanci, organizacniJednotky } from "./zamestnanci.js";

// Funkce vracející řetězec s informacemi o jednom člověku pro použití v nečíslovaném seznamu.
const vytvorOdrazkuProCloveka = (clovek) =>
	`<li>${clovek.jmeno} ${clovek.prijmeni} (věk: ${clovek.vek}, mzda: ${clovek.mzda})</li>`;

// Funkce vracející řetězec s informacemi o jednom člověku pro použití v tabulce.
const vytvorRadekProCloveka = (clovek) =>
	`<tr><td>${clovek.jmeno} ${clovek.prijmeni}</td><td>${clovek.vek}</td><td>${clovek.mzda}</td></tr>`;

// Funkce pro navýšení mzdy o 5 % všem lidem v poli lidí.
const pridejVsem = (poleLidi) => {
	poleLidi.forEach((clovek) => {
		clovek.mzda = Math.round(clovek.mzda * 1.05);
	});
};

// Funkce pro navýšení mzdy o 10 % lidem se mzdou menší než 50000 v poli lidí.
const pridejMeneVydelavajicim = (poleLidi) => {
	poleLidi.forEach((clovek) => {
		if (clovek.mzda < 50000) {
			clovek.mzda = Math.round(clovek.mzda * 1.1);
		}
	});
};

// --------------------------------------------------

// Vypsání informací o všech lidech do nečíslovaného seznamu.
const informaceOLidechSeznam = document.querySelector("#informace-o-lidech-seznam");
informaceOLidechSeznam.innerHTML += lide.map((clovek) => vytvorOdrazkuProCloveka(clovek)).join("");

// --------------------------------------------------

// Zvýšení mzdy o 5 % všem
pridejVsem(lide);
// Zvýšení mzdy o 10 % méně vydělávajícím
pridejMeneVydelavajicim(lide);

// Vypsání informací o všech lidech do tabulky
const informaceOLidechTabulka = document.querySelector("#informace-o-lidech-tabulka");
informaceOLidechTabulka.innerHTML += lide.map((clovek) => vytvorRadekProCloveka(clovek)).join("");

// --------------------------------------------------

// Vypsání informací o zaměstnancích mladších než 30 let za sebou do odstavce
const mladiZamestnanciOdstavec = document.querySelector("#zamestnanci-do-30-let");
mladiZamestnanciOdstavec.innerHTML = zamestnanci
	.filter((zamestnanec) => zamestnanec.vek < 30)
	.map((zamestnanec) => `${zamestnanec.jmeno} ${zamestnanec.prijmeni} (${zamestnanec.vek})`)
	.join(", ");

// --------------------------------------------------

// Řazení řetězců a čísel
const dnyVTydnu = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const dnyVTydnuSerazene = dnyVTydnu.toSorted();
console.log("Dny v týdnu abecedně:", dnyVTydnuSerazene);
const cisla = [12, 5, 189, 0, 5];
const cislaAbecedne = cisla.toSorted();
console.log("Čísla abecedně:", cislaAbecedne);
const cislaSerazena = cisla.toSorted((a, b) => a - b);
console.log("Čísla seřazená:", cislaSerazena);
console.log(
	"Čísla seřazená od největšího:",
	cisla.toSorted((a, b) => b - a)
);

// --------------------------------------------------

// Vypsání informací o zaměstnancích mladších než 30 let, seřazených od nejmladšího, za sebou do odstavce
const mladiZamestnanciSerazeneOdstavec = document.querySelector("#zamestnanci-do-30-let-serazene");
mladiZamestnanciSerazeneOdstavec.innerHTML = zamestnanci
	.filter((zamestnanec) => zamestnanec.vek < 30)
	.toSorted((zamestnanec1, zamestnanec2) => zamestnanec1.vek - zamestnanec2.vek)
	.map((zamestnanec) => `${zamestnanec.jmeno} ${zamestnanec.prijmeni} (${zamestnanec.vek})`)
	.join(", ");

// --------------------------------------------------

// Nalezení prvního padesátiletého zaměstnance v poli
const padesatiletyZamestnanec = zamestnanci.find((zamestnanec) => zamestnanec.vek === 50);
console.log("Padesátiletý zaměstnanec:", padesatiletyZamestnanec);
// Nalezení organizační jednotky s ID 5
const organizacniJednotka5 = organizacniJednotky.find((organizacniJednotka) => organizacniJednotka.id === 5);
console.log(`Organizační jednotka s ID 5 je ${organizacniJednotka5.nazev}.`);

// --------------------------------------------------

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce. Druhým parametrem je pole všech
// existujících organizačních jednotek, ve kterých je hledána jednotka, do které zaměstnanec spadá.
const vytvorRadekProZamestnance = (zamestnanec, organizacniJednotky) => {
	const jednotkaZamestnance = organizacniJednotky.find(
		(organizacniJednotka) => organizacniJednotka.id === zamestnanec.organizacniJednotkaId
	);
	return `<tr><td>${zamestnanec.jmeno} ${zamestnanec.prijmeni}</td><td>${zamestnanec.vek}</td><td>${jednotkaZamestnance.nazev}</td></tr>`;
};

// Vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají), seřazených od nejstaršího.
const vsichniZamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");
vsichniZamestnanciTabulka.innerHTML += zamestnanci
	.toSorted((zamestnanec1, zamestnanec2) => zamestnanec2.vek - zamestnanec1.vek)
	.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec, organizacniJednotky))
	.join("");
