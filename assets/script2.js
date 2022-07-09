var container = document.querySelector(".container");
m = moment();

setInterval(function timeNow() {
    DTHeading = document.getElementById('DTHeading')
    DTHeading.innerText = moment().format('dddd, MMMM do YYYY, h:mm:ss a');
}, 1000);

function setHourboxContent (timeSetPM, eventSetPM) {
    for (i=8; i<20; i++) {
        var hourBox = document.createElement('div');
        var hourBoxTime = document.createElement('p');
        var hourBoxEvent = document.createElement('p');
        container.appendChild(hourBox);
        hourBox.appendChild(hourBoxTime);
        hourBox.appendChild(hourBoxEvent);
        hourBoxEvent.addEventListener('dblclick', openEdit);
        if (i === m.get('hours')) {
            hourBox.style.backgroundColor = 'lightSkyBlue'
        };
        if (i < m.get('hours')) {
            hourBox.style.backgroundColor = 'LightCoral';
        }
        if (i > m.get('hours')) {
            hourBox.style.backgroundColor = 'LightSeaGreen';
        }
        if (i<13) {
            timeSetAM = i + ':00 AM'
            console.log(timeSetAM)
            eventSet = 'OPEN'
            localStorage.setItem(timeSetAM, eventSet)
            hourBoxTime.innerText = timeSetAM 
            hourBoxEvent.innerText = eventSet     
        }; 
        if (i>=13) {
            timeSetPM = (i - 12) + ':00 PM'
            console.log(timeSetPM)
            eventSet = 'OPEN'
            localStorage.setItem(timeSetPM, eventSet)
            hourBoxTime.innerText = timeSetPM
            hourBoxEvent.innerText = eventSet
        }; 
    }
}
function openEdit(event) {
    var editForm = document.createElement('form')
    var editInput = document.createElement('input')
    editInput.setAttribute('type', 'text')
    var editSubmitBtn = document.createElement('button')
    editSubmitBtn.innerText = 'EDIT'
    editForm.appendChild(editInput);
    editForm.appendChild(editSubmitBtn);
    event.target.replaceWith(editForm);
    editSubmitBtn.addEventListener('click', function editSubmit(event) {
        event.preventDefault();
        var hourBoxEventEdit = document.createElement('p');
        hourBoxEventEdit.innerText = editInput.value;
        console.log(localStorage)
        if (editInput.value === '') {
            editForm.replaceWith('OPEN')
        }
        else {
            editForm.replaceWith(hourBoxEventEdit)
        };
        hourBoxEventEdit.addEventListener('dblclick', openEdit);
        console.log(container.children[0].firstChild.innerText)
    })
}
setHourboxContent()
console.log(localStorage)
