
function getCurrentTime() {
    let hour24 = document.getElementById("hourtype").checked;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: tz };
    let optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: tz, hour12: !hour24 };
    let d = new Date();

    document.getElementById("date").innerHTML = d.toLocaleString("en-US", optionsDate);
    let clock = d.toLocaleString("en-US", optionsTime).replaceAll(":", "|").replaceAll(" ", "|");
    let clockParts = clock.split("|");

    document.getElementById("hour_up").innerHTML = clockParts[0];
    document.getElementById("minute_up").innerHTML = clockParts[1];
    document.getElementById("second_up").innerHTML = clockParts[2];

    if (!hour24) {
        document.getElementById("mer").innerHTML = clockParts[3];
        document.getElementById("mer").style.display = "block";
    } else {
        document.getElementById("mer").innerHTML = "--";
        document.getElementById("mer").style.display = "none";
    }

    return true;
}

setInterval(getCurrentTime, 1000); //each second