function updateClock(){
    const timenow = new Date()
    let hour = timenow.getHours().toString().padStart(2 , 0)
    const meridiem = hour > 12 ? "PM" : "AM"
    hour = hour % 12 || 12
    const minute = timenow.getMinutes().toString().padStart(2 , 0)
    const second = timenow.getSeconds().toString().padStart(2 , 0)
    const timeInString = `${hour}:${minute}:${second}:${meridiem}`
    document.getElementById("clock").textContent = timeInString
}
updateClock()
setInterval(updateClock , 1000)