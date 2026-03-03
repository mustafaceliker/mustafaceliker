/**
 * Mustafa Berke Çeliker - Developer Profile
 * Grafikler, katkı takvimi ve ikonlar
 */

(function () {
  'use strict';

  // Saatlik commit verisi (örnek - 24 saat)
  const hoursData = [2, 1, 0, 0, 0, 0, 1, 3, 5, 8, 12, 15, 22, 28, 18, 12, 8, 10, 14, 20, 25, 18, 8, 3];
  const daysData = [16, 52, 8, 12, 6, 4, 14]; // Pazar - Cumartesi
  const dayLabels = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];

  const languageActivity = [
    { name: 'C#', pct: 42 },
    { name: 'Kotlin', pct: 28 },
    { name: 'Python', pct: 18 },
    { name: 'C++', pct: 8 },
    { name: 'HTML', pct: 2 },
    { name: 'Diğer', pct: 2 }
  ];

  const mostUsedLanguages = [
    { name: 'C#', color: '#239120' },
    { name: 'Kotlin', color: '#A97BFF' },
    { name: 'Python', color: '#3572A5' },
    { name: 'C++', color: '#f34b7d' },
    { name: 'Java', color: '#b07219' },
    { name: 'HTML', color: '#e34c26' },
    { name: 'JavaScript', color: '#f1e05a' }
  ];

  const suggestedTracks = [
    { title: 'Bipolar Nightmare', artist: 'Keigo Hoashi', art: 'https://picsum.photos/seed/nier/80/80' },
    { title: 'Mutter', artist: 'Rammstein', art: 'https://picsum.photos/seed/ramm/80/80' },
    { title: 'Weight of the World', artist: 'MONACA', art: 'https://picsum.photos/seed/nier2/80/80' }
  ];

  // Teknoloji ikonları (Devicon CDN)
  const technologies = [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
  ];

  // Katkı takvimi: 14x12 ızgara, günlük 0-4 seviye
  function generateContributions() {
    const cols = 14;
    const rows = 12;
    const total = cols * rows;
    const grid = document.getElementById('contributionsGraph');
    if (!grid) return;

    for (let i = 0; i < total; i++) {
      const level = Math.random() > 0.55 ? Math.floor(Math.random() * 4) + 1 : 0;
      const block = document.createElement('div');
      block.className = 'contribution-block';
      if (level > 0) block.setAttribute('data-level', level);
      grid.appendChild(block);
    }
  }

  function renderHoursChart() {
    const container = document.getElementById('hoursChart');
    if (!container) return;
    const max = Math.max(...hoursData);
    hoursData.forEach((val, i) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = max > 0 ? (val / max) * 100 + '%' : '4px';
      bar.title = i + ':00 - ' + val + ' commit';
      container.appendChild(bar);
    });
  }

  function renderDaysChart() {
    const container = document.getElementById('daysChart');
    if (!container) return;
    const max = Math.max(...daysData);
    daysData.forEach((val, i) => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = max > 0 ? (val / max) * 100 + '%' : '4px';
      bar.title = dayLabels[i] + ' - ' + val + ' commit';
      container.appendChild(bar);
    });
  }

  function renderLanguageActivity() {
    const container = document.getElementById('languageActivity');
    if (!container) return;
    languageActivity.forEach(function (lang) {
      const row = document.createElement('div');
      row.className = 'lang-row';
      row.innerHTML = '<span>' + lang.name + '</span><div class="fill"><div class="fill-inner" style="width:' + lang.pct + '%"></div></div><span class="muted">' + lang.pct + '%</span>';
      container.appendChild(row);
    });
  }

  function renderTechIcons() {
    const container = document.getElementById('techIcons');
    if (!container) return;
    technologies.forEach(function (tech) {
      const el = document.createElement('div');
      el.className = 'tech-icon';
      el.title = tech.name;
      el.innerHTML = '<img src="' + tech.icon + '" alt="' + tech.name + '" loading="lazy" />';
      container.appendChild(el);
    });
  }

  function renderSuggestedTracks() {
    const container = document.getElementById('suggestedTracks');
    if (!container) return;
    suggestedTracks.forEach(function (track) {
      const el = document.createElement('div');
      el.className = 'track-item';
      el.innerHTML = '<img src="' + track.art + '" alt="" /><div><div>' + track.title + '</div><span>' + track.artist + '</span></div>';
      container.appendChild(el);
    });
  }

  function renderLanguageLegend() {
    const container = document.getElementById('languageLegend');
    if (!container) return;
    mostUsedLanguages.forEach(function (lang) {
      const el = document.createElement('div');
      el.className = 'legend-item';
      el.innerHTML = '<span class="dot" style="background:' + lang.color + '"></span><span>' + lang.name + '</span>';
      container.appendChild(el);
    });
  }

  generateContributions();
  renderHoursChart();
  renderDaysChart();
  renderLanguageActivity();
  renderTechIcons();
  renderSuggestedTracks();
  renderLanguageLegend();
})();
