const counterEl = document.getElementById("counter")
const totalCount = document.getElementById("total")
let count = 0

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
  count = count + 1
  counterEl.innerHTML = count
  textColor()
}

function decrease() {
  count = count - 1
  counterEl.innerHTML = count
  textColor()
}

function reset() {
  count = 0
  counterEl.innerHTML = count
  textColor()
}

function printTotal() {
  let countStr = count

  if (count > 0){
    totalCount.innerHTML = `Seems like your Highs are ${countStr}. KEEP IT UP.`
  } else if (count < 0) {
    totalCount.innerHTML = `Seems like your Lows are ${countStr}. BETTER LUCK NEXT TIME.`
  }
}
