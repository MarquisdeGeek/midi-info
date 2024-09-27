const MessagesConstants = require('./messages-constants');
const MessagesParse = require('./messages-parse');


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


function makeMetaMarker(text) {
    return makeMetaMessageString(MessagesConstants.meta.MARKER, text);
}

function makeTrackName(text) {
    return makeMetaMessageString(MessagesConstants.meta.TRACK_NAME, text);
}


function makeMetaMessageString(metaID, text) {
    if (text.length > 127) {
        return [];
    }
    //
    let msg = [
        MessagesConstants.METAEVENT,
        metaID,
    ];

    msg.push(text.length);
    text.split("").forEach((c) => {
        msg.push((c.charCodeAt(0)) & 0x7f);
    })

    return msg;
}


module.exports = {
    makeNoteOn,
    makeNoteOff,
    makeLocalControl,
    makeCC,
    makeSetProgram,
    makeAllNotesOff,
    //
    makeMetaMarker,
    makeTrackName,
    //
    parse: MessagesParse
};
