var messages = [
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit",
  "Weihnachten ist die schönste Zeit",
  "Weihnachten ist die dollste Zeit",
  "Weihnachten ist die doofste Zeit"
];

var currentDoorNumber;
var messageHolderElement = document.getElementById("messageHolder");
var messageElement = document.getElementById("message");
var messageBoxLeftPosition = document.getElementById("door16").getBoundingClientRect().left;

if (!localStorage.openDoors) {
  localStorage.setItem("openDoors", "[]");
}

 JSON.parse(localStorage.openDoors).forEach(function(doorNumber) {
   showOpenDoor(doorNumber)
});

function openDoor(doorNumber) {
  if (isAllowedToOpenDoor(doorNumber)) {
    currentDoorNumber = doorNumber;
    var doorElement = document.getElementById("door" + doorNumber);
    var messageBoxTopPosition = doorElement.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
    messageHolderElement.style.top = messageBoxTopPosition + "px";
    messageHolderElement.style.left = messageBoxLeftPosition + "px";
    messageElement.innerHTML = messages[doorNumber-1];
    messageHolderElement.style.display = 'block';
  }
}

function isAllowedToOpenDoor(doorNumber) {
  var date = new Date();
  //TODO change to 11
  if (date.getMonth()<9) {
    return false;
  }
  if (date.getDate()<doorNumber) {
    return false;
  }
  return true
}

function closeMessageHolder() {
  showOpenDoor(currentDoorNumber);
  messageHolderElement.style.display = 'none';
  storeOpenDoor(currentDoorNumber)
}

function showOpenDoor(doorNumber) {
  var doorElement = document.getElementById("door" + doorNumber);
  doorElement.onclick=null;
  doorElement.style.border = "none";
  doorElement.innerHTML = '<img class="doorImage" src="resources/images/door' + doorNumber + '.png" />';
}

function storeOpenDoor(doorNumber) {
  var openDoors = JSON.parse(localStorage.openDoors);
  if (openDoors.indexOf(doorNumber) === -1) {
    openDoors.push(doorNumber);
    localStorage.setItem("openDoors", JSON.stringify(openDoors));
  }
}
