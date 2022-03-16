/* eslint-disable no-undef */
const postsSection = document.querySelector('.posts-card');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const errorDiv = document.querySelector('.signin-error');
const signupErrorDiv = document.querySelector('.signup-error');
const logoutBtn = document.querySelector('.logout');
const WelcomeUser = document.querySelector('.Welcome-user');

const renderPosts = () => {
  fetchPosts().then((data) => {
    const { rows } = data;
    rows.forEach((element) => {
      const post = createElement('div', 'post');
      const postContent = createElement('div', 'post-content');
      const postTitle = createElement('h4', 'post-title');
      postTitle.innerText = element.title;
      const postDescription = createElement('p', 'post-description');
      postDescription.innerText = element.description;

      const cardFooter = createElement('div', 'card-footer');
      const postInfo = createElement('div', 'post-info');

      const postedAt = createElement('p', 'posted-at');
      const postedBy = createElement('a', 'posted-by');
      postedBy.innerText = `${element.username}`;
      const postIcon = createElement('div', 'post-icon');
      const likeSection = createElement('div', 'like-section');
      const likeIcon = createElement('i', 'fa-solid fa-heart');

      const likeNumber = createElement('small', 'likes-number');
      likeNumber.innerText = '1';
      const deleteIcon = createElement('i', 'fa-solid fa-trash-can');
      likeSection.appendChild(likeIcon);
      likeSection.appendChild(likeNumber);
      postIcon.appendChild(likeSection);
      postIcon.appendChild(deleteIcon);
      postedAt.appendChild(postedBy);
      postedAt.innerHTML += ` | ${new Date(
        element.created_at,
      ).toLocaleString()}`;
      postContent.appendChild(postTitle);
      postContent.appendChild(postDescription);
      postInfo.appendChild(postedAt);
      cardFooter.appendChild(postInfo);
      cardFooter.appendChild(postIcon);
      post.appendChild(postContent);
      post.appendChild(cardFooter);
      postsSection.appendChild(post);
    });
  });
};
// signup
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  errorDiv.style.display = 'none';
  errorDiv.innerText = '';
  const formData = new FormData(signupForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  fetch('/api/v1/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name }),
  })
    .then((result) => result.json())
    .then((result) => {
      const { success, message } = result;
      if (success) {
        window.location.reload();
      } else {
        signupErrorDiv.style.display = 'block';
        signupErrorDiv.innerText = message;
      }
    })
    .catch((error) => {
      errorDiv.style.display = 'block';
      errorDiv.innerText = error;
    });
});

// login
loginForm.addEventListener('submit', () => {
  errorDiv.style.display = 'none';
  errorDiv.innerText = '';
  const formData = new FormData(loginForm);
  const email = formData.get('email');
  const password = formData.get('password');
  fetch('/api/v1/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((result) => result.json())
    .then((result) => {
      const { success, message } = result;
      if (success) {
        window.location.reload();
      } else {
        errorDiv.style.display = 'block';
        errorDiv.innerText = message;
      }
    })
    .catch((error) => {
      errorDiv.style.display = 'block';
      errorDiv.innerText = error;
    });
});

// Logout

logoutBtn.addEventListener('click', () => {
  fetch('/api/v1/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((result) => result.json())
    .then(() => {
      window.location.reload();
    });
});

const checkCookie = () => {
  const token = getCookie('token');
  if (token) {
    const tokenParsed = parseJwt(token);
    if (tokenParsed.name) {
      signupBtn.style.display = 'none';
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
      WelcomeUser.textContent = `Welcome ${tokenParsed.name}`;
    }
  }
};

window.onload = () => {
  checkCookie();
  renderPosts();
};
