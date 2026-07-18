const today = new Date();

const currentYear = today.getFullYear();

document.getElementById('currentyear').textContent = currentYear

document.getElementById('lastmodified').textContent = document.lastModified;

const tempC = -5;

const windKmh = 25;

function calculateWindChill(tempC, windKmh) {
    if (tempC > 10 || windKmh < 4.8)
    {
        return "Wind chill doesn't apply in these conditions.";
    }

    const vFactor = Math.pow(windKmh, 0.16);

    const windChill = 13.12 + (0.6215 * tempC) - (11.37 * vFactor) + (0.3965 * tempC * vFactor);
   
    return Math.round(windChill * 10)/10;
}

document.getElementById("windchill").innerText = calculateWindChill(tempC, windKmh) + " ºC";

document.getElementById("temperature").innerText = tempC + " ºC";

document.getElementById("wind").innerText = windKmh + " km/h";