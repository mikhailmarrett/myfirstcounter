const counterEl = document.getElementById("counter")
const totalCount = document.getElementById("total")
let count = 0
let countHi = 0
let countLow = 0
let countSum = 0
let done = true

function textColor() {
  if (count > 0) {
    counterEl.style.color = "green"
  } else if (count < 0) {
    counterEl.style.color = "red"
  } else {
    counterEl.style.color = "gray"
  }
}

function increase() {
  count += 1
  countHi = count
  counterEl.innerHTML = count
  textColor()
}

function decrease() {
  count -= 1
  countLow = count
  counterEl.innerHTML = count
  textColor()
}

function reset() {
  count = countHi, countLow
  count = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = ""
  textColor()
}

function getSum() {
  countSum = countHi + countLow
}

function printTotal() {
  decrease()
  increase()
  reset()
  getSum()
  
  if (countSum > 0) {
    totalCount.innerHTML = `Seems like your Highs are ${countSum}. KEEP IT UP.`
  } else if (countSum < 0) {
    totalCount.innerHTML = `Seems like your Lows are ${countSum}. BETTER LUCK NEXT TIME.`
  }

  
}
