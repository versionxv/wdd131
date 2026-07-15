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