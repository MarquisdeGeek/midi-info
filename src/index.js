// Bring in the set of constants to reflect MIDI messages and their
// parameters, to eliminate the need for magic numbers.

/** An instrument list, only valid in the General MIDI standard */
const InstrumentsConstants = require('./instruments-constants');

/** A drum map, only valid in the General MIDI standard */
const DrumsConstants = require('./drums-constants');

/** Note descriptions, with Middle C = C5 = MIDI note 60 */
const NotesConstants = require('./notes-constants');

/** Message names, including CCs */
const MessagesConstants = require('./messages-constants');

/** Pulse durations names, in ppqn=384 */
const PulsesConstants = require('./pulses-constants');

/** Human-friendly names */
const Names = require('./names');

/** Code to process MIDI messages */
const Messages = require('./messages');

/** Chord generation */
const Chords = require('./chords');

/** Note-specific logic */
const Notes = require('./notes');


module.exports = {

    Constants: {
        Instruments:    InstrumentsConstants,
        Drums:          DrumsConstants,
        Notes:          NotesConstants,
        Messages:       MessagesConstants,
        Pulses:         PulsesConstants,
    },

    Messages,
    Names,
    Chords,
    Notes
};