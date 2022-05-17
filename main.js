// time:
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();

  currentTime = hours + ":" + mins + ":" + secs
  const divClock = document.getElementById('js-clock');
  divClock.innerHTML = currentTime;
}

setInterval(printTime, 1000);

// add/clear count:
const counterNode = document.querySelector('.js-counter');
const addNode = document.querySelector('.js-add');
const clearNode = document.querySelector('.js-clear');
let counter = 0;

function render() {
  counterNode.innerText = counter;
}

function refreshCounter(k) {
  k == 0 ? counter = 0 : counter += k;
}

addNode.addEventListener('click', () => {
  refreshCounter(1)
  render();
})

clearNode.addEventListener('click', () => {
  refreshCounter(0)
  render();
})

//refreshCounter(0);
render();
console ('111');