import { fetchCodebooks, fetchStudent, updateStudent } from "./rest-api-client.js";

// Funkce zpracovávající odeslání formuláře.
const handleSubmit = async (event, id) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Načtení upravených údajů studenta, jak je zadal uživatel
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const gender = document.querySelector("#edit-form").gender.value;
	const house = document.querySelector("#house").value;
	const year = document.querySelector("#year").value;

	// Aktualizace dat studenta na serveru
	const student = { id, firstName, lastName, gender, house, year };
	await updateStudent(student);

	// Přechod na detail studenta
	location.href = `detail.html?id=${id}`;
};

// Funkce vytvářející sadu radiobuttonů pro číselník pohlaví. Předvybrán je radiobutton odpovídající pohlaví daného
// studenta.
const getGenderRadioInputString = (student, cbGender) =>
	cbGender
		.map(
			(gender) =>
				"<label class=\"form-check-label\">" +
				(student.gender === gender.code
					? `<input type="radio" name="gender" class="form-check-input" value="${gender.code}" required checked /> ${gender.names.en}`
					: `<input type="radio" name="gender" class="form-check-input" value="${gender.code}" required /> ${gender.names.en}`) +
				"</label>"
		)
		.join("");

// Funkce vytvářející combobox pro číselník kolejí. Předvybrána je položka odpovídající koleji daného studenta.
const getHouseSelectString = (student, cbHouse) =>
	"<select id=\"house\" class=\"form-select\" required>" +
	cbHouse
		.map((house) =>
			student.house === house.code
				? `<option value=${house.code} selected>${house.names.en}</option>`
				: `<option value=${house.code}>${house.names.en}</option>`
		)
		.join("") +
	"</select>";

// Funkce vytvářející combobox pro číselník ročníků. Předvybrána je položka odpovídající ročníku daného studenta.
const getYearSelectString = (student, cbYear) =>
	"<select id=\"year\" class=\"form-select\" required>" +
	cbYear
		.map((year) =>
			student.year === year.code
				? `<option value=${year.code} selected>${year.names.en}</option>`
				: `<option value=${year.code}>${year.names.en}</option>`
		)
		.join("") +
	"</select>";

// Funkce vykreslující data studenta do připravené tabulky.
const renderStudent = (student, codebooks) => {
	document.querySelector("#student-edit-table").innerHTML = `
		<tbody>
			<tr>
				<th><label for="first-name" class="form-label">First name</label></th>
				<td><input id="first-name" class="form-control" value="${student.firstName}" required /></td>
			</tr>
			<tr>
				<th><label for="last-name" class="form-label">Last name</label></th>
				<td><input id="last-name" class="form-control" value="${student.lastName}" required /></td>
			</tr>
			<tr>
				<th>Gender</th>
				<td>${getGenderRadioInputString(student, codebooks.gender)}</td>
			</tr>
			<tr>
				<th><label for="house" class="form-label">House</label></th>
				<td>${getHouseSelectString(student, codebooks.house)}</td>
			</tr>
			<tr>
				<th><label for="year" class="form-label">Year</label></th>
				<td>${getYearSelectString(student, codebooks.year)}</td>
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
// Načtení číselníků ze serveru
const codebooks = await fetchCodebooks();
// Vykreslení obsahu tabulky s formulářem editace studenta
renderStudent(student, codebooks);

// Obsluha události odeslání formuláře
document.querySelector("#edit-form").addEventListener("submit", (event) => {
	handleSubmit(event, student.id);
});
