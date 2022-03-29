const turnOnOff = document.getElementById("turnOnOff");
const lb = document.getElementById("lb");

function isBroken() {
  return lb.src.indexOf("broken") > -1;
}

function tOn() {
  if (!isBroken()) {
    lb.src = "img/light bulb turned on.png";
  }
}

function tOff() {
  if (!isBroken()) {
    lb.src = "img/light bulb turned off.png";
    turnOnOff.textContent = "Turn On"
  }
}

function toBreak() {
  lb.src = "img/light bulb broken.png";
}

function tOnOff() {
  if (!isBroken()) {
    if (turnOnOff.textContent == "Turn On") {
      tOn();
      turnOnOff.textContent = "Turn Off";
    } else {
      tOff();
      turnOnOff.textContent = "Turn On";
    }
  }
}
