/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const postsSection = document.querySelector('.posts-card');
const WelcomeUser = document.querySelector('.Welcome-user');
const profileOwner = document.querySelector('.profile-owner');
const logoutBtn = document.querySelector('.logoutBtn');

const renderProfilePosts = (data, user) => {
  profileOwner.innerText = user.name;
  data.forEach((element) => {
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
    postedBy.innerText = `${user.name}`;
    const postIcon = createElement('div', 'post-icon');
    const likeSection = createElement('div', 'like-section');
    const likeIcon = createElement('i', 'fa-solid fa-heart');

    const likeNumber = createElement('small', 'likes-number');
    likeNumber.innerText = '1';
    // const deleteIcon = createElement('i', 'fa-solid fa-trash-can');
    likeSection.appendChild(likeIcon);
    likeSection.appendChild(likeNumber);
    postIcon.appendChild(likeSection);
    // postIcon.appendChild(deleteIcon);
    postedAt.appendChild(postedBy);
    postedAt.innerHTML += ` | ${new Date(element.created_at).toLocaleString()}`;
    postContent.appendChild(postTitle);
    postContent.appendChild(postDescription);
    postInfo.appendChild(postedAt);
    cardFooter.appendChild(postInfo);
    cardFooter.appendChild(postIcon);
    post.appendChild(postContent);
    post.appendChild(cardFooter);
    postsSection.appendChild(post);
  });
};

logoutBtn.addEventListener('click', () => {
  fetch('/api/v1/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((result) => result.json())
    .then(() => {
      window.location.href = '/';
    });
});

const fetchUerData = (id) => {
  fetch(`/api/v1/profile/${id}`)
    .then((res) => res.json())
    .then((res) => {
      const { posts, user, success } = res;
      if (!success) {
        window.location = '/';
      } else {
        renderProfilePosts(posts, user);
      }
    });
};

const checkCookie = () => {
  const token = getCookie('token');
  if (token) {
    const tokenParsed = parseJwt(token);
    if (tokenParsed.name) {
      WelcomeUser.textContent = `Welcome ${tokenParsed.name}`;
    }
  }
};

window.onload = () => {
  checkCookie();
  const userID = window.location.pathname.split('/')[2];
  if (userID) {
    fetchUerData(userID);
  }
};
