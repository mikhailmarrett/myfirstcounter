//Happy Path: Highs Low Reset
//Clear Vs. Reset: what should it do
//Break Up printTotal
//Move clearOut to the top
//For Loop
const counterEl = document.getElementById("counter")
const totalCount = document.getElementById("total")
let count = 0
let countSum = 0

textColor()
totalCount.innerHTML = `How many High moments did you have this week?`

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
  counterEl.innerHTML = count
  textColor()
}

function reset() {
  count = 0
  counterEl.innerHTML = count
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
  } 
  if (countSum < 0) {
    totalCount.innerHTML = `Seems like your Lows for this week are greater than Highs by ${Math.abs(countSum)}. BETTER LUCK NEXT TIME.`
  } 
  if (count = 0) {
    totalCount.innerHTML = `YOU BROKE EVEN THIS WEEK.`
  }
}

function clearOut() {
  count = 0
  countHi = 0
  countLow = 0
  counterEl.innerHTML = count
  totalCount.innerHTML = `How many High moments did you have this week?`
  textColor()
}