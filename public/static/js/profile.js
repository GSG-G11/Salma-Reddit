/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const postsSection = document.querySelector('.posts-card');
const WelcomeUser = document.querySelector('.Welcome-user');
const profileOwner = document.querySelector('.profile-owner');
const logoutBtn = document.querySelector('.logoutBtn');

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

const renderProfilePosts = (data, user, likedPosts) => {
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
    const imageDiv = createElement('div', 'image-section');
    const imagePost = createElement('img', 'image-post');
    if (element.img) {
      imagePost.src = element.img;
      imagePost.alt = 'image';
      imageDiv.appendChild(imagePost);
    }

    const postedAt = createElement('p', 'posted-at');
    const postedBy = createElement('a', 'posted-by');
    postedBy.innerText = `${user.name}`;
    const postIcon = createElement('div', 'post-icon');
    const likeSection = createElement('div', 'like-section');
    const likeIcon = createElement('i', 'fa-solid fa-heart');

    const likeNumber = createElement('small', 'likes-number');
    likeNumber.innerText = '1';
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
    likeSection.appendChild(likeIcon);
    likeSection.appendChild(likeNumber);
    postIcon.appendChild(likeSection);
    postedAt.appendChild(postedBy);
    postedAt.innerHTML += ` | ${new Date(element.created_at).toLocaleString()}`;
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
      const {
        posts, user, success, likedPosts,
      } = res;
      if (!success) {
        window.location = '/';
      } else {
        renderProfilePosts(posts, user, likedPosts);
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
