import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce.
const vytvorRadekProZamestnance = (zamestnanec) => {
	return `<tr><td>${zamestnanec.jmeno} ${zamestnanec.prijmeni}</td><td>${zamestnanec.vek}</td></tr>`;
};

// Funkce aktualizující obsah tabulky (první parametr) o informace z pole zaměstnanců (druhý parametr). Zaměstnanci
// budou zobrazeni v abecedním pořadí podle příjmení.
const aktualizujTabulku = (zamestnanciTabulka, zamestnanci) => {
	zamestnanciTabulka.innerHTML =
		"<thead><tr><th>Jméno</th><th>Věk</th></tr></thead>" +
		zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => {
				const podlePrijmeni = zamestnanec1.prijmeni.localeCompare(zamestnanec2.prijmeni);
				if (podlePrijmeni !== 0) {
					return podlePrijmeni;
				} else {
					return zamestnanec1.jmeno.localeCompare(zamestnanec2.jmeno);
				}
			})
			.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec))
			.join("");
};

// Načtení dat o zaměstnancích
nactiData("http://localhost:3000/data/zamestnanci.json")
	.then((zamestnanci) => {
		// vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají), seřazených podle příjmení
		const vsichniZamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");
		aktualizujTabulku(vsichniZamestnanciTabulka, zamestnanci);

		const prijmeniPolicko = document.querySelector("#prijmeni");
		const filtrovatTlacitko = document.querySelector("#filtrovat");

		// obsluha kliknutí na tlačítko Filtrovat
		filtrovatTlacitko.addEventListener("click", () => {
			aktualizujTabulku(
				vsichniZamestnanciTabulka,
				zamestnanci.filter(
					(zamestnanec) => prijmeniPolicko.value === "" || zamestnanec.prijmeni === prijmeniPolicko.value
				)
			);
		});
	})
	.catch((chyba) => {
		zpracujChybu(chyba);
	});
