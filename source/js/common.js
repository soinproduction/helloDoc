const header = document.querySelector('header');
const body = document.body;
const anchors = document.querySelectorAll('.download-link');
const mobileMenu = document.querySelector('.mobile-menu');
const buttons = document.querySelectorAll('.burger');
const btn = document.querySelectorAll('.doc-btn');
const btnCase = document.querySelectorAll('.case-btn');
const btnMode = document.querySelectorAll('.doc-btn-mode');


function addClassToHeader(){   // ----  функция липкой шапки   -----
  if (document.documentElement.clientWidth > 767) {
    window.onscroll = function() {fixedHeader()}
    function fixedHeader() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
  };
}

window.addEventListener('resize', () => {
  addClassToHeader();
});
window.addEventListener('DOMContentLoaded', () => {
  addClassToHeader();
});

for (const anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('data-href');
    let sections =  document.querySelectorAll('.' + blockID);
    sections.forEach(function(section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  })
};

document.addEventListener("DOMContentLoaded", function(event) {
  // ----  инициализация анимаций  -----
    AOS.init();
});

// --------------------------------------------------------------------
// ----  акордион  -----

const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'active',
}

const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}

function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// ----  акордион  -----
// --------------------------------------------------------------------
// ---- переключение страниц -----

function openPage(evt, pageName) {
  evt.preventDefault()
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("nav-buttons__button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";

  mobileMenu.classList.remove('active');
  buttons.forEach(button => button.classList.remove('active'));
  document.body.classList.remove('body-fixed');
}

// ---- переключение страниц -----
// --------------------------------------------------------------------
// ---- открытие меню -----
function toggleActive() {
  buttons.forEach(button => button.classList.toggle('active'));
  mobileMenu.classList.toggle('active');
  document.body.classList.toggle('body-fixed')
}

for (const button of buttons) {
  button.addEventListener('click', toggleActive);
}
// ---- открытие меню -----
// --------------------------------------------------------------------
// ---- добавление класса к шапке (case/doc) -----
function toggleLight() {
  header.classList.add('light');
  goUp()
}

function removeLight() {
  header.classList.remove('light');
  goUp()
}

for (const button of btnCase) {
  button.addEventListener('click', removeLight);
}

for (const button of btn) {
  button.addEventListener('click', toggleLight);
}

function toggleLightMode() {
  header.classList.add('light');
  btn.forEach(button => button.classList.add('active'));
  goUp()
}

for (const button of btnMode) {
  button.addEventListener('click', toggleLightMode);
}
// ---- добавление класса к шапке (case/doc) -----
// --------------------------------------------------------------------
// ---- скролл к верху страницы -----
let timeOut;
function goUp() {
   let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}
