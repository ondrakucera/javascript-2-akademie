import { createStudent } from "./rest-api-client.js";

// Funkce zpracovávající odeslání formuláře.
const handleSubmit = async (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Načtení údajů studenta, jak je zadal uživatel
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const gender = document.querySelector("#gender").value;
	const house = document.querySelector("#house").value;
	const year = document.querySelector("#year").value;

	// Vytvoření studenta na serveru a získání jeho ID
	const student = { firstName, lastName, gender, house, year };
	const id = await createStudent(student);

	// Přechod na detail studenta
	location.href = `detail.html?id=${id}`;
};

// Obsluha události odeslání formuláře
document.querySelector("#create-form").addEventListener("submit", handleSubmit);
