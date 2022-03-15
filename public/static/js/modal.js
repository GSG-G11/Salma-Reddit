const signupModal = document.querySelector('.signupModal');
const signupBtn = document.querySelector('.signup');
const loginModal = document.querySelector('.loginModal');
const loginBtn = document.querySelector('.login');
const closeBtn = document.querySelector('.close');

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  signupModal.style.display = 'none';
});

window.onclick = (event) => {
  if (event.target === signupModal) {
    signupModal.style.display = 'none';
  }
};

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
};
