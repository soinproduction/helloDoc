let header = document.querySelector('header');
let body = document.body;
const anchors = document.querySelectorAll('a[href*="#"]');

let docBtn = document.querySelector('.doc-btn');
let caseBtn = document.querySelector('.case-btn');

window.onscroll = function() {fixedHeader()}
function fixedHeader() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}

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


// if ( window.location.pathname === '/index_2.html') {
//   body.classList.add('light')
// } else {
//   body.classList.remove('light');
// }


if (body.classList.contains('light')) {
  docBtn.classList.add('active');
} else {
  docBtn.classList.remove('active');
  caseBtn.classList.add('active');
}
