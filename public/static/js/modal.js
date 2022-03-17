const signupModal = document.querySelector('.signupModal');
const signupBtn = document.querySelector('.signup');
const loginModal = document.querySelector('.loginModal');
const loginBtn = document.querySelector('.login');
const signupCloseBtn = document.querySelector('.signup-modal');
const loginCloseBtn = document.querySelector('.login-modal');

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});
signupCloseBtn.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});
loginCloseBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.onclick = (event) => {
  if (event.target === signupModal || event.target === loginModal) {
    signupModal.style.display = 'none';
    loginModal.style.display = 'none';
  }
};
