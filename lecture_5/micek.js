// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
const nahodneCislo = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const micek = document.querySelector("#micek");

// Nastavení základních konstant
const MICEK_SIRKA = micek.clientWidth;
const MICEK_VYSKA = micek.clientHeight;
const PLOCHA_SIRKA = document.documentElement.clientWidth;
const PLOCHA_VYSKA = document.documentElement.clientHeight;
const MAXIMALNI_DELTA = 5;

// Určení výchozí pozice a výchozího směru míčku
let micekX = nahodneCislo(0, PLOCHA_SIRKA - MICEK_SIRKA);
let micekY = nahodneCislo(0, PLOCHA_VYSKA - MICEK_VYSKA);
let deltaX = nahodneCislo(1, MAXIMALNI_DELTA);
let deltaY = nahodneCislo(1, MAXIMALNI_DELTA);

// Umístění míčku na patřičné souřadnice
micek.style.left = `${micekX}px`;
micek.style.top = `${micekY}px`;

// Funkce provede jeden krok pohybu míčku v aktuálním směru. Pokud se tímto krokem míček dostal mimo povolené meze, je
// zvolen nový (opačný) směr pohybu.
const aktualizuj = () => {
	micekX = micekX + deltaX;
	micekY = micekY + deltaY;
	micek.style.left = `${micekX}px`;
	micek.style.top = `${micekY}px`;

	if (micekX >= PLOCHA_SIRKA - MICEK_SIRKA) {
		deltaX = -nahodneCislo(1, MAXIMALNI_DELTA);
	} else if (micekX <= 0) {
		deltaX = nahodneCislo(1, MAXIMALNI_DELTA);
	}
	if (micekY >= PLOCHA_VYSKA - MICEK_VYSKA) {
		deltaY = -nahodneCislo(1, MAXIMALNI_DELTA);
	} else if (micekY <= 0) {
		deltaY = nahodneCislo(1, MAXIMALNI_DELTA);
	}
};

setInterval(aktualizuj, 10);
