const arrTimezones_raw = [
    {"ACDT # (Australian Central Daylight Saving Time)": +630},
    {"ACST # (Australian Central Standard Time)": +570},
    {"ACWST # (Australian Central Western Standard Time (unofficial))": +525},
    {"ADT # (Atlantic Daylight Time)": -180},
    {"AEDT # (Australian Eastern Daylight Saving Time)": +660},
    {"AEST # (Australian Eastern Standard Time)": +600},
    {"AKDT # (Alaska Daylight Time)": -480},
    {"AKST # (Alaska Standard Time)": -540},
    {"AMST # (Amazon Summer Time (Brazil))": -180},
    {"AMT # (Amazon Time (Brazil))": -240},
    {"AST # (Arabia Standard Time)": +180},
    {"AST # (Atlantic Standard Time)": -240},
    {"AWST # (Australian Western Standard Time)": +480},
    {"BIOT # (British Indian Ocean Time)": +360},
    {"BIT # (Brasília Summer Time)": -720},
    {"BOT # (Brasília Time)": -240},
    {"CAT # (Central Africa Time)": +120},
    {"CDT # (Central Daylight Time (North America))": -300},
    {"CEST # (Central European Summer Time)": +120},
    {"CET # (Central European Time)": +60},
    {"CST # (Central Standard Time (Central America))": -360},
    {"EAT # (East Africa Time)": +180},
    {"EDT # (Eastern Daylight Time (North America))": -240},
    {"EEST # (Eastern European Summer Time)": +180},
    {"EET # (Eastern European Time)": +120},
    {"EGST # (Eastern Greenland Summer Time)": +0},
    {"EGT # (Eastern Greenland Time)": -60},
    {"EST # (Eastern Standard Time (North America))": -300},
    {"FET # (Further-eastern European Time)": +180},
    {"GMT # (Greenwich Mean Time)": +0},
    {"KST # (Korea Standard Time)": +540},
    {"MET # (Middle European Time)": +60},
    {"MEST # (Middle European Summer Time)": +120},
    {"PDT # (Pacific Daylight Time (North America))": -420},
    {"PST # (Pacific Standard Time (North America))": -480},
    {"SAST # (South African Standard Time)": +120},
    {"SGT # (Singapore Time)": +480},
    {"SST # (Singapore Standard Time)": -660},
    {"TST # (Taiwan Standard Time)": +480},
    {"UTC # (Coordinated Universal Time)": +0},
    {"WAST # (West Africa Summer Time)": +120},
    {"WAT # (West Africa Time)": +60},
    {"WEST # (Western European Summer Time)": +60},
    {"WET # (Western European Time)": +0},
    {"WIB # (Western Indonesian Time)": +420},
    {"WIT # (Eastern Indonesian Time)": +540},
    {"WITA # (Central Indonesia Time)": +480},
    {"WGST # (West Greenland Summer Time)": -120},
    {"WGT # (West Greenland Time)": -180},
    {"WST # (Western Standard Time)": +480},
];

const arrDays = [
    'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
];
const arrMongths = [
    'jan.', 'fév.', 'mars', 'avr.', 'mai', 'juin', 'juill.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'
];
var arrTimezones = [];
document.addEventListener('readystatechange', e => {
    if (e.target.readyState === "complete") {
        let dtCurr = new Date();
        dtCurr.setMinutes(dtCurr.getMinutes() + (new Date().getTimezoneOffset() * -1));
        const strCurr = dtCurr.toISOString();
        document.getElementById('input-date').value = strCurr.substr(0, strCurr.lastIndexOf(':'));
        document.getElementById('input-minute').value = '';
        document.getElementById('input-hour').value = '';
        document.getElementById('input-day').value = '';
        document.getElementById('input-week').value = '';
        document.getElementById('input-month').value = '';
        document.getElementById('input-year').value = '';
        document.getElementById('input-timezone-s').value = '';
        document.getElementById('input-timezone-s').placeholder = Intl.DateTimeFormat().resolvedOptions().timeZone;
        document.getElementById('input-timezone-e').value = '';
        document.getElementById('input-timezone-e').placeholder = Intl.DateTimeFormat().resolvedOptions().timeZone;

        for (let i = 0; i < arrTimezones_raw.length; ++i) {
            const name = Object.keys(arrTimezones_raw[i])[0];
            const time = Object.values(arrTimezones_raw[i])[0];
        
            for (let i = -7; i < 0; ++i) {
                const nameMinus = name.replace('#', i.toString());
                const timeMinus = time + ((i+1) * 60);
                var obj = {};
                obj[nameMinus] = timeMinus;
                arrTimezones.push(obj);
            }
            
            const nameClean = name.replace('# ', '');
            var obj = {};
            obj[nameClean] = time;
            arrTimezones.push(obj);
        
            for (let i = 1; i < 8; ++i) {
                const namePlus = name.replace('#', '+' + i.toString());
                const timePlus = time + (i * 60);
                var obj = {};
                obj[namePlus] = timePlus;
                arrTimezones.push(obj);
            }
        }

        let strTimezones = '';
        arrTimezones.forEach((e) => {
            strTimezones += `<option>${Object.keys(e)[0]}</option>`;
        });
        document.querySelectorAll('.list-timezone').forEach((e) => {
            e.innerHTML = strTimezones;
        });

        document.querySelectorAll('input').forEach((e) => {
            e.addEventListener('change', () => {
                process();
            });
            if (e.id !== 'input-timezone-s'
            && e.id !== 'input-timezone-e')
                e.addEventListener('input', () => {
                    process();
                });
        });

        process(true);
    }
}, false);

