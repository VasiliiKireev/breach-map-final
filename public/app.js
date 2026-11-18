const map = L.map('map').setView([20,0], 2);
// САМАЯ НАДЕЖНАЯ КАРТА (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

L.circleMarker([39.8, -98.5], { radius: 16, fillColor: '#ef4444', fillOpacity: 0.8, color: '#fff', weight: 2 }).addTo(map).bindPopup('США');
document.getElementById('btn').onclick = async () => {
  const r = await fetch('/api/check/' + document.getElementById('email').value);
  const d = await r.json();
  document.getElementById('res').innerHTML = '<span style="color:red">Найдена утечка: ' + d.breaches[0].Title + '</span>';
};
