// MIDI durations, in PPQN
// Suggested use is to initialise the MIDI stream with DURATION_CROCHET
// and specify all durations from the values in this table

module.exports = {

    DURATION_BREVE:         1536,
    DURATION_MINIM:          768,
    DURATION_CROCHET:        384,
    DURATION_QUAVER:         192,
    DURATION_SEMIQUAVER:      96,
    DURATION_SEMIDEMIQUAVER:  48,

    DURATION_DOTTED_MINIM:  1152,
    DURATION_DOTTED_CROCHET: 576,
    DURATION_DOTTED_QUAVER:  288,

    DURATION_TRIPLE_CROCHET: 256,

    // Aliases
    DURATION_QUARTER_NOTE:   384,

};
