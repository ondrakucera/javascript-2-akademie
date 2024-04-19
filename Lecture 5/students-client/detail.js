import { fetchStudent } from "./rest-api-client.js";

// Funkce vykreslující data studenta do připravené tabulky. Funkce rovněž modifikuje odkaz pro přechod na obrazovku
// editace studenta.
const renderStudent = (student) => {
	document.querySelector("#student-detail-table").innerHTML = `
		<tbody>
			<tr>
				<th>Name</th>
				<td>${student.firstName} ${student.lastName}</td>
			</tr>
			<tr>
				<th>Gender</th>
				<td>${student.gender}</td>
			</tr>
			<tr>
				<th>House</th>
				<td>${student.house}</td>
			</tr>
			<tr>
				<th>Year</th>
				<td>${student.year}</td>
			</tr>
		</tbody>
	`;

	const editLink = document.querySelector("#student-edit-link");
	editLink.href = `edit.html?id=${student.id}`;
	editLink.innerHTML = `Edit ${student.firstName} ${student.lastName}`;
};

// Získání ID studenta z parametrů URL
const id = new URLSearchParams(location.search).get("id");
// Načtení studenta ze serveru
const student = await fetchStudent(id);
// Vykreslení obsahu tabulky s detailem studenta
renderStudent(student);
