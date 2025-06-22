document.getElementById('calcForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const elecConsumption = parseFloat(document.getElementById('elecConsumption').value);
  const elecPrice = parseFloat(document.getElementById('elecPrice').value);
  const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
  const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
  const dailyDistance = parseFloat(document.getElementById('dailyDistance').value);

  const elecCost100 = elecConsumption * elecPrice;
  const fuelCost100 = fuelConsumption * fuelPrice;

  const elecDailyCost = (dailyDistance / 100) * elecCost100;
  const fuelDailyCost = (dailyDistance / 100) * fuelCost100;

  const diffDaily = fuelDailyCost - elecDailyCost;
  const diffWeekly = diffDaily * 7;
  const diffMonthly = diffDaily * 30;
  const diffYearly = diffDaily * 365;

  const formatMoney = num => num.toFixed(2);

  let resultText = '';
  if(diffDaily > 0) {
    resultText = `Вы экономите:`;
  } else if(diffDaily < 0) {
    resultText = `Вы тратите больше:`;
  } else {
    resultText = `Расходы равны.`;
  }

  document.getElementById('result').innerHTML = `
    <h3>Результаты</h3>
    <p>${resultText}</p>
    <ul>
      <li>В день: ${formatMoney(Math.abs(diffDaily))}</li>
      <li>В неделю: ${formatMoney(Math.abs(diffWeekly))}</li>
      <li>В месяц: ${formatMoney(Math.abs(diffMonthly))}</li>
      <li>В год: ${formatMoney(Math.abs(diffYearly))}</li>
    </ul>
  `;
});
