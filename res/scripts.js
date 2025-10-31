/**
 * arrTimezones stores all available timezones for the user,
 * including some alias not included in momentJs
 */

const arrTimezones = [
	"ABST",
	"ACST",
	"AEST",
	"AFT",
	"AK",
	"AMT",
	"ARBST",
	"ARST",
	"ART",
	"AST",
	"AWST",
	"AZOST",
	"AZT",
	"BST", // GB alias
	"BTT",
	"CAST",
	"CAUST",
	"CBST",
	"CCST",
	"CDT", // CST6CDT alias
	"CEST",
	"CET",
	"CST", // CST6CDT alias
	"CT", // CST6CDT alias
	"CVT",
	"EAST",
	"EAT",
	"ECT",
	"EDT", // EST5EDT alias
	"EEST",
	"EET",
	"EGST",
	"ESAST",
	"EST",
	"ET", // US/Eastern alias
	"FJT",
	"GET",
	"GMT",
	"GNST",
	"GST",
	"GTBST",
	"HAST",
	"HST",
	"IRKT",
	"IRST",
	"ISST",
	"IST",
	"JST",
	"KRAT",
	"KST",
	"MDT", // MST7MDT alias
	"MEST",
	"MET",
	"MOST",
	"MSK",
	"MST",
	"MSTM",
	"MT",
	"MUT",
	"MVST",
	"MYST",
	"NCAST",
	"NMST",
	"NPT",
	"NST",
	"NZ",
	"NZ-CHAT",
	"NZST",
	"PDT", // PST8PDT alias
	"PETT",
	"PHOT",
	"PKT",
	"PRC",
	"PRST",
	"PSAST",
	"PST", // PST8PDT alias
	"PT", // Canada/Pacific alias
	"ROC",
	"ROK",
	"SAEST",
	"SAPST",
	"SAST",
	"SAWST",
	"SBT",
	"SLT",
	"SMST",
	"SNST",
	"SST",
	"TAST",
	"THA",
	"TIST",
	"TST",
	"UCT",
	"Universal",
	"UST",
	"UTC",
	"VLAT",
	"VST",
	"W-SU",
	"WAST",
	"WET",
	"WPST",
	"YAKT",
	"YEKT",
	"Zulu",
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa",
    "Africa/Algiers",
    "Africa/Asmara",
    "Africa/Asmera",
    "Africa/Bamako",
    "Africa/Bangui",
    "Africa/Banjul",
    "Africa/Bissau",
    "Africa/Blantyre",
    "Africa/Brazzaville",
    "Africa/Bujumbura",
    "Africa/Cairo",
    "Africa/Casablanca",
    "Africa/Ceuta",
    "Africa/Conakry",
    "Africa/Dakar",
    "Africa/Dar_es_Salaam",
    "Africa/Djibouti",
    "Africa/Douala",
    "Africa/El_Aaiun",
    "Africa/Freetown",
    "Africa/Gaborone",
    "Africa/Harare",
    "Africa/Johannesburg",
    "Africa/Juba",
    "Africa/Kampala",
    "Africa/Khartoum",
    "Africa/Kigali",
    "Africa/Kinshasa",
    "Africa/Lagos",
    "Africa/Libreville",
    "Africa/Lome",
    "Africa/Luanda",
    "Africa/Lubumbashi",
    "Africa/Lusaka",
    "Africa/Malabo",
    "Africa/Maputo",
    "Africa/Maseru",
    "Africa/Mbabane",
    "Africa/Mogadishu",
    "Africa/Monrovia",
    "Africa/Nairobi",
    "Africa/Ndjamena",
    "Africa/Niamey",
    "Africa/Nouakchott",
    "Africa/Ouagadougou",
    "Africa/Porto-Novo",
    "Africa/Sao_Tome",
    "Africa/Timbuktu",
    "Africa/Tripoli",
    "Africa/Tunis",
    "Africa/Windhoek",
    "America/Adak",
    "America/Anchorage",
    "America/Anguilla",
    "America/Antigua",
    "America/Araguaina",
    "America/Argentina/Buenos_Aires",
    "America/Argentina/Catamarca",
    "America/Argentina/ComodRivadavia",
    "America/Argentina/Cordoba",
    "America/Argentina/Jujuy",
    "America/Argentina/La_Rioja",
    "America/Argentina/Mendoza",
    "America/Argentina/Rio_Gallegos",
    "America/Argentina/Salta",
    "America/Argentina/San_Juan",
    "America/Argentina/San_Luis",
    "America/Argentina/Tucuman",
    "America/Argentina/Ushuaia",
    "America/Aruba",
    "America/Asuncion",
    "America/Atikokan",
    "America/Atka",
    "America/Bahia",
    "America/Bahia_Banderas",
    "America/Barbados",
    "America/Belem",
    "America/Belize",
    "America/Blanc-Sablon",
    "America/Boa_Vista",
    "America/Bogota",
    "America/Boise",
    "America/Buenos_Aires",
    "America/Cambridge_Bay",
    "America/Campo_Grande",
    "America/Cancun",
    "America/Caracas",
    "America/Catamarca",
    "America/Cayenne",
    "America/Cayman",
    "America/Chicago",
    "America/Chihuahua",
    "America/Ciudad_Juarez",
    "America/Coral_Harbour",
    "America/Cordoba",
    "America/Costa_Rica",
    "America/Creston",
    "America/Cuiaba",
    "America/Curacao",
    "America/Danmarkshavn",
    "America/Dawson",
    "America/Dawson_Creek",
    "America/Denver",
    "America/Detroit",
    "America/Dominica",
    "America/Edmonton",
    "America/Eirunepe",
    "America/El_Salvador",
    "America/Ensenada",
    "America/Fort_Nelson",
    "America/Fort_Wayne",
    "America/Fortaleza",
    "America/Glace_Bay",
    "America/Godthab",
    "America/Goose_Bay",
    "America/Grand_Turk",
    "America/Grenada",
    "America/Guadeloupe",
    "America/Guatemala",
    "America/Guayaquil",
    "America/Guyana",
    "America/Halifax",
    "America/Havana",
    "America/Hermosillo",
    "America/Indiana/Indianapolis",
    "America/Indiana/Knox",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Tell_City",
    "America/Indiana/Vevay",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indianapolis",
    "America/Inuvik",
    "America/Iqaluit",
    "America/Jamaica",
    "America/Jujuy",
    "America/Juneau",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Knox_IN",
    "America/Kralendijk",
    "America/La_Paz",
    "America/Lima",
    "America/Los_Angeles",
    "America/Louisville",
    "America/Lower_Princes",
    "America/Maceio",
    "America/Managua",
    "America/Manaus",
    "America/Marigot",
    "America/Martinique",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Mendoza",
    "America/Menominee",
    "America/Merida",
    "America/Metlakatla",
    "America/Mexico_City",
    "America/Miquelon",
    "America/Moncton",
    "America/Monterrey",
    "America/Montevideo",
    "America/Montreal",
    "America/Montserrat",
    "America/Nassau",
    "America/New_York",
    "America/Nipigon",
    "America/Nome",
    "America/Noronha",
    "America/North_Dakota/Beulah",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/Nuuk",
    "America/Ojinaga",
    "America/Panama",
    "America/Pangnirtung",
    "America/Paramaribo",
    "America/Phoenix",
    "America/Port-au-Prince",
    "America/Port_of_Spain",
    "America/Porto_Acre",
    "America/Porto_Velho",
    "America/Puerto_Rico",
    "America/Punta_Arenas",
    "America/Rainy_River",
    "America/Rankin_Inlet",
    "America/Recife",
    "America/Regina",
    "America/Resolute",
    "America/Rio_Branco",
    "America/Rosario",
    "America/Santa_Isabel",
    "America/Santarem",
    "America/Santiago",
    "America/Santo_Domingo",
    "America/Sao_Paulo",
    "America/Scoresbysund",
    "America/Shiprock",
    "America/Sitka",
    "America/St_Barthelemy",
    "America/St_Johns",
    "America/St_Kitts",
    "America/St_Lucia",
    "America/St_Thomas",
    "America/St_Vincent",
    "America/Swift_Current",
    "America/Tegucigalpa",
    "America/Thule",
    "America/Thunder_Bay",
    "America/Tijuana",
    "America/Toronto",
    "America/Tortola",
    "America/Vancouver",
    "America/Virgin",
    "America/Whitehorse",
    "America/Winnipeg",
    "America/Yakutat",
    "America/Yellowknife",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Macquarie",
    "Antarctica/Mawson",
    "Antarctica/McMurdo",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/South_Pole",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "Arctic/Longyearbyen",
    "Asia/Aden",
    "Asia/Almaty",
    "Asia/Amman",
    "Asia/Anadyr",
    "Asia/Aqtau",
    "Asia/Aqtobe",
    "Asia/Ashgabat",
    "Asia/Ashkhabad",
    "Asia/Atyrau",
    "Asia/Baghdad",
    "Asia/Bahrain",
    "Asia/Baku",
    "Asia/Bangkok",
    "Asia/Barnaul",
    "Asia/Beirut",
    "Asia/Bishkek",
    "Asia/Brunei",
    "Asia/Calcutta",
    "Asia/Chita",
    "Asia/Choibalsan",
    "Asia/Chongqing",
    "Asia/Chungking",
    "Asia/Colombo",
    "Asia/Dacca",
    "Asia/Damascus",
    "Asia/Dhaka",
    "Asia/Dili",
    "Asia/Dubai",
    "Asia/Dushanbe",
    "Asia/Famagusta",
    "Asia/Gaza",
    "Asia/Harbin",
    "Asia/Hebron",
    "Asia/Ho_Chi_Minh",
    "Asia/Hong_Kong",
    "Asia/Hovd",
    "Asia/Irkutsk",
    "Asia/Istanbul",
    "Asia/Jakarta",
    "Asia/Jayapura",
    "Asia/Jerusalem",
    "Asia/Kabul",
    "Asia/Kamchatka",
    "Asia/Karachi",
    "Asia/Kashgar",
    "Asia/Kathmandu",
    "Asia/Katmandu",
    "Asia/Khandyga",
    "Asia/Kolkata",
    "Asia/Krasnoyarsk",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Asia/Kuwait",
    "Asia/Macao",
    "Asia/Macau",
    "Asia/Magadan",
    "Asia/Makassar",
    "Asia/Manila",
    "Asia/Muscat",
    "Asia/Nicosia",
    "Asia/Novokuznetsk",
    "Asia/Novosibirsk",
    "Asia/Omsk",
    "Asia/Oral",
    "Asia/Phnom_Penh",
    "Asia/Pontianak",
    "Asia/Pyongyang",
    "Asia/Qatar",
    "Asia/Qostanay",
    "Asia/Qyzylorda",
    "Asia/Rangoon",
    "Asia/Riyadh",
    "Asia/Saigon",
    "Asia/Sakhalin",
    "Asia/Samarkand",
    "Asia/Seoul",
    "Asia/Shanghai",
    "Asia/Singapore",
    "Asia/Srednekolymsk",
    "Asia/Taipei",
    "Asia/Tashkent",
    "Asia/Tbilisi",
    "Asia/Tehran",
    "Asia/Tel_Aviv",
    "Asia/Thimbu",
    "Asia/Thimphu",
    "Asia/Tokyo",
    "Asia/Tomsk",
    "Asia/Ujung_Pandang",
    "Asia/Ulaanbaatar",
    "Asia/Ulan_Bator",
    "Asia/Urumqi",
    "Asia/Ust-Nera",
    "Asia/Vientiane",
    "Asia/Vladivostok",
    "Asia/Yakutsk",
    "Asia/Yangon",
    "Asia/Yekaterinburg",
    "Asia/Yerevan",
    "Atlantic/Azores",
    "Atlantic/Bermuda",
    "Atlantic/Canary",
    "Atlantic/Cape_Verde",
    "Atlantic/Faeroe",
    "Atlantic/Faroe",
    "Atlantic/Jan_Mayen",
    "Atlantic/Madeira",
    "Atlantic/Reykjavik",
    "Atlantic/South_Georgia",
    "Atlantic/St_Helena",
    "Atlantic/Stanley",
    "Australia/ACT",
    "Australia/Adelaide",
    "Australia/Brisbane",
    "Australia/Broken_Hill",
    "Australia/Canberra",
    "Australia/Currie",
    "Australia/Darwin",
    "Australia/Eucla",
    "Australia/Hobart",
    "Australia/LHI",
    "Australia/Lindeman",
    "Australia/Lord_Howe",
    "Australia/Melbourne",
    "Australia/NSW",
    "Australia/North",
    "Australia/Perth",
    "Australia/Queensland",
    "Australia/South",
    "Australia/Sydney",
    "Australia/Tasmania",
    "Australia/Victoria",
    "Australia/West",
    "Australia/Yancowinna",
    "Brazil/Acre",
    "Brazil/DeNoronha",
    "Brazil/East",
    "Brazil/West",
    "Canada/Atlantic",
    "Canada/Central",
    "Canada/Eastern",
    "Canada/Mountain",
    "Canada/Newfoundland",
    "Canada/Pacific",
    "Canada/Saskatchewan",
    "Canada/Yukon",
    "Chile/Continental",
    "Chile/EasterIsland",
    "Cuba",
    "Egypt",
    "Eire",
    "Europe/Amsterdam",
    "Europe/Andorra",
    "Europe/Astrakhan",
    "Europe/Athens",
    "Europe/Belfast",
    "Europe/Belgrade",
    "Europe/Berlin",
    "Europe/Bratislava",
    "Europe/Brussels",
    "Europe/Bucharest",
    "Europe/Budapest",
    "Europe/Busingen",
    "Europe/Chisinau",
    "Europe/Copenhagen",
    "Europe/Dublin",
    "Europe/Gibraltar",
    "Europe/Guernsey",
    "Europe/Helsinki",
    "Europe/Isle_of_Man",
    "Europe/Istanbul",
    "Europe/Jersey",
    "Europe/Kaliningrad",
    "Europe/Kiev",
    "Europe/Kirov",
    "Europe/Kyiv",
    "Europe/Lisbon",
    "Europe/Ljubljana",
    "Europe/London",
    "Europe/Luxembourg",
    "Europe/Madrid",
    "Europe/Malta",
    "Europe/Mariehamn",
    "Europe/Minsk",
    "Europe/Monaco",
    "Europe/Moscow",
    "Europe/Nicosia",
    "Europe/Oslo",
    "Europe/Paris",
    "Europe/Podgorica",
    "Europe/Prague",
    "Europe/Riga",
    "Europe/Rome",
    "Europe/Samara",
    "Europe/San_Marino",
    "Europe/Sarajevo",
    "Europe/Saratov",
    "Europe/Simferopol",
    "Europe/Skopje",
    "Europe/Sofia",
    "Europe/Stockholm",
    "Europe/Tallinn",
    "Europe/Tirane",
    "Europe/Tiraspol",
    "Europe/Ulyanovsk",
    "Europe/Uzhgorod",
    "Europe/Vaduz",
    "Europe/Vatican",
    "Europe/Vienna",
    "Europe/Vilnius",
    "Europe/Volgograd",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Zaporozhye",
    "Europe/Zurich",
    "GB",
    "GB-Eire",
    "Greenwich",
    "Hongkong",
    "Iceland",
    "Indian/Antananarivo",
    "Indian/Chagos",
    "Indian/Christmas",
    "Indian/Cocos",
    "Indian/Comoro",
    "Indian/Kerguelen",
    "Indian/Mahe",
    "Indian/Maldives",
    "Indian/Mauritius",
    "Indian/Mayotte",
    "Indian/Reunion",
    "Iran",
    "Israel",
    "Jamaica",
    "Japan",
    "Kwajalein",
    "Libya",
    "Mexico/BajaNorte",
    "Mexico/BajaSur",
    "Mexico/General",
    "Navajo",
    "Pacific/Apia",
    "Pacific/Auckland",
    "Pacific/Bougainville",
    "Pacific/Chatham",
    "Pacific/Chuuk",
    "Pacific/Easter",
    "Pacific/Efate",
    "Pacific/Enderbury",
    "Pacific/Fakaofo",
    "Pacific/Fiji",
    "Pacific/Funafuti",
    "Pacific/Galapagos",
    "Pacific/Gambier",
    "Pacific/Guadalcanal",
    "Pacific/Guam",
    "Pacific/Honolulu",
    "Pacific/Johnston",
    "Pacific/Kanton",
    "Pacific/Kiritimati",
    "Pacific/Kosrae",
    "Pacific/Kwajalein",
    "Pacific/Majuro",
    "Pacific/Marquesas",
    "Pacific/Midway",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Norfolk",
    "Pacific/Noumea",
    "Pacific/Pago_Pago",
    "Pacific/Palau",
    "Pacific/Pitcairn",
    "Pacific/Pohnpei",
    "Pacific/Ponape",
    "Pacific/Port_Moresby",
    "Pacific/Rarotonga",
    "Pacific/Saipan",
    "Pacific/Samoa",
    "Pacific/Tahiti",
    "Pacific/Tarawa",
    "Pacific/Tongatapu",
    "Pacific/Truk",
    "Pacific/Wake",
    "Pacific/Wallis",
    "Pacific/Yap",
    "Poland",
    "Portugal",
    "Singapore",
    "Turkey",
    "US/Alaska",
    "US/Aleutian",
    "US/Arizona",
    "US/Central",
    "US/East-Indiana",
    "US/Eastern",
    "US/Hawaii",
    "US/Indiana-Starke",
    "US/Michigan",
    "US/Mountain",
    "US/Pacific",
    "US/Samoa",
];

