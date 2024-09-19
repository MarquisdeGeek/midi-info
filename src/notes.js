

function isNoteWhite(pitch) {
    return !isNoteBlack(pitch);
}


function isNoteBlack(pitch) {
    pitch %= 12;
    return (pitch === 1 || pitch === 3 || pitch === 6 || pitch === 8 || pitch === 10);
}


// e.g C => 0, Bb => 11 etc
function parseNoteName(noteName) {
    let noteMapper = { "C": 0, "D": 2, "E": 4, "F": 5, "G": 7, "A":9, "B": 11 };
    let first = noteName[0].toUpperCase();
    let offset = noteMapper[first];

    if (noteName.length > 1) {
        if (noteName[1] === 'b') {
            offset += 1;
        } else if (noteName[1] === '#') {
            offset -= 1;
        }
    }

    return offset;
}


module.exports = {
    isNoteWhite,
    isNoteBlack,

    parseNoteName
};
