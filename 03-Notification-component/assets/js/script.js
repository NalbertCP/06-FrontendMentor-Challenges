/*Declarando variáveis*/
const notifications = document.querySelectorAll(".notification")
const noteCount = document.querySelector(".notifications-count")
const elementsClass = ["profile-name", "additional-content", "note-img"]

/*Adicionando event listeners aos elementos*/
window.addEventListener("click", (event) => {
    if (event.target.className === "mark-as-read") readAll()
})
for (let notification of notifications) {
    notification.addEventListener("click", notificationEvent)
}

/*Funções*/
function notificationEvent(event) {
    let notification = this
    let targetClass = event.target.className
    if (!elementsClass.every((value) => value != targetClass)) {
        if (notification.classList.contains("read")) return event.stopPropagation()
        else return changeNotificationCount(notification)
    }
    changeNotificationCount(notification)
}
function changeNotificationCount(notification) {
    markNotification(notification)
    if (notification.classList.contains("read")) {
        noteCount.innerHTML = Number(noteCount.innerHTML) - 1
    } else noteCount.innerHTML = Number(noteCount.innerHTML) + 1
}
function markNotification(notification) {
    notification.classList.toggle("read")
    notification.querySelector(".unread-marker").classList.toggle("hidden")
}

function readAll() {
    for (let notification of notifications) {
        notification.classList.add("read")
        notification.querySelector(".unread-marker").classList.add("hidden")
    }
    noteCount.innerHTML = 0
}
