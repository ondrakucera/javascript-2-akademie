import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce načte data o státních svátcích pro daný rok a daný kód země a zobrazí je uživateli.
const aktualizuj = async (rokRetezec, kodZeme) => {
	try {
		// Načtení dat o státních svátcích pro určitou zemi a určitý rok
		const telo = await nactiData(`https://date.nager.at/api/v3/PublicHolidays/${rokRetezec}/${kodZeme}`);
		// Vypsání informací o státních svátcích do nečíslovaného seznamu
		const statniSvatkySeznam = document.querySelector("#statni-svatky");
		statniSvatkySeznam.innerHTML = telo
			.map((svatek) => {
				const datumRetezec = new Date(svatek.date).toLocaleDateString();
				const nazev = svatek.localName;
				return `<li>${datumRetezec}: ${nazev}</li>`;
			})
			.join("");
	} catch (chyba) {
		zpracujChybu(chyba);
	}
};

const rokPolicko = document.querySelector("#rok");
const zemePolicko = document.querySelector("#zeme");

// Úvodní zobrazení dat o státních svátcích pro výchozí rok a výchozí zemi
aktualizuj(rokPolicko.value, zemePolicko.value);

// Obsluha události změny políčka s výběrem roku
rokPolicko.addEventListener("change", () => {
	aktualizuj(rokPolicko.value, zemePolicko.value);
});
// Obsluha události změny políčka s výběrem země
zemePolicko.addEventListener("change", () => {
	aktualizuj(rokPolicko.value, zemePolicko.value);
});
