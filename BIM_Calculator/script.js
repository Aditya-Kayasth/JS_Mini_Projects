const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height === '' || height <= 0) {
    results.innerHTML = 'Enter valid Height';
  } else if (isNaN(weight) || weight === '' || weight <= 0) {
    results.innerHTML = 'Enter valid Weight';
  } else {
    results.innerHTML = `The BMI = ${(weight / (height / 100) ** 2).toFixed(
      2
    )}`;
  }
});
console.log(height);
console.log(weight);
