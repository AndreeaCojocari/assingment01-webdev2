const hour = new Date().getHours();
const greetingEl = document.getElementById('greeting');
let greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
greetingEl.textContent = `${greeting}, music lover!`;

document.getElementById('currentTime').textContent = //date
"Today is: " + new Date().toDateString();

const songsLogged = Math.floor(Math.random() * 5) + 100; //placeholder data ie shows a growing collection
document.getElementById('statsMessage').textContent =
  `🎵 ${songsLogged.toLocaleString()} songs added so far. Let's keep it growing!`;