const convertBtn = document.getElementById('convert-btn');
const inputTemp = document.getElementById('input-temp');
const unit = document.getElementById('unit');
const output = document.getElementById('output');

convertBtn.addEventListener('click', () => {
  const temp = parseFloat(inputTemp.value);
  if (isNaN(temp)) {
    alert('Please enter a valid number');
    return;
  }
  if (unit.value === 'celsius') {
    const convertedTemp = (temp * 9/5) + 32;
    output.innerHTML = `${convertedTemp.toFixed(1)}&deg;F`;
  } else if (unit.value === 'fahrenheit') {
    const convertedTemp = (temp - 32) * 5/9;
    output.innerHTML = `${convertedTemp.toFixed(1)}&deg;C`;
  } else if (unit.value === 'kelvin') {
    const convertedTemp = temp - 273.15;
    output.innerHTML = `${convertedTemp.toFixed(1)}&deg;C`;
  }
});