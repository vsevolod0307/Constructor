const showForm = document.querySelector('.container_form.left.addBlock'),
    hideForm = document.querySelector('.container_form.left'),
    modalPlus = document.querySelector('.header_plus'),
    modalHide = document.querySelector('.container_form_btn');

const checkbox = document.querySelector('input[name=theme]');

function loadThemeChange() {
  if(localStorage.getItem('themeChange') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
  } else {
    localStorage.setItem('themeChange', 'light');
  }
}

loadThemeChange();

checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('themeChange', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('themeChange', 'light');
  }
});

modalPlus.addEventListener('click', () => {
    hideForm.style.opacity = '0';
    showForm.style.opacity = '1';
    showForm.style.display = 'block';
    hideForm.style.display = 'none';
});

modalHide.addEventListener('click', () => {
    hideForm.style.opacity = '1';
    showForm.style.opacity = '0';
    showForm.style.display = 'none';
    hideForm.style.display = 'block';
});



const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}