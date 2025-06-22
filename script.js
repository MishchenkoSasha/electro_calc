document.getElementById('calcForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fuelType = document.getElementById('fuelType').value;
  const distance = parseFloat(document.getElementById('distance').value);
  const consumption = parseFloat(document.getElementById('consumption').value);
  const price = parseFloat(document.getElementById('price').value);

  if (!fuelType) {
    alert('Пожалуйста, выберите тип авто');
    return;
  }
  if (isNaN(distance) || distance < 0) {
    alert('Введите корректный пробег');
    return;
  }
  if (isNaN(consumption) || consumption < 0) {
    alert('Введите корректный расход топлива/энергии');
    return;
  }
  if (isNaN(price) || price < 0) {
    alert('Введите корректную цену');
    return;
  }

  const cost = (consumption / 100) * distance * price;

  document.getElementById('result').textContent = `Общие затраты на ${fuelType}: ${cost.toFixed(2)}`;
});
