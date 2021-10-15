const header = document.querySelector('header');
const body = document.body;
const anchors = document.querySelectorAll('a[href*="#"]');
const docBtn = document.querySelector('.doc-btn');
const caseBtn = document.querySelector('.case-btn');
const btn = document.querySelector('.doc-btn');
const btnCase = document.querySelector('.case-btn');

document.addEventListener("DOMContentLoaded", function(event) {
  window.onscroll = function() {fixedHeader()}

  function fixedHeader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  AOS.init();



  btn.addEventListener('click', toggleHeader);
  btnCase.addEventListener('click', removeHeader);

  function toggleHeader() {
    header.classList.add('light');
  }

  function removeHeader() {
    header.classList.remove('light');
  }

});

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


function openPage(evt, pageName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" и спрятать их
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить class "active"
  tablinks = document.getElementsByClassName("nav-buttons__button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}







