import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Načtení dat o státních svátcích v ČR pro rok 2025
nactiData("https://date.nager.at/api/v3/PublicHolidays/2025/CZ")
	.then((telo) => {
		// Vypsání informací o státních svátcích do nečíslovaného seznamu
		const statniSvatkySeznam = document.querySelector("#statni-svatky");
		statniSvatkySeznam.innerHTML = telo.map((svatek) => `<li>${svatek.date}: ${svatek.localName}</li>`).join("");
	})
	.catch((chyba) => {
		zpracujChybu(chyba);
	});
