let cron = document.querySelector('.timer')

let hh = 00
let mm = 00
let ss = 00

let interval

let active = true

const start = () => {
  if (active) {
    interval = setInterval(add, 1000)

    active = false
  }

  document.querySelector('.pause').innerHTML = 'Pause'
}

const pause = () => {
  if (document.querySelector('.pause').innerHTML == 'Pause') {
    active = true
    document.querySelector('.pause').innerHTML = 'Play'
    clearInterval(interval)
  } else {
    active = false
    document.querySelector('.pause').innerHTML = 'Pause'
    interval = setInterval(add, 1000)
  }
}

const clearr = () => {
  active = true
  clearInterval(interval)
  hh = 00
  mm = 00
  ss = 00

  cron.innerHTML = '00:00:00'
}

function add() {
  ss++

  if (ss >= 60) {
    ss = 0
    mm++
  }

  if (mm >= 60) {
    mm = 0
    hh++
  }

  let timer =
    (hh < 10 ? '0' + hh : hh) +
    ':' +
    (mm < 10 ? '0' + mm : mm) +
    ':' +
    (ss < 10 ? '0' + ss : ss)

  cron.innerHTML = timer
}
