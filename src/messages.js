const MessagesConstants = require('./messages-constants');

function validChannel(c) {
    if (c < 0 || c > 15) {
        return false;
    }
    return true;
}

function limitTo7Bits(v) {
    return Math.max(0, Math.min(v, 0x7f));
}


function makeCC(channel, ccMsg, ccParam) {
    if (!validChannel(channel)) {
        return []
    }
    //
    return [
        MessagesConstants.SET_PARAMETER | channel,
        ccMsg & 0x7f,
        ccParam & 0x7f
    ];
}



function makeLocalControl(channel, onOrNotOff) {
    if (!validChannel(channel)) {
        return []
    }
    //
    return [
        MessagesConstants.SET_PARAMETER | channel,
        MessagesConstants.cc.LOCAL_CONTROL,
        onOrNotOff ? 1 : 0
    ];
}



function makeNoteOn(channel, pitch, volume) {
    if (!validChannel(channel)) {
        return []
    }
    //
    return [
        MessagesConstants.NOTE_ON | channel,
        limitTo7Bits(pitch),
        limitTo7Bits(volume)
    ];
}


function makeNoteOff(channel, pitch) {
    if (!validChannel(channel)) {
        return []
    }
    // Use the 'note on, with volume 0' instead of off
    return [
        MessagesConstants.NOTE_ON | channel,
        limitTo7Bits(pitch),
        0
    ];
}


function makeSetProgram(channel, patch) {
    if (!validChannel(channel)) {
        return []
    }
    // Use the 'note on, with volume 0' instead of off
    return [
        MessagesConstants.SET_PROGRAM | channel,
        limitTo7Bits(patch)
    ];
}


function makeAllNotesOff(channel) {
    if (!validChannel(channel)) {
        return []
    }
    // Use the 'note on, with volume 0' instead of off
    return [
        MessagesConstants.SET_PARAMETER | channel,
        MessagesConstants.cc.ALL_NOTES_OFF,
        0
    ];
}


module.exports = {
    makeNoteOn,
    makeNoteOff,
    makeLocalControl,
    makeCC,
    makeSetProgram,
    makeAllNotesOff
};
