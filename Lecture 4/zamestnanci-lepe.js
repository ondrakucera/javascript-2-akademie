import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce. Druhým parametrem je pole všech
// existujících organizačních jednotek, ve kterých je hledána jednotka, do které zaměstnanec spadá.
const vytvorRadekProZamestnance = (zamestnanec, organizacniJednotkyMapa) => {
	return `<tr><td>${zamestnanec.jmeno} ${zamestnanec.prijmeni}</td><td>${zamestnanec.vek}</td><td>${
		organizacniJednotkyMapa[zamestnanec.organizacniJednotkaId].nazev
	}</td></tr>`;
};

// Funkce aktualizující tabulku zaměstnanců (první parametr) informacemi o zaměstnancích (druhý parametr) a
// organizačních jednotkách (třetí parametr, v podobě slovníku, ve kterém jsou jako klíče použity identifikátory
// jednotek). Zaměstnanci jsou zobrazeni v pořadí od nejmladšího.
const aktualizujTabulku = (zamestnanciTabulka, zamestnanci, organizacniJednotkyMapa) => {
	zamestnanciTabulka.innerHTML =
		"<thead><tr><th>Jméno</th><th>Věk</th><th>Oddělení</th></tr></thead>" +
		zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => zamestnanec1.vek - zamestnanec2.vek)
			.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec, organizacniJednotkyMapa))
			.join("");
};

// Nalezení důležitých elementů na stránce
const formular = document.querySelector("form");
const prijmeniPolicko = document.querySelector("#prijmeni");
const filtrovatTlacitko = document.querySelector("#filtrovat");
const zamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");

// Proměnné, do kterých následně načteme zaměstnance a organizační jednotky
let zamestnanci;
let organizacniJednotkyMapa = {};

try {
	// Načtení dat o zaměstnancích a organizačních jednotkách
	zamestnanci = await nactiData("http://localhost:3000/data/zamestnanci.json");
	const organizacniJednotky = await nactiData("http://localhost:3000/data/organizacni-jednotky.json");

	// Převedení pole organizačních jednotek na slovník, kde klíčem je vždy identifikátor dané jednotky a hodnotou
	// objekt jednotky jako takový.
	organizacniJednotky.forEach((organizacniJednotka) => {
		organizacniJednotkyMapa[organizacniJednotka.id] = organizacniJednotka;
	});

	// Až ve chvíli, kdy máme data k dispozici, povolíme tlačítko pro filtrování
	filtrovatTlacitko.disabled = null;

	// Vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají
	aktualizujTabulku(zamestnanciTabulka, zamestnanci, organizacniJednotkyMapa);
} catch (chyba) {
	zpracujChybu(chyba);
}

// Obsluha události odeslání formuláře
formular.addEventListener("submit", (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();
	// Vypsání informací o zaměstnancích odpovídajících filtru na příjmení
	aktualizujTabulku(
		zamestnanciTabulka,
		zamestnanci.filter(
			(zamestnanec) => prijmeniPolicko.value === "" || zamestnanec.prijmeni.startsWith(prijmeniPolicko.value)
		),
		organizacniJednotkyMapa
	);
});
