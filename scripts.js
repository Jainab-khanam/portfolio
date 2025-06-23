console.log("Welcome to Jainab’s portfolio site powered by Moonpie 💫");
// Highlight navbar links on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, header.content");
  const navLinks = document.querySelectorAll(".navbar a");
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Background music toggle (optional audio file not included here)
document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio('assets/bg-music.mp3');
  const toggle = document.createElement('button');
  toggle.innerText = "🎵 Music";
  toggle.className = "music-toggle";
  document.body.appendChild(toggle);
  toggle.style.display = "block";

  let playing = false;
  toggle.addEventListener("click", () => {
    if (!playing) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.play();
    } else {
      audio.pause();
    }
    playing = !playing;
    toggle.innerText = playing ? "⏸️ Pause Music" : "🎵 Play Music";
  });
});
