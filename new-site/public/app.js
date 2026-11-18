const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', { attribution: 'Stadia Maps' }).addTo(map);
L.circleMarker([39.8, -98.5], { radius: 16, fillColor: '#ef4444', fillOpacity: 0.8 }).addTo(map).bindPopup('США');
document.getElementById('checkBtn').onclick = async () => {
  const res = document.getElementById('result');
  res.innerHTML = 'Проверка...';
  const r = await fetch('/api/check/' + document.getElementById('emailInput').value);
  const d = await r.json();
  res.innerHTML = '<span style="color:red">Найдена утечка: ' + d.breaches[0].Title + '</span>';
};
