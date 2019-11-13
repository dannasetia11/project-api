function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById("authors");
const url = "https://api.github.com/users/dannasetia11/followers";
fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    let authors = data;
    console.log(authors);
    return authors.map(function(author) {
      let li = createNode("li"),
        img = createNode("img"),
        span = createNode("p");
      img.src = author.avatar_url;
      span.innerHTML = `${author.login}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
