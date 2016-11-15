var noteInput, noteName, textEntered, target; //declare variables

noteName = document.getElementById('noteName'); //Element that holds note
noteInput = document.getElementById('noteInput'); //Input for writing the note

function writeLabel(e) { //Declare function
    if (!e) { //if event object not present
        e = window.event; //use Ie5-8 fallback
    }
    target = e.target || e.srcElement; //get target of event
    textEntered = e.target.value; //value of that element
    noteName.textContent = textEntered; //update textnode
}

//This is where the record / pause controls and functions go..

if (document.addEventListener) { //if event listener supported
    document.addEventListener('click', function(e) { //for any click document
        recorderControls(e); //call recorderControls()
    }, false); //capture during buble phase
    //if input event fires on username input call writeLabel();
    username.addEventListener('input', writeLabel, false);
} else { //otherwise
    document.attachEvent('onclick', function(e) { //IE fallback: any click
        recorderControls(e); //calls recorderControls()
    });
    //If keyup event fires on username input call writeLabel()
    username.attachEvent('onkeyup', writeLabel, false);
}

function recorderControls(e) { //decalre recorderControls()
    if (!e) { //if event object not present
        e = window.event; //use IE5-8 fallback
    }
    target = e.target || e.srcElement; //get the target element
    if (e.preventDefault) { //if preventDefault() supported
        e.preventDefault(); //stop default action
    } else { //otherwise
        e.returnValue =  false; //IE fallback: stop default action
    }
}

switch (target.getAttribute('data-state')) { //get the data-state attribute
    case 'record': //if its value is recorded
        record(target); //call the record() function
        break; //exit function to where called
    case 'stop': //if its value is sotp
        stop(target); //call the stop() function
        break; //exit function to where called
        //more buttons can go here
}
};

function record(target) { //declare record function
    target.setAttribute('data-state', 'stop'); //set data-state attr to stop
    target.textContent = 'stop'; //set text to stop
}

function stop(target) { //declare stop function
    target.setAttribute('data-state', 'record'); //set data-state attr to record
    target.textContent = 'record'; //set text to record
}