/**
 * Initializer triggered when the page is loaded
 */
document.addEventListener('readystatechange', e => {
    if (e.target.readyState === "complete") {
        // Purge inputs' cache
        let strCurr = moment().format();
        strCurr = strCurr.substr(0, strCurr.lastIndexOf('+'));
        document.getElementById('input-date').value = strCurr.substr(0, strCurr.lastIndexOf(':'));
        document.getElementById('input-minute').value = '';
        document.getElementById('input-hour').value = '';
        document.getElementById('input-day').value = '';
        document.getElementById('input-week').value = '';
        document.getElementById('input-month').value = '';
        document.getElementById('input-year').value = '';
        document.getElementById('input-timezone-s').value = '';
        document.getElementById('input-timezone-s').placeholder = moment.tz.guess();
        document.getElementById('input-timezone-e').value = '';
        document.getElementById('input-timezone-e').placeholder = moment.tz.guess();
        document.getElementById('input-shift-s').value = '+0';
        document.getElementById('input-shift-e').value = '+0';

        // Populate available select inputs
        let strTimezones = '';
        arrTimezones.forEach((e) => {
            strTimezones += `<option>${e}</option>`;
        });
        document.querySelectorAll('.list-timezone').forEach((e) => {
            e.innerHTML = strTimezones;
        });

        // Trigger date processing when inputs changes
        document.querySelectorAll('input').forEach((e) => {
            e.addEventListener('change', () => {
                process();
            });
        });
        document.querySelectorAll('select').forEach((e) => {
            e.addEventListener('change', () => {
                process();
            });
        });

        // Retrieve inputs states from current Url
        parseUrl();
    }
}, false);

