const counterEl = document.getElementById("counter")
const totalCount = document.getElementById("total")
let count = 0
let countSum = 0

totalCount.innerHTML = `How many High moments you had this week?`
counterEl.style.color = "gray"


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
  count = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = `How many High moments did you have this week?`
  textColor()
}

function getSum() {
  countSum = countHi + countLow
}

function printTotal() {
  reset()
  totalCount.innerHTML = `How many Low moments did you have this week?`
  getSum()
  if (countSum > 0) {
    totalCount.innerHTML = `Seems like your Highs for this week are greater than Lows by ${countSum}. KEEP IT UP.`
  } else if (countSum < 0) {
    totalCount.innerHTML = `Seems like your Lows for this week are greater than Highs by ${Math.abs(countSum)}. BETTER LUCK NEXT TIME.`
  } else {
    totalCount.innerHTML = `YOU BROKE EVEN THIS WEEK.`
  }
}

function clearOut() {
  count = 0
  countHi = 0
  countLow = 0
  countSum = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = `How many High moments did you have this week?`
  textColor()
}
