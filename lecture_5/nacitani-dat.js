// Funkce načítající data ve formátu JSON ze zadané adresy. V případě úspěchu vrací příslib dat extrahovaných z formátu
// JSON. V případě neúspěchu vyvolá výjimku, kterou je následně možné zpracovat konstrukcí try/catch.
export const nactiData = async (adresa) => {
	const odpoved = await fetch(adresa);
	if (!odpoved.ok) {
		throw odpoved;
	}
	return odpoved.json();
};

// Funkce pro jednoduché zpracování chyby nastalé při komunikaci se serverem. Uživateli zobrazí dialogové okno s
// omluvou a zároveň do vývojářské konzole zapíše informace o nastalé chybě.
export const zpracujChybu = (chyba) => {
	console.log("Chyba při načítání dat ze serveru.", chyba);
	alert("Omlouváme se. Došlo k chybě při načítání dat ze serveru.");
};
