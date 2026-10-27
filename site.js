// Loaded in <head>
const html = document.documentElement;
html.dataset.bsTheme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function setLang(lang) {
  html.lang = lang;
  document.title = lang === 'es' ? html.dataset.titleEs : html.dataset.titleEn;
  try { localStorage.setItem('lang', lang); } catch { }
}

let saved = new URLSearchParams(location.search).get('lang');
try { saved = saved || localStorage.getItem('lang'); } catch { }
setLang(saved === 'es' ? 'es' : 'en');

document.addEventListener('click', e => {
  if (e.target.closest('#lang-toggle')) setLang(html.lang === 'es' ? 'en' : 'es');
});
