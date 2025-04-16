import { createStudent, fetchCodebooks } from "./rest-api-client.js";

// Funkce zpracovávající odeslání formuláře.
const handleSubmit = async (event) => {
	// Zrušení výchozího zpracování události
	event.preventDefault();

	// Načtení údajů studenta, jak je zadal uživatel
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const gender = document.querySelector("#create-form").gender.value;
	const house = document.querySelector("#house").value;
	const year = document.querySelector("#year").value;

	// Vytvoření studenta na serveru a získání jeho ID
	const student = { firstName, lastName, gender, house, year };
	const id = await createStudent(student);

	// Přechod na detail studenta
	location.href = `detail.html?id=${id}`;
};

// Funkce vytvářející sadu radiobuttonů pro číselník pohlaví.
const getGenderRadioInputString = (cbGender) =>
	cbGender
		.map(
			(gender) =>
				`<label class="form-check-label">
					<input type="radio" name="gender" class="form-check-input" value="${gender.code}" required /> ${gender.names.en}
				</label>`
		)
		.join("");

// Funkce vytvářející combobox pro číselník kolejí.
const getHouseSelectString = (cbHouse) =>
	"<select id=\"house\" class=\"form-select\" required>" +
	"<option></option>" +
	cbHouse.map((house) => `<option value=${house.code}>${house.names.en}</option>`).join("") +
	"</select>";

// Funkce vytvářející combobox pro číselník ročníků.
const getYearSelectString = (cbYear) =>
	"<select id=\"year\" class=\"form-select\" required>" +
	"<option></option>" +
	cbYear.map((item) => `<option value=${item.code}>${item.names.en}</option>`).join("") +
	"</select>";

// Načtení číselníků ze serveru
const codebooks = await fetchCodebooks();

// Vykreslení obsahu tabulky s formulářem vytvoření studenta
document.querySelector("#student-create-table").innerHTML = `
	<tbody>
		<tr>
			<th><label for="first-name" class="form-label">First name</label></th>
			<td><input id="first-name" class="form-control" required /></td>
		</tr>
		<tr>
			<th><label for="last-name" class="form-label">Last name</label></th>
			<td><input id="last-name" class="form-control" required /></td>
		</tr>
		<tr>
			<th>Gender</th>
			<td>${getGenderRadioInputString(codebooks.gender)}</td>
		</tr>
		<tr>
			<th><label for="house" class="form-label">House</label></th>
			<td>${getHouseSelectString(codebooks.house)}</td>
		</tr>
		<tr>
			<th><label for="year" class="form-label">Year</label></th>
			<td>${getYearSelectString(codebooks.year)}</td>
		</tr>
		<tr>
			<td colspan="2"><button class="btn btn-primary">Save</button></td>
		</tr>
	</tbody>
`;

// Obsluha události odeslání formuláře
document.querySelector("#create-form").addEventListener("submit", handleSubmit);
