/* eslint-disable no-unused-vars */
const fetchPosts = () => fetch('/api/v1/posts', {
  method: 'GET',
})
  .then((data) => data.json())
  .catch((error) => new Error("Couldn't fetch Data"));

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.classList = className;
  return element;
};

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''));

  return JSON.parse(jsonPayload);
}
function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

// const fetchData = (data, method, url) =>
//   fetch(url, {
//     method,
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .catch((err) => new Error("Couldn't fetch Data"));
