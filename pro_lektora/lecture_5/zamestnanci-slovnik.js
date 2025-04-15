import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce. Druhým parametrem je pole všech
// existujících organizačních jednotek, ve kterých je hledána jednotka, do které zaměstnanec spadá.
const vytvorRadekProZamestnance = (zamestnanec, organizacniJednotkySlovnik) => {
	const { jmeno, prijmeni, vek, organizacniJednotkaId } = zamestnanec;
	return (
		"<tr>" +
		`<td>${jmeno} ${prijmeni}</td>` +
		`<td>${vek}</td>` +
		`<td>${organizacniJednotkySlovnik[organizacniJednotkaId].nazev}</td>` +
		"</tr>"
	);
};

// Funkce aktualizující tabulku zaměstnanců (první parametr) informacemi o zaměstnancích (druhý parametr) a
// organizačních jednotkách (třetí parametr, v podobě slovníku, ve kterém jsou jako klíče použity identifikátory
// jednotek). Zaměstnanci jsou zobrazeni v pořadí od nejmladšího.
const aktualizujTabulku = (zamestnanciTabulka, zamestnanci, organizacniJednotkySlovnik) => {
	zamestnanciTabulka.innerHTML =
		"<thead><tr><th>Jméno</th><th>Věk</th><th>Oddělení</th></tr></thead>" +
		zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => zamestnanec1.vek - zamestnanec2.vek)
			.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec, organizacniJednotkySlovnik))
			.join("");
};

// Proměnné, do kterých následně načteme zaměstnance a organizační jednotky
let zamestnanci;
const organizacniJednotkySlovnik = {};

try {
	// Načtení dat o zaměstnancích a organizačních jednotkách
	zamestnanci = await nactiData("http://localhost:3000/data/zamestnanci.json");
	const organizacniJednotky = await nactiData("http://localhost:3000/data/organizacni-jednotky.json");

	// Převedení pole organizačních jednotek na slovník, kde klíčem je vždy identifikátor dané jednotky a hodnotou
	// objekt jednotky jako takový.
	organizacniJednotky.forEach((organizacniJednotka) => {
		organizacniJednotkySlovnik[organizacniJednotka.id] = organizacniJednotka;
	});

	// Vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají
	const zamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");
	aktualizujTabulku(zamestnanciTabulka, zamestnanci, organizacniJednotkySlovnik);
} catch (chyba) {
	zpracujChybu(chyba);
}
