import { getCodebookItemName } from "./codebook.js";
import { deleteStudent, fetchCodebooks, fetchStudents } from "./rest-api-client.js";

// Funkce zpracovávající kliknutí na tlačítko smazání studenta.
const handleDelete = async (student) => {
	const confirmation = confirm(`Do you really want to delete ${student.firstName} ${student.lastName}?`);
	if (confirmation) {
		await deleteStudent(student.id);
		const students = await fetchStudents();
		const codebooks = await fetchCodebooks();
		renderStudents(students, codebooks);
	}
};

// Funkce připravující jeden řádek tabulky s daty studenta.
const createStudentTableRow = (student, codebooks) => `
	<tr>
		<td><a href="detail.html?id=${student.id}">${student.firstName} ${student.lastName}</a></td>
		<td>${getCodebookItemName(codebooks.gender, student.gender)}</td>
		<td>${getCodebookItemName(codebooks.house, student.house)}</td>
		<td>${getCodebookItemName(codebooks.year, student.year)}</td>
		<td>
			<a href="edit.html?id=${student.id}">Edit</a>
			<button id="delete-button-${student.id}" type="button" class="btn btn-danger student-delete">Delete</button>
		</td>
	</tr>
`;

// Funkce vykreslující data studentů do připravené tabulky.
const renderStudents = (students, codebooks) => {
	// Vykreslení obsahu tabulky
	document.querySelector("#student-table").innerHTML =
		"<thead><tr><th>Name</th><th>Gender</th><th>House</th><th>Year</th><th></th></tr></thead>" +
		"<tbody>" +
		students.map((student) => createStudentTableRow(student, codebooks)).join("") +
		"</tbody>";

	// Obsluha události stisknutí tlačítka pro všechna tlačítka smazání studenta
	students.forEach((student) => {
		document.querySelector(`#delete-button-${student.id}`).addEventListener("click", () => {
			handleDelete(student);
		});
	});
};

// Načtení studentů ze serveru
const students = await fetchStudents();
// Načtení číselníků ze serveru
const codebooks = await fetchCodebooks();
// Vykreslení obsahu tabulky se seznamem studentů
renderStudents(students, codebooks);
