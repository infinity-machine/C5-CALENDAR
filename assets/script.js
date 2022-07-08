var container = document.querySelector(".container");
m = moment();

setInterval(function timeNow() {
    DTHeading = document.getElementById('DTHeading')
    DTHeading.innerText = moment().format('dddd, MMMM do YYYY, h:mm:ss a');
}, 1000);

function openEdit(event) {
    var editForm = document.createElement('form')
    var editInput = document.createElement('input')
    editInput.setAttribute('type', 'text')
    var editSubmit = document.createElement('button')
    editSubmit.innerText = 'EDIT'
    editSubmit.addEventListener('click', function editSubmit(event) {
        event.preventDefault();
        var hourBoxEventEdit = document.createElement('p');
        // if (editInput.value = ' ') hourBoxEventEdit.innerText = 'OPEN'
        hourBoxEventEdit.innerText = editInput.value;
        editForm.replaceWith(hourBoxEventEdit);
        hourBoxEventEdit.addEventListener('dblclick', openEdit);
    })
    editForm.appendChild(editInput);
    editForm.appendChild(editSubmit);
    event.target.replaceWith(editForm); 
}

for (i=8; i<20; i++) {
    var hourBox = document.createElement('div');
    hourBox.style.backgroundColor = 'lightSkyBlue';
    if (i < m.get('hours')) hourBox.style.backgroundColor = 'LightCoral';
    if (i > m.get('hours')) hourBox.style.backgroundColor = 'LightSeaGreen';
    var hourBoxTime = document.createElement('p');
    hourBoxTime.style.backgroundColor = 'white';
    if (i<13) hourBoxTime.innerText = i + ':00 AM'; 
    if (i>=13) hourBoxTime.innerText = (i - 12) + ':00 PM';
    var hourBoxEvent = document.createElement('p');
    hourBoxEvent.innerText = 'OPEN'; 
    container.appendChild(hourBox);
    hourBox.appendChild(hourBoxTime);
    hourBox.appendChild(hourBoxEvent);
    hourBoxEvent.addEventListener('dblclick', openEdit);   
}

