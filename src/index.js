// Bring in the set of constants to reflect MIDI messages and their
// parameters, to eliminate the need for magic numbers.

/** An instrument list, only valid in the General MIDI standard */
const Instruments = require('./instruments');

/** A drum map, only valid in the General MIDI standard */
const Drums = require('./drums');

/** Note descriptions, with Middle C = C5 = MIDI note 60 */
const Notes = require('./notes');

/** Message names, including CCs */
const Messages = require('./messages');

/** Pulse durations names, in ppqn=384 */
const Pulses = require('./pulses');

/** Human-friendly names */
const Names = require('./names');

/** Chord generation */
const Chords = require('./chords');


module.exports = {

    Constants: {
        Instruments,
        Drums,
        Notes,
        Messages,
        Pulses,
    },

    Names,
    Chords,
};