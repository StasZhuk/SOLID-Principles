// Dependency Inversion Principle

// WRONG

// class Fetch {
//   request(url) {
//     // // return fetch(url).then(res => res.json())
//     return Promise.resolve(`data from fetch ${url}`)
//   }
// }

// class LocalStorage {
//   getItem(key) {
//     // return localStorage.getDate(key)
//     const dataFromLocalStorage = `Data from local storage with key ${key}`
//     return dataFromLocalStorage
//   }
// }

// class Database {
//   constructor() {
//     this.fetch = new Fetch()
//     this.localStorage = new LocalStorage()
//   }

//   getDate() {
//     // return this.fetch.request('vk.com')
//     return this.localStorage.getItem('User')
//   }
// }

// const db = new Database()

// console.log(db.getDate())

// CORRECT

class Fetch {
  request(url) {
    // // return fetch(url).then(res => res.json())
    return Promise.resolve(`data from fetch ${url}`)
  }
}

class LocalStorage {
  getItem(key) {
    // return localStorage.getDate(key)
    const dataFromLocalStorage = `Data from local storage with key ${key}`
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor(props) {
    this.fetch = new Fetch()
  }

  getClient(url) {
    return this.fetch.request(url)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  getClient(key) {
    return this.localStorage.getItem(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }

  getDate(params) {
    return this.client.getClient(params)
  }
}

const db1 = new Database(new FetchClient())
console.log('db fetch:', db1.getDate('vk.com'))

const db2 = new Database(new LocalStorageClient())
console.log('db localStorage:', db2.getDate('User'))
