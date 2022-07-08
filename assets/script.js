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
    var editSubmitBtn = document.createElement('button')
    editSubmitBtn.innerText = 'EDIT'
    editForm.appendChild(editInput);
    editForm.appendChild(editSubmitBtn);
    event.target.replaceWith(editForm);
    editSubmitBtn.addEventListener('click', function editSubmit(event) {
        event.preventDefault();
        var hourBoxEventEdit = document.createElement('p');
        hourBoxEventEdit.innerText = editInput.value;
        // localStorage.setItem(container.children[i].firstChild.innerText, editInput.value)
        console.log(localStorage)
        if (editInput.value === '') {
            editForm.replaceWith(hourBoxEvent)
        }
        else {
            editForm.replaceWith(hourBoxEventEdit)
        };
        hourBoxEventEdit.addEventListener('dblclick', openEdit);
        console.log(container.children[0].firstChild.innerText)
    })
    
}

for (i=8; i<20; i++) {
    var hourBox = document.createElement('div');
    if (i === m.get('hours')) {
        hourBox.style.backgroundColor = 'lightSkyBlue'
    };
    if (i < m.get('hours')) {
        hourBox.style.backgroundColor = 'LightCoral';
    }
    if (i > m.get('hours')) {
        hourBox.style.backgroundColor = 'LightSeaGreen';
    };
    var hourBoxTime = document.createElement('p');
    hourBoxTime.style.backgroundColor = 'white';
    if (i<13) {
        hourBoxTime.innerText = i + ':00 AM'
    }; 
    if (i>=13) {
        hourBoxTime.innerText = (i - 12) + ':00 PM'
    };

    var hourBoxEvent = document.createElement('p');
    hourBoxEvent.innerText = 'OPEN'; 
    container.appendChild(hourBox);
    hourBox.appendChild(hourBoxTime);
    hourBox.appendChild(hourBoxEvent);
    hourBoxEvent.addEventListener('dblclick', openEdit);   
}