/**
 * Parse current url to populate users inputs
 */
function parseUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlDat = urlParams.get('dat');
    
    if (urlDat !== null) {
        const strDat = LZUTF8.decompress(urlDat, { inputEncoding: "Base64", outputEncoding: "String" });
        console.log(strDat);
        const arrDat = JSON.parse(strDat);
        
        document.getElementById('input-date').value = arrDat.time;
        document.getElementById('input-timezone-s').value = arrDat.tz_s;
        document.getElementById('input-shift-s').value = arrDat.sh_s;
        document.getElementById('input-minute').value = arrDat.mn_e;
        document.getElementById('input-hour').value = arrDat.hr_e;
        document.getElementById('input-day').value = arrDat.dy_e;
        document.getElementById('input-week').value = arrDat.wk_e;
        document.getElementById('input-month').value = arrDat.mh_e;
        document.getElementById('input-year').value = arrDat.yr_e;
        document.getElementById('input-timezone-e').value = arrDat.tz_e;
        document.getElementById('input-shift-e').value = arrDat.sh_e;

        process(false);
    }
}

/**
 * alias() is a function which retrieve a momentJs timezone from its alias
 * @param {string} _strAlias 
 * @returns 
 */
function alias(_strAlias) {
    const arrAlias = [
        ['BST', 'GB'],
        ['ET', 'US/Eastern'],
        ['PT', 'Canada/Pacific'],
        ['CT', 'CST6CDT'],
        ['CDT', 'CST6CDT'],
        ['EDT', 'EST5EDT'],
        ['MDT', 'MST7MDT'],
        ['PST', 'PST8PDT'],
        ['PDT', 'PST8PDT'],
		['MT', 'US/Mountain'], // Also America/Denver
		['AK', 'America/Anchorage'], // Also America/Anchorage
		['HAST', 'Pacific/Honolulu'], // Also Pacific/Honolulu
		['AST', 'Canada/Atlantic'], // Also America/Aruba
		['MOST', 'Africa/Casablanca'], // Also Africa/Casablanca
		['GST', 'Africa/Casablanca'], // Also Africa/Casablanca
		['CET', 'Europe/Belgrade'], // Also Europe/Belgrade
		['CEST', 'Europe/Sarajevo'], // Also Europe/Sarajevo
		['ECT', 'Africa/Brazzaville'], // Also Africa/Douala
		['JST', 'Japan'],
		['GTBST', 'Europe/Athens'], // Also Europe/Bucharest
		['MEST', 'Africa/Cairo'], // Also Africa/Cairo
		['EGST', 'Africa/Cairo'], // Also Africa/Cairo
		['SST', 'Africa/Cairo'], // Also Africa/Cairo
		['SAST', 'Africa/Harare'], // Also Africa/Harare
		['ISST', 'Asia/Jerusalem'], // Also Asia/Jerusalem
		['EEST', 'Asia/Jerusalem'], // Also Asia/Jerusalem
		['NMST', 'Asia/Jerusalem'], // Also Asia/Jerusalem
		['ARST', 'Asia/Baghdad'], // Also Asia/Baghdad
		['ABST', 'Asia/Kuwait'], // Also Asia/Kuwait
		['MSK', 'Europe/Moscow'], // Also Europe/Moscow
		['EAT', 'Asia/Kuwait'], // Also Asia/Kuwait
		['IRST', 'Asia/Tehran'], // Also Asia/Tehran
		['ARBST', 'Asia/Muscat'], // Also Asia/Muscat
		['AZT', 'Asia/Baku'], // Also Asia/Baku
		['MUT', 'Asia/Baku'], // Also Asia/Baku
		['GET', 'Asia/Baku'], // Also Asia/Baku
		['AMT', 'Asia/Baku'], // Also Asia/Baku
		['AFT', 'Asia/Baku'], // Also Asia/Baku
		['YEKT', 'Asia/Tashkent'], // Also Asia/Yekaterinburg
		['PKT', 'Asia/Tashkent'], // Also Asia/Karachi
		['WAST', 'Asia/Tashkent'], // Also Asia/Yekaterinburg
		['IST', 'Asia/Calcutta'], // Also Asia/Calcutta
		['SLT', 'Asia/Calcutta'], // Also Asia/Calcutta
		['NPT', 'Asia/Katmandu'], // Also Asia/Katmandu
		['BTT', 'Asia/Dhaka'], // Also Asia/Dhaka
		['NCAST', 'Asia/Almaty'], // Also Asia/Dhaka
		['MYST', 'Asia/Rangoon'], // Also Asia/Rangoon
		['THA', 'Asia/Bangkok'], // Also Asia/Bangkok
		['KRAT', 'Asia/Bangkok'], // Also Asia/Bangkok
		['IRKT', 'Asia/Irkutsk'], // Also Asia/Irkutsk
		['SNST', 'Asia/Singapore'], // Also Asia/Taipei
		['AWST', 'Australia/Perth'], // Also Australia/Perth
		['TIST', 'Asia/Taipei'], // Also Asia/Taipei
		['UST', 'Asia/Taipei'], // Also Asia/Taipei
		['TST', 'Asia/Tokyo'], // Also Asia/Tokyo
		['KST', 'Asia/Seoul'], // Also Asia/Seoul
		['YAKT', 'Asia/Yakutsk'], // Also Asia/Yakutsk
		['CAUST', 'Australia/Adelaide'], // Also Australia/Adelaide
		['ACST', 'Australia/Darwin'], // Also Australia/Darwin
		['EAST', 'Australia/Brisbane'], // Also Australia/Brisbane
		['AEST', 'Australia/Sydney'], // Also Australia/Sydney
		['WPST', 'Pacific/Guam'], // Also Pacific/Guam
		['TAST', 'Australia/Hobart'], // Also Australia/Hobart
		['VLAT', 'Asia/Vladivostok'], // Also Asia/Vladivostok
		['SBT', 'Pacific/Guadalcanal'], // Also Pacific/Guadalcanal
		['NZST', 'Pacific/Auckland'], // Also Pacific/Auckland
		['FJT', 'Pacific/Fiji'], // Also Pacific/Fiji
		['PETT', 'Asia/Kamchatka'], // Also Etc/GMT+12
		['PHOT', 'Pacific/Tongatapu'], // Also Pacific/Tongatapu
		['AZOST', 'Atlantic/Azores'], // Also Atlantic/Azores
		['CVT', 'Atlantic/Cape Verde'], // Also Atlantic/Cape Verde
		['ESAST', 'America/Sao_Paulo'], // Also America/Sao_Paulo
		['ART', 'America/Buenos_Aires'], // Also America/Buenos Aires
		['GNST', 'America/Godthab'], // Also America/Godthab
		['MVST', 'America/Godthab'], // Also America/Montevideo
		['NST', 'Canada/Newfoundland'], // Also Canada/Newfoundland
		['PRST', 'Canada/Atlantic'], // Also America/Aruba
		['CBST', 'Canada/Atlantic'], // Also America/Aruba
		['SAWST', 'America/Santiago'], // Also America/Santiago
		['PSAST', 'America/Santiago'], // Also America/Santiago
		['VST', 'America/Caracas'], // Also America/Caracas
		['SAPST', 'America/Bogota'], // Also America/Bogota
		['CAST', 'America/El_Salvador'], // Also America/Mexico_City
		['CCST', 'Canada/Saskatchewan'], // Also Canada/Saskatchewan
		['MSTM', 'America/Chihuahua'], // Also America/Mazatlan
		['SMST', 'Pacific/Midway'], // Also Pacific/Midway
    ];

    for (let i = 0; i < arrAlias.length; ++i) {
        if (_strAlias === arrAlias[i][0])
            return arrAlias[i][1];
    }

    return _strAlias;
}

