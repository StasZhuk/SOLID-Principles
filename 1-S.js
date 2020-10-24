// Single Responsibility Principle
class News {
  constructor(text, title) {
    this.text = text
    this.title = title
    this.modified = true
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrint {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify(
      {
        title: this.news.title,
        text: this.news.text,
        modified: this.news.modified
      },
      null,
      2
    )
  }
}

const print = new NewsPrint(
  new News('Редакция', 'Экологическая катастрофа на Камчатке!')
)

console.log(print.html())
console.log(print.json())
