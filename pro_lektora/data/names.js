// taken from https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Dast%C4%9Bj%C5%A1%C3%ADch_mu%C5%BEsk%C3%BDch_jmen_v_%C4%8Cesku
const maleFirstNames = [
	"Jiří",
	"Jan",
	"Petr",
	"Josef",
	"Pavel",
	"Martin",
	"Tomáš",
	"Jaroslav",
	"Miroslav",
	"Zdeněk",
	"Václav",
	"Michal",
	"František",
	"Jakub",
	"Milan",
	"Karel",
	"Lukáš",
	"David",
	"Vladimír",
	"Ondřej",
	"Ladislav",
	"Roman",
	"Marek",
	"Stanislav",
	"Daniel",
	"Radek",
	"Antonín",
	"Vojtěch",
	"Filip",
	"Adam",
	"Matěj",
	"Dominik",
	"Aleš",
	"Miloslav",
	"Jaromír",
	"Patrik",
	"Libor",
	"Jindřich",
	"Vlastimil",
	"Miloš",
	"Lubomír",
	"Štěpán",
	"Oldřich",
	"Rudolf",
	"Matyáš",
	"Ivan",
	"Robert",
	"Luboš",
	"Radim",
	"Richard",
	"Vít",
	"Bohumil",
	"Šimon",
	"Rostislav",
	"Ivo",
	"Luděk",
	"Dušan",
	"Kamil",
	"Michael",
	"Vladislav",
	"Zbyněk",
	"Viktor",
	"Bohuslav",
	"Kryštof",
	"Alois",
	"René",
	"Vítězslav",
	"Tadeáš",
	"Štefan",
	"Eduard",
	"Marcel",
	"Ján",
	"Jozef",
	"Samuel",
	"Dalibor",
	"Emil",
	"Radomír",
	"Ludvík",
	"Denis",
	"Vilém",
	"Tobiáš",
	"Alexandr",
	"Otakar",
	"Mikuláš",
	"Radovan",
	"Leoš",
	"Robin",
	"Bedřich",
	"Erik",
	"Vratislav",
	"Marian",
	"Matouš",
	"Břetislav",
	"Přemysl",
	"Jonáš",
	"Peter",
	"Sebastian",
	"Hynek",
	"Jáchym",
	"Oliver",
	"Bohumír",
	"Igor",
	"Bronislav",
	"Arnošt",
	"Nikolas",
	"Svatopluk",
	"Otto",
	"Lumír",
	"Alex",
	"Kristián",
	"Evžen",
	"Alexander",
	"Vlastislav",
	"Mojmír",
	"Andrej",
	"Zdenek",
	"Adolf",
	"Radoslav",
	"Tibor",
	"Květoslav",
	"Čestmír",
	"Marián",
	"Dan",
	"Slavomír",
	"Maxmilián",
	"Albert",
	"Juraj",
	"Boris",
	"Ota",
	"Nicolas",
	"Drahomír",
	"Julius",
	"Oto",
	"Max",
	"Vítek",
	"Tobias",
	"Gabriel",
	"Maxim",
	"Pavol",
	"Sebastián",
	"Leopold",
	"Gustav",
	"Bořivoj",
	"Anton",
	"Adrian",
	"Čeněk",
	"Bohdan",
	"Prokop",
	"Kevin",
	"Ondrej",
];

// taken from https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Dast%C4%9Bj%C5%A1%C3%ADch_%C5%BEensk%C3%BDch_jmen_v_%C4%8Cesku
const femaleFirstNames = [
	"Jana",
	"Marie",
	"Eva",
	"Hana",
	"Anna",
	"Lenka",
	"Kateřina",
	"Lucie",
	"Věra",
	"Alena",
	"Petra",
	"Veronika",
	"Jaroslava",
	"Tereza",
	"Martina",
	"Michaela",
	"Jitka",
	"Helena",
	"Ludmila",
	"Zdeňka",
	"Ivana",
	"Monika",
	"Eliška",
	"Zuzana",
	"Markéta",
	"Jarmila",
	"Barbora",
	"Jiřina",
	"Marcela",
	"Kristýna",
	"Dana",
	"Dagmar",
	"Adéla",
	"Pavla",
	"Vlasta",
	"Miroslava",
	"Andrea",
	"Irena",
	"Božena",
	"Klára",
	"Libuše",
	"Marta",
	"Šárka",
	"Nikola",
	"Karolína",
	"Iveta",
	"Pavlína",
	"Natálie",
	"Olga",
	"Blanka",
	"Gabriela",
	"Renata",
	"Aneta",
	"Simona",
	"Růžena",
	"Radka",
	"Daniela",
	"Denisa",
	"Iva",
	"Zdenka",
	"Milada",
	"Milena",
	"Romana",
	"Miloslava",
	"Miluše",
	"Ilona",
	"Anežka",
	"Soňa",
	"Kamila",
	"Stanislava",
	"Nela",
	"Vladimíra",
	"Naděžda",
	"Květoslava",
	"Renáta",
	"Danuše",
	"Vendula",
	"Drahomíra",
	"Julie",
	"Jindřiška",
	"Emilie",
	"Viktorie",
	"Alžběta",
	"Sára",
	"Štěpánka",
	"Dominika",
	"Ema",
	"Sabina",
	"Magdalena",
	"Nikol",
	"Sofie",
	"Mária",
	"Františka",
	"Ladislava",
	"Bohumila",
	"Alice",
	"Magdaléna",
	"Žaneta",
	"Linda",
	"Alexandra",
	"Silvie",
	"Laura",
	"Kristina",
	"Květa",
	"Karla",
	"Adriana",
	"Leona",
	"Jolana",
	"Erika",
	"Terezie",
	"Edita",
	"Václava",
	"Amálie",
	"Blažena",
	"Antonie",
	"Lada",
	"Hedvika",
	"Magda",
	"Květuše",
	"Sandra",
	"Vanesa",
	"Elena",
	"Dita",
	"Emma",
	"Taťána",
	"Bohuslava",
	"Darina",
	"Vladislava",
	"Margita",
	"Diana",
	"Radmila",
	"Johana",
	"Valerie",
	"Sylva",
	"Svatava",
	"Ivona",
	"Ester",
	"Bronislava",
	"Světlana",
	"Rozálie",
	"Karin",
	"Ivanka",
	"Michala",
	"Bára",
	"Nina",
	"Oldřiška",
	"Patricie",
	"Agáta",
	"Jindra",
	"Drahoslava",
];

