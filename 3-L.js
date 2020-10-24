// Liskov substitution principle
// основан на - что нужно правильно выбирать слои абстракции

// WRONG
// class Person {
//   access() {
//     console.log('у тебя есть доступ')
//   }
// }

// class FrontendDeveloper extends Person {
//   doFrontend() {}
// }

// class BackendDeveloper extends Person {
//   doFrontend() {}
// }

// class DeveloperFromOtherCompany extends Person {
//   access() {
//     throw new Error('У тебя нет доступа!')
//   }
// }

// function openSecretDoor(person) {
//   console.log(person.access())
// }

// openSecretDoor(new FrontendDeveloper())
// openSecretDoor(new BackendDeveloper())
// openSecretDoor(new DeveloperFromOtherCompany())

// CORRECT
// Разделяй на абстракции
// person это общая абстракция

class Person {}

class Member {
  access() {
    console.log('у тебя есть доступ ко всему')
  }
}

class Guest {
  preview() {
    console.log('Ты можешь только смотреть')
  }
}

class FrontendDeveloper extends Member {
  doFrontend() {}
}

class BackendDeveloper extends Member {
  doFrontend() {}
}

class DeveloperFromOtherCompany extends Guest {
  doSomething() {}
}

function openSecretDoor(member) {
  console.log(member.access())
}

function openGuestDoor(guest) {
  console.log(guest.preview())
}

openSecretDoor(new FrontendDeveloper())
openSecretDoor(new BackendDeveloper())
openGuestDoor(new DeveloperFromOtherCompany())
// openSecretDoor(new DeveloperFromOtherCompany()) // this method not correct