function process(_startup = false) {
    let tzFndBeg = false,
        tzFndEnd = false,
        tzValBeg = undefined,
        tzValEnd = undefined;

    if (!_startup) {
        for (let i = 0; i < arrTimezones.length; ++i) {
            const tzSelBeg = document.getElementById('input-timezone-s').value;
            const tzSelEnd = document.getElementById('input-timezone-e').value;
            const tzSelected = Object.keys(arrTimezones[i])[0];

            if (tzFndBeg === false
                && tzSelBeg === tzSelected) {
                tzFndBeg = true;
                tzValBeg = Object.values(arrTimezones[i])[0];
            }

            if (tzFndEnd === false
                && tzSelEnd === tzSelected) {
                tzFndEnd = true;
                tzValEnd = Object.values(arrTimezones[i])[0];
            }
        }
    }

    const bNan = isNaN(document.getElementById('input-minute').value || 0) || isNaN(document.getElementById('input-hour').value || 0) || isNaN(document.getElementById('input-day').value || 0)
        || isNaN(document.getElementById('input-week').value || 0) || isNaN(document.getElementById('input-month').value || 0) || isNaN(document.getElementById('input-year').value || 0);
    
    if (document.getElementById('input-timezone-s').value.length > 0
    && !tzFndBeg) {
        document.getElementById('res-1').innerHTML = 'beg';
        document.getElementById('res-2').innerHTML = `<div class="anim">Fuseau horaire de départ invalide.</div>`;
    }
    else if (document.getElementById('input-timezone-e').value.length > 0
        && !tzFndEnd) {
        document.getElementById('res-1').innerHTML = 'end';
        document.getElementById('res-2').innerHTML = `<div class="anim">Fuseau horaire d'arrivée invalide.</div>`;
    }
    else if (bNan) {
        if (isNaN(document.getElementById('input-minute').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les minutes renseignées ne sont pas un nombre.</div>`;
        else if (isNaN(document.getElementById('input-hour').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les heures renseignées ne sont pas un nombre.</div>`;        
        else if (isNaN(document.getElementById('input-day').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les jours renseignés ne sont pas un nombre.</div>`;
        else if (isNaN(document.getElementById('input-week').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les semaines renseignées ne sont pas un nombre.</div>`;
        else if (isNaN(document.getElementById('input-month').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les mois renseignés ne sont pas un nombre.</div>`;
        else if (isNaN(document.getElementById('input-year').value || 0))
            document.getElementById('res-2').innerHTML = `<div class="anim">Les années renseignées ne sont pas un nombre.</div>`;

        document.getElementById('res-1').innerHTML = '';
    }
    else {
        const lang = Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || navigator.userLanguage;
        const tzOffset = new Date().getTimezoneOffset() * -1;
        const timezoneStart = tzValBeg ?? tzOffset;
        const timezoneEnd = tzValEnd ?? tzOffset;
        let dateProc = new Date(document.getElementById('input-date').value);

        const userOffset =
            (parseInt(document.getElementById('input-minute').value || 0)         ) +
            (parseInt(document.getElementById('input-hour').value   || 0) * 60    ) +
            (parseInt(document.getElementById('input-day').value    || 0) * 1440  ) +
            (parseInt(document.getElementById('input-week').value   || 0) * 10080 ) +
            (parseInt(document.getElementById('input-month').value  || 0) * 43800 ) +
            (parseInt(document.getElementById('input-year').value   || 0) * 525600)
        ;
        
        dateProc = dateProc.setMinutes(dateProc.getMinutes() + tzOffset + (timezoneEnd - timezoneStart) + userOffset);

        dateProc = new Date(dateProc);

        const strLine1 = `<div class="anim">${
            arrDays[dateProc.getUTCDay()] + ' ' +
            dateProc.getUTCDate().toString().padStart(2, '0') + ' ' +
            arrMongths[dateProc.getUTCMonth()] + ' ' +
            dateProc.getUTCFullYear().toString() + ' à ' +
            dateProc.getUTCHours().toString().padStart(2, '0') + 'h' +
            dateProc.getUTCMinutes().toString().padStart(2, '0')
        
        }</div>`;
        if (document.getElementById('res-1').innerHTML !== strLine1) {
            document.getElementById('res-1').innerHTML = strLine1;
            document.getElementById('res-2').innerHTML =
            `<div class="anim">${
                dateProc.getUTCDate().toString().padStart(2, '0') + '/' +
                (dateProc.getUTCMonth() + 1).toString().padStart(2, '0') + '/' +
                dateProc.getUTCFullYear().toString() + ' ' +
                dateProc.getUTCHours().toString().padStart(2, '0') + ':' +
                dateProc.getUTCMinutes().toString().padStart(2, '0')
            }</div>`
        }
    }
}
