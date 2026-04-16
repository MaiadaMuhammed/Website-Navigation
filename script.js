const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.getElementById('toggle-btn');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const pages = document.querySelectorAll('.page');
const links = document.querySelectorAll('.links li');
const html = document.documentElement;

// Collapse Sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
  toggleBtn.innerHTML = sidebar.classList.contains('collapsed')
    ? '<i class="ri-arrow-right-s-line"></i>'
    : '<i class="ri-arrow-left-s-line"></i>';
});

// Switch Theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.innerHTML = document.body.classList.contains('light')
    ? '<i class="ri-moon-line"></i>'
    : '<i class="ri-sun-line"></i>';
});

// Switch Language
langToggle.addEventListener('click', () => {
  const isRTL = html.getAttribute('dir') === 'rtl';
  html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
  updateLanguage(isRTL ? 'en' : 'ar');
});

// Change Pages + Active Button
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const target = link.getAttribute('data-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Translation
function updateLanguage(lang) {
  const texts = {
    en: ["Home", "About", "Projects", "Skills", "Contact"],
    ar: ["الرئيسية", "من أنا", "المشاريع", "المهارات", "تواصل معي"]
  };
const greetings = {
  en: {
    me: ["Maiada Muhammed"],
    home: ["Welcome to My Portfolio", "Explore my front-end creativity and projects!"],
    about: ["About Me", "I’m Maiada — a front-end developer passionate about crafting elegant UIs."],
    projects: ["Projects", "Explore my latest designs and interactive web apps."],
    skills: ["Skills", "HTML, CSS, JS — building responsive and modern websites."],
    contact: ["Contact", "Let’s build something beautiful together!"],
    footer: [
      "Developed by <br>" +
      "<b>Maiada Muhammed</b> " +
      "&copy; <b>2025</b> | " +
      "<a href='https://www.linkedin.com/in/maiadafsd/' target='_blank' rel='noopener noreferrer'><i class='ri-linkedin-box-line'></i></a> " +
      "<a href='https://github.com/MaiadaMuhammed' target='_blank' rel='noopener noreferrer'><i class='ri-github-fill'></i></a>"
    ]
  },

  ar: {
    me: ["ميادة مُحمد"],
    home: ["مرحباً بكم في ملفي الشخصي", "اكتشفوا إبداعي في تطوير الواجهات الأمامية!"],
    about: ["من أنا", "أنا ميادة - مطورة واجهات أمامية شغوفة بتصميم التجارب الأنيقة."],
    projects: ["المشاريع", "اطلعوا على أحدث مشاريعي وتصاميمي التفاعلية."],
    skills: ["المهارات", "أدواتي لصناعة مواقع مذهلة - HTML, CSS, JavaScript."],
    contact: ["تواصل معي", "دعونا نُبدع شيئًا جميلًا معاً!"],
    footer: [
      "طوّر بواسطة <br>" +
      "<b>ميادة مُحمد</b> <br> " +
      "&copy; <b>2025</b> | " +
      "<a href='https://www.linkedin.com/in/maiadafsd/' target='_blank' rel='noopener noreferrer'><i class='ri-linkedin-box-line'></i></a> " +
      "<a href='https://github.com/MaiadaMuhammed' target='_blank' rel='noopener noreferrer'><i class='ri-github-fill'></i></a>"
    ]
  }
};
  //  Update sidebar text
  document.querySelectorAll('.links li .text').forEach((el, i) => {
    el.textContent = texts[lang][i];
  });

  //  Update page content
  for (let key in greetings[lang]) {
    if (["me", "footer"].includes(key)) continue; // skip name & footer here
    const page = document.getElementById(key);
    if (page) {
      page.querySelector('h1').textContent = greetings[lang][key][0];
      page.querySelector('p').textContent = greetings[lang][key][1];
    }
  }

  //  Update name in top section
  document.getElementById('me').textContent = greetings[lang].me[0];

  //  Update footer text
  const footer = document.querySelector('footer');
footer.innerHTML = greetings[lang].footer[0];
}
