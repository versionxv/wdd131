let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  document.getElementById('test').textContent = (accumulator/count); 
} else {
  document.getElementById('test').textContent = ("No scores reported.");
}


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

document.getElementById('test3').textContent = countriesLong;


const points = [100, 88, 94, 78, 84, 69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = "Excellent";
  } else if (pointTotal >= 70) {
    status = "Complete";
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);

document.getElementById('test2').textContent = statusReport;

let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'};

let dose = esomeprazole['amount'] 

document.getElementById('test4').textContent = dose;