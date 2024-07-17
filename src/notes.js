

function isNoteWhite(pitch) {
    return !isNoteBlack(pitch);
}


function isNoteBlack(pitch) {
    pitch %= 12;
    return (pitch === 1 || pitch === 3 || pitch === 6 || pitch === 8 || pitch === 10);
}



module.exports = {
    isNoteWhite,
    isNoteBlack
};
