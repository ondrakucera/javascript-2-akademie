# Informace pro lektora akademie

Tento dokument popisuje obsah a zamýšlenou výuku akademie. Neobsahuje žádné vyloženě tajné informace, které by
účastníci kurzu nesměli vědět, ale pokud toto čteš právě jako účastník, je možné, že se zbytečně připravíš o řadu
doplňujících informací, které v rámci výuky právě lektor dodá. :-)

## Struktura akademie

Akademie se aktuálně skládá z pěti lekcí:

1. _Objekty, funkce._ Představení objektů a rozšíření znalostí o funkcích. Fungování a použití funkce _map_.
1. _Filtrování, řazení._ Představení fungování _export_ a _import_. Další iterační funkce nad polem.
1. _Načítání dat ze serveru._ Úvod do protokolu HTTP. Práce s funkcí _fetch_ a datovým typem _Promise_.
1. _Asynchronní funkce, práce s časem._ Použití klíčových slov _await_ a _async_. Sada dalších drobnějších
  javascriptových témat.
1. _Objekt jako slovník._ Použití objektu jako datové struktury slovník. Sada dalších drobnějších javascriptových témat.
1. _Aplikace pro správu studentů školy._ Implementace jednoduché aplikace charakteru CRUD.

## Použité ukázky a jejich předpokládané využití

Ukázky jednotlivých lekcí jsou rozděleny do samostatných adresářů, _lecture\_1_ až _lecture\_5_.

Celková myšlenka je taková, že lektor na začátku každé lekce vytvoří v kořenovém adresáři repository (tj. adresáři o
jeden nadřazeném tomuto) adresář odpovídající dané lekci (tedy postupně _lecture\_1_ až _lecture\_5_), a v něm během
lekce buduje takový obsah, aby na konci lekce odpovídal odpovídajícímu obsahu v tomto adresáři. Ukázky pochopitelně
nemusejí být shodné doslova, ale svojí myšlenkou by se měly těm zde přítomným podobat.

Předpokládá se, že po skončení lekce vyučující vždy do své repository přidá aktuální obsah tvořeného adresáře
_lecture\_x_, ať už svůj vlastní, nebo klidně právě zkopírovaný ze souborů v tomto adresáři, a tento obsah následně
účastníkům zpřístupní. Jinými slovy po skončení všech lekcí by budované soubory měly mít obsah obdobný jako soubory v
tomto adresáři (případně zcela stejný).

## Popis lekcí

### Objekty, funkce

První probíranou oblastí (po krátkém opakování) jsou objekty. Cílem je pouze představit je jako datovou strukturu s
pojmenovanými atributy, abychom následně, ať už ve zbývajících lekcích, nebo i navazujících akademiích, mohli
pracovat s poli objektů, které budeme filtrovat, řadit a následně zobrazovat uživateli.

Uprostřed hodiny si účastníci instalují do VS Code rozšíření pro ESLint, Prettier a Editorconfig. Je potřeba myslet na
to, že zatímco rozšíření pro Prettier a Editorconfig fungují rovnou samy, rozšíření pro ESLint vyžaduje, aby byl ESLint
v projektu nainstalován. Z tohoto důvodu je celá tato repository z pohledu ESLintu jeden velký npm projekt, pro nějž je
potřeba nainstalovat moduly.

Potom se navazuje na úvodní povídání o funkcích z JavaScript 1 akademie a rozšiřují se znalosti zčásti o zápis
funkcí šipkovou notací, ale především o princip předávání funkcí jako parametrů jiným funkcím. Cílem je dojít k
tomu, jak funguje funkce _map_ na poli, a jak je tedy možné seznam nějakých hodnot (i třeba objektů) namapovat na
seznam řetězců obsahujících značky elementu _li_, který je pak možné použít pro naplnění _innerHTML_ elementu _ul_
(popř. _ol_).

### Filtrování, řazení

V první části hodiny se představuje princip použití _export_ a _import_, aby bylo možné programy rozdělit do více
souborů.

Hlavním obsahem lekce jsou ovšem iterační funkce nad polem: _forEach_, _filter_, _toSorted_ a _find_. Soubor
_zamestnanci.js_ je potřeba účastníkům poskytnout přes Google Drive (neočekáváme u nich větší znalost ani Gitu, ani
GitHubu).

### Načítání dat ze serveru

První polovina lekce je spíše teoretická. Obsahuje povídání o druzích webových aplikací jako takových, o základech HTTP
protokolu a o formátu JSON.

Druhá polovina obsahuje představení a procvičování práce s funkcí _fetch_ a datovým typem _Promise_. Soubory
_zamestnanci.json_ a _organizacni-jednotky.json_ je potřeba účastníkům poskytnout přes Google Drive. V této části jsou
rovněž použita dvě veřejná HTTP API. Je důležité před samotnou hodinou (resp. lépe ještě před samotným během akademie)
zkontrolovat, že tato dvě API stále fungují (a nezavedla třeba omezení z hlediska _CORS_). Pokud by už k použití nebyla,
je potřeba včas najít nějaká jiná a použité ukázky patřičně upravit.

### Asynchronní funkce, práce s časem

