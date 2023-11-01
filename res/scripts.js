const arrTimezones = Intl.supportedValuesOf('timeZone');

document.addEventListener('readystatechange', e => {
    if (e.target.readyState === "complete") {
        document.getElementById('input-date').value = moment().format('YYYY-MM-DD HH:mm');
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

        let strTimezones = '';
        arrTimezones.forEach((e) => {
            strTimezones += `<option>${e}</option>`;
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

        process();
    }
}, false);

function process() {
    const bNan = isNaN(document.getElementById('input-minute').value || 0) || isNaN(document.getElementById('input-hour').value || 0) || isNaN(document.getElementById('input-day').value || 0)
        || isNaN(document.getElementById('input-week').value || 0) || isNaN(document.getElementById('input-month').value || 0) || isNaN(document.getElementById('input-year').value || 0);

        if (document.getElementById('input-timezone-s').value.length > 0
        && !arrTimezones.includes(document.getElementById('input-timezone-s').value)) {
        document.getElementById('res-1').innerHTML = '';
        document.getElementById('res-2').innerHTML = `<div class="anim">Fuseau horaire de départ invalide.</div>`;
    }
    else if (document.getElementById('input-timezone-e').value.length > 0
        && !arrTimezones.includes(document.getElementById('input-timezone-e').value)) {
        document.getElementById('res-1').innerHTML = '';
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
        const timezoneStart = document.getElementById('input-timezone-s').value || document.getElementById('input-timezone-s').placeholder;
        const timezoneEnd = document.getElementById('input-timezone-e').value || document.getElementById('input-timezone-e').placeholder;

        let dateProc = moment(new Date(document.getElementById('input-date').value).toISOString(), "YYYY-MM-DDTHH:mm:ss.sssZ").tz(timezoneStart, true);
        
        dateProc.minute(dateProc.minute() + (parseInt(document.getElementById('input-minute').value || 0)));
        dateProc.hour(dateProc.hour() + (parseInt(document.getElementById('input-hour').value || 0)));
        dateProc.date(dateProc.date() + (parseInt(document.getElementById('input-day').value || 0)));
        dateProc.day(dateProc.day() + (7 * parseInt(document.getElementById('input-week').value || 0)));
        dateProc.month(dateProc.month() + (parseInt(document.getElementById('input-month').value || 0)));
        dateProc.year(dateProc.year() + (parseInt(document.getElementById('input-year').value || 0)));

        dateProc = dateProc.clone().tz(timezoneEnd).locale(lang);

        const strLine1 = `<div class="anim">${dateProc.format("LLLL")}</div>`;
        const strLine2 = `<div class="anim">${dateProc.format("MM/DD/YYYY hh:mm A z")}</div>`;

        if (document.getElementById('res-1').innerHTML !== strLine1) {
            document.getElementById('res-1').innerHTML = strLine1;
            document.getElementById('res-2').innerHTML = strLine2;
        }
    }
}