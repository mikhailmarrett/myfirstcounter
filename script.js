const counterEl = document.getElementById("counter")
const totalCount = document.getElementById("total")
let count = 0
let countSum = 0

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
  counterEl.innerHTML = countHi
  textColor()
}

function decrease() {
  count -= 1
  countLow = count
  counterEl.innerHTML = countLow
  textColor()
}

function clearOut() {
  count = 0
  countHi = 0
  countLow = 0
  countSum = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = ""
  textColor()
}

function reset() {
  count = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = ""
  textColor()
}

function getSum() {
  countSum = countHi + countLow
}

function printTotal() {
  reset()
  getSum()
  if (countSum > 0) {
    totalCount.innerHTML = `Seems like your Highs are ${countSum}. KEEP IT UP.`
  } else if (countSum < 0) {
    totalCount.innerHTML = `Seems like your Lows are ${countSum}. BETTER LUCK NEXT TIME.`
  }
}
