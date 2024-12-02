const urlAPI = 'https://jsonplaceholder.typicode.com/'
const mainTag = document.querySelector('main')
const userDiv = document.querySelector('div')

function loadArticles() {
  mainTag.innerHTML = 'Praecipiens...'

  fetch(urlAPI + 'posts')
    .then(res => res.json())
    .then(posts => showPosts(posts))

  function showPosts(posts) {
    posts.forEach(post => {
      const article = document.createElement('article')
      article.innerHTML = `
      <h2>${post.title}</h2>
      <h3>${post.userId}</h3>
      <p>${post.body}</p>
      `
      mainTag.append(article)
    })
  }
}

function loadUsers () {
  userDiv.innerHTML = 'Cargando...'

  fetch(urlAPI + 'users')
  .then(res => res.json())
  .then(users => showUsers(users))

  function showUsers (users) {
    users.forEach(user => {
      const paragraph = document.createElement('p')
      paragraph.innerHTML = `
      <p><strong>Name</strong>: ${user.name} 
      <strong>username</strong>: ${user.username} 
      <strong>email</strong>: ${user.email}</p>`

      userDiv.append(paragraph)
    })
  }
}