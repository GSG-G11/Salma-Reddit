/* eslint-disable no-unused-vars */
const fetchPosts = () => fetch('/api/v1/posts', {
  method: 'GET',
})
  .then((data) => data.json())
  .catch((error) => console.log(error));

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.classList = className;
  return element;
};