// taken from https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Detn%C4%9Bj%C5%A1%C3%ADch_p%C5%99%C3%ADjmen%C3%AD_v_%C4%8Cesku
const maleLastNames = [
	"Novák",
	"Svoboda",
	"Novotný",
	"Dvořák",
	"Černý",
	"Procházka",
	"Kučera",
	"Veselý",
	"Horák",
	"Němec",
	"Marek",
	"Pospíšil",
	"Pokorný",
	"Hájek",
	"Král",
	"Jelínek",
	"Růžička",
	"Beneš",
	"Fiala",
	"Sedláček",
	"Doležal",
	"Zeman",
	"Kolář",
	"Navrátil",
	"Čermák",
	"Vaněk",
	"Urban",
	"Blažek",
	"Kříž",
	"Kovář",
	"Kratochvíl",
	"Bartoš",
	"Vlček",
	"Polák",
	"Musil",
	"Kopecký",
	"Šimek",
	"Konečný",
	"Malý",
	"Holub",
	"Čech",
	"Štěpánek",
	"Staněk",
	"Kadlec",
	"Dostál",
	"Soukup",
	"Šťastný",
	"Mareš",
	"Moravec",
	"Sýkora",
	"Tichý",
	"Valenta",
	"Vávra",
	"Matoušek",
	"Říha",
	"Bláha",
	"Bureš",
	"Ševčík",
	"Hruška",
	"Mašek",
	"Dušek",
	"Pavlík",
	"Havlíček",
	"Janda",
	"Hrubý",
	"Mach",
	"Liška",
	"Bednář",
	"Beran",
	"Vítek",
	"Macháček",
	"Müller",
	"Toman",
	"Vacek",
	"Bárta",
	"Tůma",
	"Žák",
	"Šmíd",
	"Kašpar",
	"Stejskal",
	"Sedlák",
	"Švec",
	"Horváth",
	"Jaroš",
	"Strnad",
	"Slavík",
	"Němeček",
	"Bílek",
	"Ježek",
	"Matějka",
	"Beránek",
	"Tesař",
	"Horáček",
	"Fišer",
	"Kraus",
	"Brož",
	"Kubíček",
	"Prokop",
	"Pavlíček",
	"Havel",
];

// taken from https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Detn%C4%9Bj%C5%A1%C3%ADch_p%C5%99%C3%ADjmen%C3%AD_v_%C4%8Cesku
const femaleLastNames = [
	"Nováková",
	"Svobodová",
	"Novotná",
	"Dvořáková",
	"Černá",
	"Procházková",
	"Kučerová",
	"Veselá",
	"Horáková",
	"Němcová",
	"Marková",
	"Pokorná",
	"Pospíšilová",
	"Hájková",
	"Králová",
	"Jelínková",
	"Růžičková",
	"Benešová",
	"Fialová",
	"Sedláčková",
	"Doležalová",
	"Zemanová",
	"Kolářová",
	"Navrátilová",
	"Čermáková",
	"Vaňková",
	"Urbanová",
	"Kratochvílová",
	"Šimková",
	"Blažková",
	"Křížová",
	"Kopecká",
	"Kovářová",
	"Bartošová",
	"Vlčková",
	"Poláková",
	"Konečná",
	"Musilová",
	"Čechová",
	"Malá",
	"Staňková",
	"Štěpánková",
	"Holubová",
	"Šťastná",
	"Kadlecová",
	"Dostálová",
	"Soukupová",
	"Marešová",
	"Sýkorová",
	"Valentová",
	"Moravcová",
	"Vávrová",
	"Tichá",
	"Matoušková",
	"Bláhová",
	"Říhová",
	"Machová",
	"Mašková",
	"Ševčíková",
	"Burešová",
	"Šmídová",
	"Dušková",
	"Krejčová",
	"Pavlíková",
	"Jandová",
	"Hrušková",
	"Havlíčková",
	"Hrubá",
	"Beranová",
	"Lišková",
	"Tomanová",
	"Vacková",
	"Bednářová",
	"Žáková",
	"Vítková",
	"Macháčková",
	"Bártová",
	"Tůmová",
	"Jarošová",
	"Janečková",
	"Sedláková",
	"Kašparová",
	"Müllerová",
	"Stejskalová",
	"Pešková",
	"Fišerová",
	"Švecová",
	"Matějková",
	"Bílková",
	"Slavíková",
	"Ježková",
	"Němečková",
	"Strnadová",
	"Krausová",
	"Beránková",
	"Horáčková",
	"Brožová",
	"Kubíčková",
	"Horváthová",
	"Petrová",
];

module.exports = { maleFirstNames, femaleFirstNames, maleLastNames, femaleLastNames };