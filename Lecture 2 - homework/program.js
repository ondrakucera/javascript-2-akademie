import { zamestnanci, organizacniJednotky } from "./zamestnanci.js";

// Funkce vracející řetězec s informacemi o jednom zaměstnanci pro použití v tabulce. Druhým parametrem je pole všech
// existujících organizačních jednotek, ve kterých je hledána jednotka, do které zaměstnanec spadá.
const vytvorRadekProZamestnance = (zamestnanec, organizacniJednotky) => {
	const jednotkaZamestnance = organizacniJednotky.find(
		(organizacniJednotka) => organizacniJednotka.id === zamestnanec.organizacniJednotkaId
	);
	return `<tr><td>${zamestnanec.jmeno} ${zamestnanec.prijmeni}</td><td>${zamestnanec.vek}</td><td>${jednotkaZamestnance.nazev}</td></tr>`;
};

const aktualizujTabulku = (zamestnanciTabulka, zamestnanci, organizacniJednotky) => {
	zamestnanciTabulka.innerHTML =
		"<thead><tr><th>Jméno</th><th>Věk</th><th>Oddělení</th></tr></thead>" +
		zamestnanci
			.toSorted((zamestnanec1, zamestnanec2) => zamestnanec2.vek - zamestnanec1.vek)
			.map((zamestnanec) => vytvorRadekProZamestnance(zamestnanec, organizacniJednotky))
			.join("");
};

// Vypsání informací o všech zaměstnancích (včetně organizační jednotky, do níž spadají), seřazených od nejstaršího.
const vsichniZamestnanciTabulka = document.querySelector("#vsichni-zamestnanci");

aktualizujTabulku(vsichniZamestnanciTabulka, zamestnanci, organizacniJednotky);

const prijmeniPolicko = document.querySelector("#prijmeni");
const oddeleniPolicko = document.querySelector("#oddeleni");
const filtrovatTlacitko = document.querySelector("#filtrovat");

filtrovatTlacitko.addEventListener("click", () => {
	const zadanaJednotka = organizacniJednotky.find(
		(organizacniJednotka) => organizacniJednotka.nazev === oddeleniPolicko.value
	);
	aktualizujTabulku(
		vsichniZamestnanciTabulka,
		zamestnanci.filter(
			(zamestnanec) =>
				(prijmeniPolicko.value === "" || zamestnanec.prijmeni === prijmeniPolicko.value) &&
				(oddeleniPolicko.value === "" ||
					(zadanaJednotka !== undefined && zamestnanec.organizacniJednotkaId === zadanaJednotka.id))
		),
		organizacniJednotky
	);
});
