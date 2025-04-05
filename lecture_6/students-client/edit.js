import { fetchStudent, updateStudent } from "./rest-api-client.js";

// Funkce zpracovávající odeslání formuláře.
const handleSubmit = async (event, id) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Načtení upravených údajů studenta, jak je zadal uživatel
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const gender = document.querySelector("#gender").value;
	const house = document.querySelector("#house").value;
	const year = document.querySelector("#year").value;

	// Aktualizace dat studenta na serveru
	const student = { id, firstName, lastName, gender, house, year };
	await updateStudent(student);

	// Přechod na detail studenta
	location.href = `detail.html?id=${id}`;
};

// Funkce vykreslující data studenta do připravené tabulky.
const renderStudent = (student) => {
	document.querySelector("#student-edit-table").innerHTML = `
		<tbody>
			<tr>
				<th><label for="first-name" class="form-label">First name</label></th>
				<td><input id="first-name" class="form-control" value="${student.firstName}" /></td>
			</tr>
			<tr>
				<th><label for="last-name" class="form-label">Last name</label></th>
				<td><input id="last-name" class="form-control" value="${student.lastName}" /></td>
			</tr>
			<tr>
				<th>Gender</th>
				<td><input id="gender" class="form-control" value="${student.gender}" /></td>
			</tr>
			<tr>
				<th><label for="house" class="form-label">House</label></th>
				<td><input id="house" class="form-control" value="${student.house}" /></td>
			</tr>
			<tr>
				<th><label for="year" class="form-label">Year</label></th>
				<td><input id="year" class="form-control" value="${student.year}" /></td>
			</tr>
			<tr>
				<td colspan="2"><button class="btn btn-primary">Save</button></td>
			</tr>
		</tbody>
	`;
};

// Získání ID studenta z parametrů URL
const id = new URLSearchParams(location.search).get("id");
// Načtení studenta ze serveru
const student = await fetchStudent(id);
// Vykreslení obsahu tabulky s detailem studenta
renderStudent(student);

// Obsluha události odeslání formuláře
document.querySelector("#edit-form").addEventListener("submit", (event) => {
	handleSubmit(event, student.id);
});
