const donorBtn = document.querySelector('.donor-btn');
const ngoBtn = document.querySelector('.ngo-btn');
const donorForm = document.querySelector('.donor-form');
const ngoForm = document.querySelector('.ngo-form');
donorBtn.addEventListener('click', () => {
  donorBtn.classList.add('active');
  ngoBtn.classList.remove('active');
  donorForm.style.display = 'block';
  ngoForm.style.display = 'none';
});

ngoBtn.addEventListener('click', () => {
  ngoBtn.classList.add('active');
  donorBtn.classList.remove('active');
  ngoForm.style.display = 'block';
  donorForm.style.display = 'none';
});
const donorLoginForm = document.getElementById('donor-login-form');
const ngoLoginForm = document.getElementById('ngo-login-form');

donorLoginForm.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Simulate form validation and submission (replace with your backend logic)
  alert('Donor login form submitted!');
});

ngoLoginForm.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();
  
  // Simulate form validation and submission (replace with your backend logic)
  alert('NGO login form submitted!');
});
