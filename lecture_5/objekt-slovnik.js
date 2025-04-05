// Vytvoření na počátku prázdného slovníku
const slovnik = {};

// Nalezení důležitých elementů na stránce
const slovnikFormular = document.querySelector("#slovnik-formular");
const zdrojoveSlovoPolicko = document.querySelector("#slovo-zdroj");
const ciloveSlovoPolicko = document.querySelector("#slovo-cil");
const obsahSlovnikuSeznam = document.querySelector("#obsah-slovniku");
const prekladacFormular = document.querySelector("#prekladac-formular");
const prekladacVstupPolicko = document.querySelector("#prekladac-vstup");
const prekladacVysledek = document.querySelector("#prekladac-vysledek");

// Obsluha události odeslání formuláře pro přidání nového překladu do slovníku
slovnikFormular.addEventListener("submit", (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Získání slova ve zdrojovém a cílovém jazyce
	const zdrojoveSlovo = zdrojoveSlovoPolicko.value;
	const ciloveSlovo = ciloveSlovoPolicko.value;

	// Umístění překladu do slovníku
	slovnik[zdrojoveSlovo] = ciloveSlovo;

	// Vypsání celého aktuálního obsahu slovníku do stránky
	obsahSlovnikuSeznam.innerHTML = Object.keys(slovnik)
		.map((zdrojoveSlovo) => `<li>${zdrojoveSlovo}: ${slovnik[zdrojoveSlovo]}</li>`)
		.join("");
});

// Obsluha události odeslání formuláře pro překlad slovíčka
prekladacFormular.addEventListener("submit", (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Získání slova k překladu
	const zadaneSlovo = prekladacVstupPolicko.value;

	// Výpis překladu do stránky (nebo informace o tom, že překlad není možné provést)
	prekladacVysledek.innerHTML =
		zadaneSlovo in slovnik
			? `Překladem slova <em>${zadaneSlovo}</em> je slovo <strong>${slovnik[zadaneSlovo]}</strong>.`
			: `Slovo <em>${zadaneSlovo}</em> se bohužel nenachází ve slovníku.`;
});
