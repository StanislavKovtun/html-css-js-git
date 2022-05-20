// time:
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();

  currentTime = (hours < 10 ? '0' : '') + hours + ":" + (mins < 10 ? '0' : '') + mins + ":" + (secs < 10 ? '0' : '') + secs
  const divClock = document.getElementById('clock');
  divClock.innerHTML = currentTime;
}

setInterval(printTime, 1000);

// add/clear count:
// const counterNode = document.querySelector('.counter');
const counterNode = document.querySelector('.valueNumber');
const addNode = document.querySelector('.add');
const clearNode = document.querySelector('.clear');
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