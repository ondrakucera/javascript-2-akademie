import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Funkce načte data o východu a západu Slunce pro dané datum a zobrazí je uživateli.
const aktualizuj = async (datumRetezec) => {
	try {
		// Načtení dat o východu a západu Slunce
		const telo = await nactiData(
			`https://api.sunrise-sunset.org/json?lat=50.086389&lng=14.411944&date=${datumRetezec}&tzid=Europe/Prague&formatted=0`
		);
		const vychod = new Date(telo.results.sunrise);
		const zapad = new Date(telo.results.sunset);
		// Vypsání informací o východu a západu Slunce do stránky
		const vychodZapadSeznam = document.querySelector("#vychod-zapad");
		vychodZapadSeznam.innerHTML =
			`<li>Slunce vychází v ${vychod.toLocaleTimeString()}.</li>` +
			`<li>Slunce zapadá v ${zapad.toLocaleTimeString()}.</li>`;
	} catch (chyba) {
		zpracujChybu(chyba);
	}
};

// Nastavení výchozího data na dnešek
const datumPolicko = document.querySelector("#datum");
const datumRetezec = new Date().toISOString().substring(0, 10);
datumPolicko.value = datumRetezec;

// Úvodní zobrazení informací o východu a západu Slunce
aktualizuj(datumPolicko.value);

// Obsluha události změny políčka s datem
datumPolicko.addEventListener("change", () => {
	aktualizuj(datumPolicko.value);
});
