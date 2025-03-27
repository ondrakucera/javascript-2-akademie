// Funkce pro nalezení nejmladšího člověka v poli lidí (objektů reprezentujících člověka).
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function najdiNejmladsiho(poleLidi) {
	let vysledek = undefined;
	for (let i = 0; i < poleLidi.length; i++) {
		if (i === 0 || poleLidi[i].vek < vysledek.vek) {
			vysledek = poleLidi[i];
		}
	}
	return vysledek;
}

// Funkce pro nalezení nejvíce vydělávajícího člověka v poli lidí (objektů reprezentujících člověka).
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function najdiNejviceVydelavajiciho(poleLidi) {
	let vysledek = undefined;
	for (let i = 0; i < poleLidi.length; i++) {
		if (i === 0 || poleLidi[i].mzda > vysledek.mzda) {
			vysledek = poleLidi[i];
		}
	}
	return vysledek;
}

// Funkce pro navýšení mzdy o 10 % lidem se mzdou menší než 50000 v poli lidí.
function pridejMeneVydelavajicim(poleLidi) {
	for (let i = 0; i < poleLidi.length; i++) {
		if (poleLidi[i].mzda < 50000) {
			poleLidi[i].mzda = poleLidi[i].mzda * 1.1;
		}
	}
}

// Funkce vracející řetězec s informacemi o jednom člověku.
function zformatujCloveka(clovek) {
	return `${clovek.jmeno} ${clovek.prijmeni} (věk: ${clovek.vek}, mzda: ${clovek.mzda})`;
}

const lide = [
	{ jmeno: "David", prijmeni: "Novák", vek: 27, mzda: 40000 },
	{ jmeno: "Olga", prijmeni: "Černá", vek: 57, mzda: 70000 },
	{ jmeno: "Jan", prijmeni: "Sýkora", vek: 30, mzda: 30000 },
];

// --------------------------------------------------

// Nalezení nejmladšího člověka
const nejmladsiClovek = najdiNejmladsiho(lide);
const nejmladsiClovekElement = document.querySelector("#nejmladsi-clovek-vysledek");
nejmladsiClovekElement.innerHTML = `Nejmladší je ${nejmladsiClovek.jmeno} ${nejmladsiClovek.prijmeni} (${nejmladsiClovek.vek}).`;

// --------------------------------------------------

// Nalezení nejvíce vydělávajícího člověka
const nejvicVydelavajiciClovek = najdiNejviceVydelavajiciho(lide);
const nejvicVydelavajiciClovekElement = document.querySelector("#nejvic-vydelavajici-clovek-vysledek");
nejvicVydelavajiciClovekElement.innerHTML = `Nejvíc vydělává ${nejvicVydelavajiciClovek.jmeno} ${nejvicVydelavajiciClovek.prijmeni} (${nejvicVydelavajiciClovek.mzda}).`;

// --------------------------------------------------

// Přidání lidem s nižší mzdou
const lidePredNavysenimElement = document.querySelector("#lide-pred-navysenim");
const lidePoNavyseniElement = document.querySelector("#lide-po-navyseni");
for (let i = 0; i < lide.length; i++) {
	lidePredNavysenimElement.innerHTML += `<li>${zformatujCloveka(lide[i])}</li>`;
}
pridejMeneVydelavajicim(lide);
for (let i = 0; i < lide.length; i++) {
	lidePoNavyseniElement.innerHTML += `<li>${zformatujCloveka(lide[i])}</li>`;
}

// --------------------------------------------------

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
function delkaPrepony1(odvesnaA, odvesnaB) {
	return Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
}

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
const delkaPrepony2 = function (odvesnaA, odvesnaB) {
	return Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
};

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
const delkaPrepony3 = (odvesnaA, odvesnaB) => Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);

// Výpočet délky přepony
console.log("Délka přepony pomocí funkce delkaPrepony1:", delkaPrepony1(3, 4));
console.log("Délka přepony pomocí funkce delkaPrepony2:", delkaPrepony2(3, 4));
console.log("Délka přepony pomocí funkce delkaPrepony3:", delkaPrepony3(3, 4));

// --------------------------------------------------

// Funkce pro aplikaci jiné funkce (první parametr) na určitou hodnotu (druhý parametr).
function aplikuj(funkce, hodnota) {
	return funkce(hodnota);
}

// Funkce pro výpočet druhé mocniny čísla.
function druhaMocnina(x) {
	return x * x;
}

// Předání funkce jako parametru jiné funkci
const cislo1 = aplikuj(druhaMocnina, 4);
const cislo2 = aplikuj(Math.round, 5.7);
console.log("Druhá mocnina čtyřky:", cislo1);
console.log("Zaokrouhlení čísla 5.7:", cislo2);

// --------------------------------------------------

// Funkce, která aplikuje jinou funkci (první parametr) na každou položku pole (druhý parametr).
// Výsledkem je nové pole stejné velikosti jako pole původní obsahující výsledky volání předané funkce pro každou
// položku původního pole.
function aplikujNaPole(funkce, pole) {
	let vysledek = [];
	for (let i = 0; i < pole.length; i++) {
		vysledek.push(funkce(pole[i]));
	}
	return vysledek;
}

// Získání pole druhých mocnin (k původnímu poli čísel)
const poleDruhychMocnin1 = aplikujNaPole(druhaMocnina, [12, 5, -7, 0, 5]);
console.log("Pole druhých mocnin:", poleDruhychMocnin1);

// Získání pole druhých mocnin (k původnímu poli čísel)
const poleDruhychMocnin2 = aplikujNaPole((x) => x * x, [12, 5, -7, 0, 5]);
console.log("Pole druhých mocnin s využitím lambda funkce:", poleDruhychMocnin2);

// Získání pole řetězců velkými písmeny (k původnímu poli řetězců)
const poleJmenVelkymiPismeny = aplikujNaPole((jmeno) => jmeno.toUpperCase(), ["Eva", "Filip", "Tereza"]);
console.log("Pole jmen velkými písmeny:", poleJmenVelkymiPismeny);

// Získání pole příjmení (k původnímu poli objektů lidí)
console.log(
	"Pole příjmení:",
	aplikujNaPole((clovek) => clovek.prijmeni, lide)
);

// --------------------------------------------------

// Získání pole druhých mocnin (k původnímu poli čísel)
const poleDruhychMocnin3 = [12, 5, -7, 0, 5].map((x) => x * x);
console.log("Pole druhých mocnin s využitím funkce map:", poleDruhychMocnin3);

// --------------------------------------------------

// Vypsání příjmení všech lidí
const prijmeni = lide.map((clovek) => clovek.prijmeni);
const prijmeniLidiElement = document.querySelector("#prijmeni-lidi");
for (let i = 0; i < prijmeni.length; i++) {
	prijmeniLidiElement.innerHTML += `<li>${prijmeni[i]}</li>`;
}

// --------------------------------------------------

// Vypsání celkových informací o všech lidech
const informaceOLidechElement = document.querySelector("#informace-o-lidech");
informaceOLidechElement.innerHTML = lide.map((clovek) => `<li>${zformatujCloveka(clovek)}</li>`).join("");
