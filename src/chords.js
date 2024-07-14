// Chord logic
function isNoteWhite(pitch) {
    return !isNoteBlack(pitch);
}


function isNoteBlack(pitch) {
    pitch %= 12;
    return (pitch === 1 || pitch === 3 || pitch === 6 || pitch === 8 || pitch === 10);
}


// BUGWARN: Not accurate in the general case
function isMajorChord(noteList) {
    return noteList[1] - noteList[0] === 4;
}


function guessChord(keys, chnl, keySplitMax) {
    // First look for single finger chords
    // 1) Major chord: a single note this as root'
    // 2) Minor chord: note, with closest black to the left
    // 3) Seventh chord: note, with closest white to the left
    // 4) Minor Seventh: white and black, to the left
    let lowest = keys.getLowestNotes(chnl, keySplitMax, 3);

    if (lowest.length === 1) {
        return makeMajor(lowest[0].pitch);
    }

    if (lowest.length === 2) {
        // The first note is the one on the left.
        // Is it black (minor), or 7th (white)
        if (isNoteBlack(lowest[0].pitch)) {
            return makeMinor(lowest[1].pitch);
        }
        // white
        return makeMajorSeventh(lowest[1].pitch);
    }

    if (lowest.length === 3) {
        // The first two notes must be on a different colour to be a min7
        if (isNoteBlack(lowest[0].pitch) === isNoteBlack(lowest[1].pitch)) {
            // Ignore this case, for now, could be a "proper" chord
        } else {
            return makeMinorSeventh(lowest[2].pitch);
        }
    }

    // Might be real chord, or one not covered by this single-finger algorithm,
    // so return all the notes.
    let altChord = lowest.map((c) => c.pitch);
    return altChord;
}


function makeMajor(root) {
    return [ root, root+4, root+7 ];
}


function makeMinor(root) {
    return [ root, root+3, root+7 ];
}


function makeMajorSeventh(root) {
    let chord = makeMajor(root);
    chord.push(root + 10);
    return chord;
}


function makeMinorSeventh(root) {
    let chord = makeMinor(root);
    chord.push(root + 11);
    return chord;
}


function makeAugmented(root) {
    return [ root, root+4, root+8 ];
}


function makeDiminished(root) {
    return [ root, root+3, root+6, root+9 ];
}




module.exports = {
    guessChord,
    //
    isMajorChord,
    //
    makeMajor,
    makeMinor,
    makeAugmented,
    makeDiminished,
    //
    makeMajorSeventh,
    makeMinorSeventh,
};
