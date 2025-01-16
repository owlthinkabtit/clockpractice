const secondHandle = document.querySelector('.handle__second')
const minuteHandle = document.querySelector('.handle__minute')
const hourHandle = document.querySelector('.handle__hour')
const millisecondHandle = document.querySelector('.handle__millisecond')

setInterval(() => {
  setHandles()
}, 10);

function setHandles() {
  console.log('called')
  const d = new Date()

  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const milliseconds = d.getMilliseconds()

  console.log()

  const msAngle = milliseconds * 0.36
  const secondsAngle = seconds * 6 + milliseconds * 0.006
  const extraMinutesAngle = seconds * 0.1
  const minutesAngle = minutes * 6 + extraMinutesAngle

  const extraHoursAngle = minutes * 0.5
  const hoursHandle = hours * 30 + extraHoursAngle

  secondHandle.style.transform = `translate(-50%) rotate(${seconds * 6}deg)`
  hourHandle.style.transform = `translate(-50%) rotate(${hoursHandle}deg)`
  minuteHandle.style.transform = `translate(-50%) rotate(${minutesAngle}deg)`
  millisecondHandle.style.transform = `translate(-50%) rotate(${msAngle}deg)`
  

}