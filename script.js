ndays = document.querySelector(".days .number")
nhours = document.querySelector(".hours .number")
nminutes = document.querySelector(".minutes .number")
nseconds = document.querySelector(".seconds .number")

const release = new Date()
release.setDate(release.getDate() + 5)

function countdown() {
    const currentDate = new Date()

    const seconds = (release - currentDate) / 1000

    ndays.textContent = Math.floor(seconds / 3600 / 24)
    nhours.textContent = Math.floor(seconds / 3600) % 24
    nminutes.textContent = Math.floor(seconds / 60) % 60
    nseconds.textContent = Math.floor(seconds % 60)
}

countdown()
setInterval(countdown, 1000)