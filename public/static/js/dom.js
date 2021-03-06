/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
const postsSection = document.querySelector('.posts-card');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');
const errorDiv = document.querySelector('.signin-error');
const signupErrorDiv = document.querySelector('.signup-error');
const addPostErrorDiv = document.querySelector('.addPost-error');
const logoutBtn = document.querySelector('.logout');
const WelcomeUser = document.querySelector('.Welcome-user');
const addPostForm = document.querySelector('.add-post');

const deletePost = (id, element) => {
  fetch(`/api/v1/posts/${id}`, { method: 'DELETE' })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        element.remove();
      }
    })
    .catch(() => new Error("Couldn't fetch Data"));
};

const likedPost = (postID, element, likeNumber) => {
  fetch(`/api/v1/posts/like/${postID}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
    .then((res) => {
      if (res.message === 'DELETE') {
        element.style.color = 'black';
        likeNumber.innerText = Number(likeNumber.innerText) - 1;
      } else {
        element.style.color = '#ff4500';
        likeNumber.innerText = Number(likeNumber.innerText) + 1;
      }
    })
    .catch(() => new Error("Couldn't fetch Data"));
};

const renderPosts = (userID) => {
  fetchPosts().then((data) => {
    const { rows, likedPosts } = data;
    rows.forEach((element) => {
      const post = createElement('div', 'post');
      const postContent = createElement('div', 'post-content');
      const postTitle = createElement('h4', 'post-title');
      postTitle.innerText = element.title;
      const postDescription = createElement('p', 'post-description');
      postDescription.innerText = element.description;

      const cardFooter = createElement('div', 'card-footer');
      const postInfo = createElement('div', 'post-info');
      const imageDiv = createElement('div', 'image-section');
      const imagePost = createElement('img', 'image-post');
      if (element.img) {
        imagePost.src = element.img;
        imagePost.alt = 'image';
        imageDiv.appendChild(imagePost);
      }

      const postedAt = createElement('p', 'posted-at');
      const postedBy = createElement('a', 'posted-by');
      postedBy.innerText = `${element.username}`;
      postedBy.href = `/profile/${element.user_id}`;
      const postIcon = createElement('div', 'post-icon');
      const likeSection = createElement('div', 'like-section');
      const likeIcon = createElement('i', 'fa-solid fa-heart');
      const likeNumber = createElement('small', 'likes-number');
      likeNumber.innerText = element.count;
      if (likedPosts) {
        const liked = likedPosts.find((ele) => ele.post_id === element.id);
        if (liked) {
          likeIcon.style.color = '#ff4500';
        }
      }
      likeIcon.addEventListener('click', () => {
        likedPost(element.id, likeIcon, likeNumber);
      });
      const deleteIcon = createElement('i', 'fa-solid fa-trash-can');
      likeSection.appendChild(likeIcon);
      likeSection.appendChild(likeNumber);
      postIcon.appendChild(likeSection);
      if (userID && userID === element.user_id) {
        postIcon.appendChild(deleteIcon);
        deleteIcon.addEventListener('click', () => {
          deletePost(element.id, post);
        });
      }
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
      post.appendChild(imageDiv);
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
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
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

const addPost = () => {
  addPostForm.style.display = 'flex';
  addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorDiv.style.display = 'none';
    errorDiv.innerText = '';
    const formData = new FormData(addPostForm);
    const title = formData.get('title');
    const description = formData.get('content');
    const img = formData.get('imageLink');

    fetch('/api/v1/posts', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, img }),
    })
      .then((data) => data.json())
      .then((result) => {
        const { success, message } = result;
        if (success) {
          window.location.reload();
        } else {
          addPostErrorDiv.style.display = 'block';
          addPostErrorDiv.innerText = message;
        }
      })
      .catch((error) => {
        addPostErrorDiv.style.display = 'block';
        addPostErrorDiv.innerText = error;
      });
  });
};

const checkCookie = () => {
  const token = getCookie('token');
  if (token) {
    const tokenParsed = parseJwt(token);
    if (tokenParsed.name) {
      signupBtn.style.display = 'none';
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'block';
      WelcomeUser.textContent = `Welcome ${tokenParsed.name}`;
      addPost();
    }
    if (tokenParsed.id) {
      return tokenParsed.id;
    }
  }
  return null;
};

window.onload = () => {
  const userID = checkCookie();
  renderPosts(userID);
};
