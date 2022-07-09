m = moment();

setInterval(function timeNow() {
    DTHeading = document.getElementById('DTHeading')
    DTHeading.innerText = moment().format('dddd, MMMM do YYYY, h:mm:ss a');
}, 1000);

for (i=8; i<20; i++) {
    // MAKE HOURBOXES
    var container = document.querySelector(".container");
    var hourBox = document.createElement('div');
    hourBox.setAttribute('class', 'row')
    // SET TIME
    var hourBoxTime = document.createElement('p');
    hourBoxTime.setAttribute("class", "hour col-2")
    if (i<13) {
        hourBoxTime.innerText = i + ':00 AM'
    }; 
    if (i>=13) {
        hourBoxTime.innerText = (i - 12) + ':00 PM'
    };
    // EVENTS
    var hourBoxEvent = document.createElement('textarea');
    if (i === m.get('hours')) {
        hourBoxEvent.setAttribute("placeholder", "OPEN");
        hourBoxEvent.setAttribute("class", "col-8 present");
    };
    if (i < m.get('hours')) {
        hourBoxEvent.setAttribute("placeholder", "CLOSED");
        hourBoxEvent.setAttribute("class", "col-8 past");
        hourBoxEvent.setAttribute("disabled", "true");
    }
    if (i > m.get('hours')) {
        hourBoxEvent.setAttribute("placeholder", "OPEN");
        hourBoxEvent.setAttribute("class", "col-8 future");
    };
    hourBoxEvent.textContent = localStorage.getItem(i)
    // EDIT BUTTONS
    var editBtn = document.createElement('button')
    editBtn.innerText = 'edit event';
    editBtn.setAttribute('class', 'col-2 saveBtn')
    editBtn.setAttribute("id", i)
    editBtn.addEventListener('click', saveToLocal)
    // APPENDS
    var container = document.querySelector(".container");
    hourBox.appendChild(hourBoxTime);
    hourBox.appendChild(hourBoxEvent);
    hourBox.appendChild(editBtn)
    container.appendChild(hourBox);
}
// LOCAL STORAGE
function saveToLocal(event) {
    var key = event.target.id;
    var value = event.target.previousElementSibling.value;

    localStorage.setItem(key, value)
}

