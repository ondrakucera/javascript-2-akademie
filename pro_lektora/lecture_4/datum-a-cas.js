// Získání aktuálního data a času v okamžiku spuštění skriptu
const aktualniCas = new Date();

// Základní práce s objektem obsahujícím datum a čas
const aktualniCasElement = document.querySelector("#aktualni-cas");
aktualniCasElement.innerHTML = aktualniCas.toLocaleString();
const dnesniDatumElement = document.querySelector("#dnesni-datum");
dnesniDatumElement.innerHTML = `${aktualniCas.getDate()}. ${aktualniCas.getMonth() + 1}. ${aktualniCas.getFullYear()}`;
const aktualniMilisekundyElement = document.querySelector("#aktualni-milisekundy");
aktualniMilisekundyElement.innerHTML = aktualniCas.getTime();

// --------------------------------------------------

// Nalezení důležitých elementů na stránce pro sekci s datem narození uživatele
const narozeninyFormular = document.querySelector("#narozeniny-formular");
const narozeninyDenPolicko = document.querySelector("#narozeniny-den");
const narozeninyMesicPolicko = document.querySelector("#narozeniny-mesic");
const narozeninyRokPolicko = document.querySelector("#narozeniny-rok");
const narozeninySeznam = document.querySelector("#narozeniny-vysledek");

// Obsluha události odeslání formuláře
narozeninyFormular.addEventListener("submit", (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Získání uživatelem zadaných údajů
	const den = narozeninyDenPolicko.value;
	const mesic = narozeninyMesicPolicko.value;
	const rok = narozeninyRokPolicko.value;

	// Zformátování data narození uživatele do tvaru YYYY-MM-DD
	const narozeninyDatumRetezec = `${rok.padStart(4, "0")}-${mesic.padStart(2, "0")}-${den.padStart(2, "0")}`;
	// Vytvoření objektu pro datum a čas uživatelova data narození
	const narozeninyDatum = new Date(narozeninyDatumRetezec);

	// Spočtení uživatelova věku v milisekundách
	const vekVMilisekundach = aktualniCas.getTime() - narozeninyDatum.getTime();

	// Vypsání uživatelova věku v různých časových jednotkách do stránky
	narozeninySeznam.innerHTML =
		`<li>Aktuálně je ti ${vekVMilisekundach} milisekund.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / 1000)} sekund.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60))} minut.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60))} hodin.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60 * 24))} dní.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60 * 24 * 365))} let.</li>`;
});

// --------------------------------------------------

// Nalezení důležitých elementů na stránce pro druhou sekci s datem narození uživatele
const narozeninyDatumPolicko = document.querySelector("#narozeniny-datum");
const narozeninySeznamPodruhe = document.querySelector("#narozeniny-vysledek-podruhe");

// Obsluha události změny políčka
narozeninyDatumPolicko.addEventListener("change", () => {
	// Vytvoření objektu pro datum a čas uživatelova data narození
	const narozeninyDatum = new Date(narozeninyDatumPolicko.value);

	// Spočtení uživatelova věku v milisekundách
	const vekVMilisekundach = aktualniCas.getTime() - narozeninyDatum.getTime();

	// Vypsání uživatelova věku v různých časových jednotkách do stránky
	narozeninySeznamPodruhe.innerHTML =
		`<li>Aktuálně je ti ${vekVMilisekundach} milisekund.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / 1000)} sekund.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60))} minut.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60))} hodin.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60 * 24))} dní.</li>` +
		`<li>Aktuálně je ti ${Math.floor(vekVMilisekundach / (1000 * 60 * 60 * 24 * 365))} let.</li>`;
});
