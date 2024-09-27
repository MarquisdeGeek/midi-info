const MessagesConstants = require('./messages-constants');

// BUGWARN: The logic for the isXXXX functions varies between functions

function isNoteOn(data) {
    if ((data[0] & 0xf0) === MessagesConstants.NOTE_ON && data.length > 2 && data[2] !== 0) {
        return true;
    }

    return false;
}


function isNoteOff(data) {
    if ((data[0] & 0xf0) === MessagesConstants.NOTE_OFF) {
        return true;
    }

    if ((data[0] & 0xf0) === MessagesConstants.NOTE_ON && data.length > 2 && data[2] === 0) {
        return true;
    }

    return false;
}


function isSetProgram(data) {
    if ((data[0] & 0xf0) === MessagesConstants.SET_PROGRAM) {
        return true;
    }

    return false;
}


function isNotePressure(data) {
    if ((data[0] & 0xf0) === MessagesConstants.NOTE_KEY_PRESSURE) {
        return true;
    }

    return false;
}


// Meta
function getMetaString(data) {
    if (data && data.length && data[0] === 0xff) {
        const metaMessage = data[1];

        switch (metaMessage) {
            case MessagesConstants.meta.TEXT:
                return MessagesConstants.Name.META.TEXT;

            case MessagesConstants.meta.COPYRIGHT:
                return MessagesConstants.Name.META.COPYRIGHT;

            case MessagesConstants.meta.TRACK_NAME:
                return MessagesConstants.Name.META.TRACK_NAME;

            case MessagesConstants.meta.INSTRUMENT_NAME:
                return MessagesConstants.Name.META.INSTRUMENT_NAME;

            case MessagesConstants.meta.LYRICS:
                return MessagesConstants.Name.META.LYRICS;

            case MessagesConstants.meta.MARKER:
                return MessagesConstants.Name.META.MARKER;

            case MessagesConstants.meta.CUE_MARKER:
                return MessagesConstants.Name.META.CUE_MARKER;
        }
    }

    return undefined;
}


function getMetaNumeric(data) {
    if (data && data.length && data[0] === 0xff) {
        const metaMessage = data[1];

        switch (metaMessage) {
            case MessagesConstants.meta.TEMPO:
                return MessagesConstants.Name.META.TEMPO;
        }
    }

    return undefined;
}


// CC
function isBankSelect(data) {
    if ((data[0] & 0xf0) !== MessagesConstants.SET_PARAMETER) {
        return false;
    }

    if (data.length < 3 || (data[1] & 0x7f) !== MessagesConstants.cc.BANK_SELECT) {
        return false;
    }

    return true;
}


// Brute force, determine the message type and unpack the parameters
// from the array, into named fields
// NOTE: The naming of these fields intentionally match those of the midi-file
// module, so that now transformations need to be done.
function unpack(data) {
    if (isNoteOff(data)) { // 80
        return {
            type:       MessagesConstants.Name.MSG_NOTE_OFF,
            channel:    data[0] & 0x0f,
            noteNumber: data[1]
        };
    }
    //
    if (isNoteOn(data)) { // 90
        return {
            type:       MessagesConstants.Name.MSG_NOTE_ON,
            channel:    data[0] & 0x0f,
            noteNumber: data[1],
            velocity:   data[2], 
        };
    }
    //
    if (isNotePressure(data)) { // A0
        return {
            type:           MessagesConstants.Name.MSG_NOTE_KEY_PRESSURE,
            channel:        data[0] & 0x0f,
            noteNumber:     data[1],
            amount:         data[2]
        };
    }
    //
    if (isSetProgram(data)) { // C0
        return {
            type:           MessagesConstants.Name.MSG_SET_PROGRAM,
            channel:        data[0] & 0x0f,
            programNumber:  data[1]
        };
    }


    // CC
    if (isBankSelect(data)) {
        return {
            type:           MessagesConstants.Name.MSG_SET_PARAMETER,
            channel:        data[0] & 0x0f,
            controllerType: data[1],
            value:          data[2],
            //
            subtype:        MessagesConstants.Name.CC.BANK_SELECT,
        };
    }
    

    // Meta
    const metaTypeString = getMetaString(data);
    if (metaTypeString) {
        const rebuiltStringAsArray = data.map((d, idx) => {
            if (idx > 2) {
                return String.fromCharCode(d);
            }
            return '';
        });
        const rebuiltString = rebuiltStringAsArray.join('');

        return {
            type:           metaTypeString,
            text:           rebuiltString
        };
    }

    const metaTypeNumeric = getMetaNumeric(data);
    if (metaTypeNumeric) {
        const msg = {
            type:           metaTypeNumeric,
        };

        if (metaTypeNumeric === MessagesConstants.Name.META.TEMPO) {
            msg.microsecondsPerBeat = (((data[3] << 8) | data[4]) << 8) | data[5];
        }

        return msg;
    }

    // TODO: Add the rest, when needed. (Or it's time to do busy work!)
    return undefined;
}


module.exports = {
    unpack,
    //
    isNoteOn,
    isNoteOff,
    isSetProgram
}
