/* eslint-disable no-undef */
const postsSection = document.querySelector('.posts-card');

const renderPosts = () => {
  fetchPosts()
    .then((data) => {
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
    });
};
window.onload = renderPosts();