Hlavním obsahem lekce je představení klíčových slov _await_ a _async_, a to především v návaznosti na používání funkce
_fetch_. Soubory _zamestnanci.json_ a _organizacni-jednotky.json_ je potřeba účastníkům poskytnout přes Google Drive.

Zbytek lekce je vyplněn sadou menších a vzájemně nesouvisejících témat, u kterých je ale vhodné, aby se o nich účastníci
alespoň okrajově dozvěděli:

- Oblasti platnosti proměnných.
- Výchozí chování událostí a rušení tohoto chování.
- Práce s časovými údaji pomocí _Date_.

### Objekt jako slovník

Hlavním obsahem lekce je použití objektu jako datové struktury slovník. Zbytek lekce je vyplněn sadou menších a
vzájemně nesouvisejících témat, u kterých je ale vhodné, aby se o nich účastníci alespoň okrajově dozvěděli:

- Podmínkový operátor.
- Funkce _setInterval_ a _setTimeout_.
- Destrukturalizace objektu.

Soubory _zamestnanci.json_ a _organizacni-jednotky.json_ je potřeba účastníkům poskytnout přes Google Drive.

Úplný závěr obsahuje ukázku uvažování nad efektivitou programů prohledávajících velká množství dat. Cílem pochopitelně
není formální definice asymptotické složitosti, ale především ukázat, že při programování může být potřeba nad
takovýmito věcmi přemýšlet.

### Aplikace pro správu studentů školy

Poslední, celodenní lekce je věnována procvičování, a to v podobě aplikace charakteru _CRUD_, konkrétně pracující s
databází studentů přes REST API.

Před lekcí je potřeba vzít celý adresář _lecture\_6_, v něm z adresáře _students-client_ odstranit řešení, tedy všechny
soubory kromě _serve.json_ (tento soubor je naopak nezbytné zachovat) a následně vše účastníkům poskytnout v zazipované
podobě přes Google Drive.

Význam jednotlivých adresářů:

- _students-client:_ v něm se bude aplikace tvořit.
- _students-server-restapi-node:_ obsahuje server poskytující REST API.
- _vzor:_ obsahuje statické HTML soubory sloužící jako ukázky jednotlivých obrazovek aplikace.

Cílem je tedy přetvořit statické ukázky z adresáře vzor ve funkční SPA pracující s daty ze serveru.

V ideálním případě by účastníci aplikaci tvořili samostatně. V praxi to obvykle možné není. Jako vysloveně samostatnou
práci lze zadat úvodní seznam všech studentů, protože to je vlastně zcela shodná úloha, jako se dělala na předchozích
dvou lekcích. I zde je ale potřeba hlídat hodiny, aby se tímto samostatný úvodem nestrávilo příliš mnoho času. Podobně
jednoduchá je ještě obrazovka detailu studenta.

Obrazovky pro vytváření a aktualizaci dat studentů bývají pro účastníky náročnější, a to především kvůli tomu, že si
musejí připomenout, jak se pracuje s formuláři. Je proto pak lepší už tyto obrazovky vytvářet s účastníky společně, než
je to nechat tvořit vyloženě samostatně (hlavně z časových důvodů).

V rámci tvorby aplikace je potřeba účastníkům představit několik drobných novinek. Jedná se především o získání
parametru z URL (pro obrazovky pracující s daty konkrétního studenta) a o používání dodatečných nastavení pro funkci
_fetch_ (použití různých HTTP metod, posílání HTTP hlaviček).

## Poznámky

- Na rozdíl od předchozích akademií pro tuto akademii nemáme zadání domácích úkolů. Můžeme se samozřejmě do budoucna
  zamyslet, jestli bychom nějaká smysluplná zadání nedokázali vymyslet, ale tak či tak považujeme za nezbytné, aby
  účastníci na této úrovni už dokázali sami sobě vymýšlet své vlastní úkoly. Toto je zároveň fakt, který je potřeba na
  hodinách průběžně připomínat a ideálně i občas naznačit, jak by se některá z probraných ukázek dala následně rozvíjet
  nebo modifikovat.
- V javascriptových souborech se pro názvy všech proměnných a funkcí používají (kromě poslední lekce) v češtině
  (respektive cestine). Může to působit zvláštně, ale je to zcela vědomé a léty prověřené rozhodnutí. Díky tomu je v
  jakémkoliv kusu kódu, kterému třeba účastník plně nerozumí, hned na první pohled zřejmé, kdy používáme něco, co je
  zabudováno v JavaScriptu samotném (protože je to anglicky), a kdy používáme něco, co jsme si sami naprogramovali.
  Druhým pozitivním efektem je to, že účastníci nemusejí tolik času trávit přemýšlením tím, jak něco vhodně anglicky
  pojmenovat (pro řadu z nich to nemusí být jednoduché).
- V řadě lekcí se používá připravený seznam několika desítek zaměstnanců, ve kterém se pak v jednotlivých úlohách
  vyhledává. Tento seznam je vygenerován na základě nejčastějších českých jmen a příjmení z Wikipedie prográmkem
  umístěným v adresáři _data_. V tuto chvíli generátor není nikterak sofistikovaný, ale v případě potřeby je možné jej v
  budoucnu vylepšovat.
