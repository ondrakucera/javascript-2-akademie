// Funkce načítající data ve formátu JSON ze zadané adresy. V případě úspěchu vrací příslib dat extrahovaných z formátu
// JSON. V případě neúspěchu vyvolá výjimku, kterou je následně možné zpracovat funkcí catch.
export const nactiData = (adresa) =>
	fetch(adresa).then((odpoved) => {
		if (odpoved.ok) {
			return odpoved.json();
		}
		throw odpoved;
	});

// Funkce pro jednoduché zpracování chyby nastalé při komunikaci se serverem. Uživateli zobrazí dialogové okno s
// omluvou a zároveň do vývojářské konzole zapíše informace o nastalé chybě.
export const zpracujChybu = (chyba) => {
	console.log("Chyba při načítání dat ze serveru.", chyba);
	alert("Omlouváme se. Došlo k chybě při načítání dat ze serveru.");
};