/**
 * process() is a function which convert a date from a timezone to another one,
 * apply timezone offsets,
 * and add or substract minutes, hours, days, months and years to it.
 * @param {string} _bUpdUrl Does the URL has to be updated
 * @returns 
 */
function process(_bUpdUrl = true) {
    // Retrieve the browser langugage
    const locale = moment.locale(navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language);
    moment.locale(locale);

    // Store start and end timezones
    const tzSOrigin = document.getElementById('input-timezone-s').value || moment.tz.guess();
    const tzEOrigin = document.getElementById('input-timezone-e').value || moment.tz.guess();

    // Translate potential alias to timezone name
    const tzS = alias(tzSOrigin);
    const tzE = alias(tzEOrigin);

    // Check if the timezone exists in momentJs lib
    if (!moment.tz.names().includes(tzS)) {
        createToast("&#9888; Erreur", `Fuseau horaire de départ "${tzS}" invalide.`);
        return;
    }
    if (!moment.tz.names().includes(tzE)) {
        createToast("&#9888; Erreur", `Fuseau horaire d'arrivée "${tzE}" invalide.`);
        return;
    }

    // Convert input start timezone to momentJs zone
    let tpDateS = moment.tz(document.getElementById('input-date').value, tzS);
    // Add zone offset to start timezone
    tpDateS.subtract(parseInt(document.getElementById('input-shift-s').value), 'hours');

    // Convert end start timezone to momentJs zone
    let tpDateE = moment.tz(tpDateS, tzE);
    // Add zone offset to end timezone
    tpDateE.add(parseInt(document.getElementById('input-shift-e').value), 'hours');
    
    // Calculate how many minutes the user wants to add to the date
    const userOffset =
        (parseInt(document.getElementById('input-minute').value || 0)         ) +
        (parseInt(document.getElementById('input-hour').value   || 0) * 60    ) +
        (parseInt(document.getElementById('input-day').value    || 0) * 1440  ) +
        (parseInt(document.getElementById('input-week').value   || 0) * 10080 ) +
        (parseInt(document.getElementById('input-month').value  || 0) * 43800 ) +
        (parseInt(document.getElementById('input-year').value   || 0) * 525600)
    ;
    
    // Add user offset to the date
    tpDateE.add(userOffset, 'minutes');

    // Populate results div with formated locale
    const fragDiv1 = `<div class="anim">${tpDateE.format('LLLL')}</div>`;
    if (fragDiv1 !== document.getElementById('res-1').innerHTML)
        document.getElementById('res-1').innerHTML = fragDiv1;
    const fragDiv2 = `<div class="anim">${tpDateE.format('L LT')}</div>`;
    if (fragDiv2 !== document.getElementById('res-2').innerHTML)
        document.getElementById('res-2').innerHTML = fragDiv2;

    // Update the title page
    const strTitle = `Dates \u00B7 ${tzSOrigin} \u25B8 ${tzEOrigin}`;
    document.title = strTitle;

	// Update current URL
    if (_bUpdUrl) {
        let datUrl = {
            time: document.getElementById('input-date').value,
            tz_s: document.getElementById('input-timezone-s').value,
            sh_s: document.getElementById('input-shift-s').value,
            mn_e: document.getElementById('input-minute').value,
            hr_e: document.getElementById('input-hour').value,
            dy_e: document.getElementById('input-day').value,
            wk_e: document.getElementById('input-week').value,
            mh_e: document.getElementById('input-month').value,
            yr_e: document.getElementById('input-year').value,
            tz_e: document.getElementById('input-timezone-e').value,
            sh_e: document.getElementById('input-shift-e').value,
        };
        const datArr = JSON.stringify(datUrl);
        const datStr = LZUTF8.compress(datArr, { outputEncoding:"Base64" });
        window.history.pushState(strTitle, strTitle, `?dat=${datStr}`);
    }
}

/**
 * Create a toast notification
 * @param {string} _strTitle 
 * @param {string} _strDesc 
 */
var iToastID = 0;
function createToast(_strTitle, _strDesc) {
    const toastContainer =
    `<div class="p-2 z-index-3">
        <div id="toast${iToastID}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">${_strTitle}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
            ${_strDesc}
            </div>
        </div>
    </div>`;

    const strToastId = `toast${iToastID}`;
    document.getElementById('toasts-list').insertAdjacentHTML('afterbegin', toastContainer);
    test = document.getElementById(strToastId);
    const toast = bootstrap.Toast.getOrCreateInstance(test);
    toast.show();

    setTimeout(() => document.getElementById(strToastId).parentNode.remove(), 8000);

    ++iToastID;
}