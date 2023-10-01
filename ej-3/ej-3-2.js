function getGreeting() {
    let name = document.getElementById("name").value
    let hour = new Date().getHours()
    let greeting

    if (hour >= 6 && hour < 12) {
        greeting = "¡Good morning, " + name + "!"
    } else if (hour >= 12 && hour < 20) {
        greeting = "¡Good evening, " + name + "!"
    } else {
        greeting = "¡Good night, " + name + "!"
    }

    alert(greeting)
  }