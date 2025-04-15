import { nactiData, zpracujChybu } from "./nacitani-dat.js";

// Načtení dat o východu a západu Slunce
nactiData("https://api.sunrise-sunset.org/json?lat=50.086389&lng=14.411944&tzid=Europe/Prague")
	.then((telo) => {
		// Vypsání informací o východu a západu Slunce do stránky
		const vychodZapadSeznam = document.querySelector("#vychod-zapad");
		vychodZapadSeznam.innerHTML =
			`<li>Slunce vychází v ${telo.results.sunrise}.</li>` + `<li>Slunce zapadá v ${telo.results.sunset}.</li>`;
	})
	.catch((chyba) => {
		zpracujChybu(chyba);
	});
