import { deleteStudent, fetchStudents } from "./rest-api-client.js";

// Funkce zpracovávající kliknutí na tlačítko smazání studenta.
const handleDelete = async (id) => {
	await deleteStudent(id);
	const students = await fetchStudents();
	renderStudents(students);
};

// Funkce připravující jeden řádek tabulky s daty studenta.
const createStudentTableRow = (student) => `
	<tr>
		<td><a href="detail.html?id=${student.id}">${student.firstName} ${student.lastName}</a></td>
		<td>${student.gender}</td>
		<td>${student.house}</td>
		<td>${student.year}</td>
		<td>
			<a href="edit.html?id=${student.id}">Edit</a>
			<button id="delete-button-${student.id}" type="button" class="btn btn-danger student-delete">Delete</button>
		</td>
	</tr>
`;

// Funkce vykreslující data studentů do připravené tabulky.
const renderStudents = (students) => {
	// Vykreslení obsahu tabulky
	document.querySelector("#student-table").innerHTML =
		"<thead><tr><th>Name</th><th>Gender</th><th>House</th><th>Year</th><th></th></tr></thead>" +
		"<tbody>" +
		students.map((student) => createStudentTableRow(student)).join("") +
		"</tbody>";

	// Obsluha události stisknutí tlačítka pro všechna tlačítka smazání studenta
	students.forEach((student) => {
		document.querySelector(`#delete-button-${student.id}`).addEventListener("click", () => {
			handleDelete(student.id);
		});
	});
};

// Načtení studentů ze serveru
const students = await fetchStudents();
// Vykreslení obsahu tabulky se seznamem studentů
renderStudents(students);
