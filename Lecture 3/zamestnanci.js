import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v nečíslovaném seznamu.
const vytvorOdrazkuProZamestnance = (zamestnanec) => {
	return `<li>${zamestnanec.jmeno} ${zamestnanec.prijmeni} (${zamestnanec.vek})</li>`;
};

// Načtení dat o zaměstnancích
nactiData("http://localhost:3000/data/zamestnanci.json")
	.then((zamestnanci) => {
		// Vypsání informací o zaměstnancích, seřazených od nejmladšího, do nečíslovaného seznamu
		const vsichniZamestnanciSeznam = document.querySelector("#vsichni-zamestnanci");
		vsichniZamestnanciSeznam.innerHTML = zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => zamestnanec1.vek - zamestnanec2.vek)
			.map((zamestnanec) => vytvorOdrazkuProZamestnance(zamestnanec))
			.join("");
	})
	.catch((duvod) => {
		zpracujChybu(duvod);
	});
