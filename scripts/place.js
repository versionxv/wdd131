const today = new Date();

const currentYear = today.getFullYear();

document.getElementById('currentyear').textContent = currentYear

document.getElementById('lastmodified').textContent = document.lastModified;

const tempC = -5;

const windKmh = 25;

const calculateWindChill = (t, w) => (t > 10 || w < 4.8) ? "Wind chill doesn't apply in these conditions." : Math.round((13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16)) * 10) / 10;

document.getElementById("windchill").innerText = calculateWindChill(tempC, windKmh) + " ºC";

document.getElementById("temperature").innerText = tempC + " ºC";

document.getElementById("wind").innerText = windKmh + " km/h";