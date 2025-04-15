// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce. Druhým parametrem je pole všech
// existujících organizačních jednotek, ve kterých je hledána jednotka, do které zaměstnanec spadá.
const vytvorRadekProZamestnance = (zamestnanec, organizacniJednotky) => {
	const jednotkaZamestnance = organizacniJednotky.find(
		(organizacniJednotka) => organizacniJednotka.id === zamestnanec.organizacniJednotkaId
	);
	return `<tr><td>${zamestnanec.jmeno} ${zamestnanec.prijmeni}</td><td>${zamestnanec.vek}</td><td>${jednotkaZamestnance.nazev}</td></tr>`;
};

// Funkce aktualizující tabulku zaměstnanců (první parametr) informacemi o zaměstnancích (druhý parametr) a
// organizačních jednotkách (třetí parametr). Zaměstnanci jsou zobrazeni v pořadí od nejmladšího.
const aktualizujTabulku = (zamestnanciTabulka, zamestnanci, organizacniJednotky) => {
	zamestnanciTabulka.innerHTML =
		"<thead><tr><th>Jméno</th><th>Věk</th><th>Oddělení</th></tr></thead>" +
		zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => zamestnanec1.vek - zamestnanec2.vek)
			.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec, organizacniJednotky))
			.join("");
};

// Načtení dat o zaměstnancích
const zamestnanciOdpoved = await fetch("http://localhost:3000/data/zamestnanci.json");
const zamestnanci = await zamestnanciOdpoved.json();
// Načtení dat o organizačních jednotkách
const organizacniJednotkyOdpoved = await fetch("http://localhost:3000/data/organizacni-jednotky.json");
const organizacniJednotky = await organizacniJednotkyOdpoved.json();

const zamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");
// Vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají)
aktualizujTabulku(zamestnanciTabulka, zamestnanci, organizacniJednotky);
