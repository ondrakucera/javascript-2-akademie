import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Načtení dat o státních svátcích v ČR pro rok 2024
nactiData("https://date.nager.at/api/v3/PublicHolidays/2024/CZ")
	.then((telo) => {
		// Vypsání informací o státních svátcích do nečíslovaného seznamu
		const statniSvatkySeznam = document.querySelector("#statni-svatky");
		statniSvatkySeznam.innerHTML = telo.map((svatek) => `<li>${svatek.date}: ${svatek.localName}</li>`).join("");
	})
	.catch((duvod) => {
		zpracujChybu(duvod);
	});
