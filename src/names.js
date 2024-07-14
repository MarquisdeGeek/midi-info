
const szPatchList = [
	/*Pianos*/
	"Acoustic Grand Piano",
	"Bright Acoustic Piano",
	"Electric Grand Piano",
	"Honky-tonk Piano",
	"Electric Piano 1",
	"Electric Piano 2",
	"Harpsichord",
	"Clavinet",
	/*Chromatic Percussion*/
	"Celesta",
	"Glockenspiel",
	"Music Box",
	"Vibraphone",
	"Marimba",
	"Xylophone",
	"Tubular Bells",
	"Dulcimer",
	/*Organs*/
	"Draw Organ",
	"Percussive Organ",
	"Rock Organ",
	"Church Organ",
	"Reed Organ",
	"Accordian",
	"Harmonica",
	"Tango Accordian",
	/*Guitars*/
	"Acoustic Guitar (nylon)",
	"Acoustic Guitar (steel)",
	"Electric Guitar (jazz)",
	"Electric Guitar (clean)",
	"Electric Guitar (muted)",
	"Overdriven Guitar",
	"Distortion Guitar",
	"Guitar harmonics",
	/*Basses*/
	"Acoustic bass",
	"Electric Bass (finger)",
	"Electric Bass (picked)",
	"Fretless Bass",
	"Slap Bass 1",
	"Slap Bass 2",
	"Synth bass 1",
	"Synth bass 2",
	/*Strings*/
	"Violin",
	"Viola",
	"Cello",
	"Contrabass",
	"Tremolo strings",
	"Pizzicato strings",
	"Orchestral harp",
	"Timpani",
	/*Ensembles*/
	"String ensemble 1",
	"String ensemble 2",
	"Synth strings 1",
	"Synth strings 2",
	"Choir Ahhs",
	"Voice oohs",
	"Synth voice",
	"Orchestra hit",
	/*Brass*/
	"Trumpet",
	"Trombone",
	"Tuba",
	"Muted trumpet",
	"French horn",
	"Brass section",
	"Synth brass 1",
	"Synth brass 2",
	/*Reeds*/
	"Soprano sax",
	"Alto sax",
	"Tenor sax",
	"Baritone sax",
	"Oboe",
	"English horn",
	"Bassoon",
	"Clarinet",
	/*Pipes*/
	"Picclo",
	"Flute",
	"Recorder",
	"Pan Flute",
	"Bottle Blow",
	"Shakuhachi",
	"Whistle",
	"Ocarina",
	/*Synth Lead*/
	"Lead 5 (Square)",
	"Lead 5 (Sawtooth)",
	"Lead 5 (Calliope)",
	"Lead 5 (Chiff)",
	"Lead 5 (Charang)",
	"Lead 5 (Voice)",
	"Lead 5 (Fifths)",
	"Lead 5 (Bass+lead)",
	/*Synth Pads*/
	"Pad 1 (New age)",
	"Pad 2 (Warm)",
	"Pad 3 (Polysynth)",
	"Pad 4 (Choir)",
	"Pad 5 (Bowed)",
	"Pad 6 (Metallic)",
	"Pad 7 (Halo)",
	"Pad 8 (Sweep)",
	/*Synth FX*/
	"FX 1 (Rain)",
	"FX 2 (Soundtrack)",
	"FX 3 (Crystal)",
	"FX 4 (Atmosphere)",
	"FX 5 (Brightness)",
	"FX 6 (Goblins)",
	"FX 7 (Echoes)",
	"FX 8 (Sci-fi)",
	/*Ethnic*/
	"Sitar",
	"Banjo",
	"Shamisen",
	"Koto",
	"Kalimba",
	"Bagpipe",
	"Fiddle",
	"Shanai",
	/*Percussive*/
	"Tinkle bell",
	"Agogo",
	"Steel drums",
	"Woodblock",
	"Taiko drum",
	"Melodic tom",
	"Synth drum",
	"Reverse cymbal",
	/*FX*/
	"Guitar fret noise",
	"Breath noise",
	"Seashore",
	"Bird tweet",
	"Telephone ring",
	"Helicopter",
	"Applause",
	"Gunshot",
];


const szGMDrums = [
	"???",	/* C0 */
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	/* C1  */
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	
	"???",	/* C2 */
	"???",	
	"???",	
	"High Q",	
	"Slap",	
	"???",	
	"???",	
	"Sticks",	
	"Square click",	
	"???",	
	"???",	
	"Acoustic Kick Drum",	
	"Electric Kick Drum",		/* C3=36 */
	"Side Stick",
	"Acoustic Snare Drum",
	"Hand Clap",
	"Electric Snare Drum ",	/*(crisp, electronic)", */
	"Low Floor Tom",
	"Closed Hi Hat",
	"High Floor Tom",
	"Opening Hi Hat",	/* pedal hh */
	"Low Tom",
	"Open Hi Hat",
	"Low Mid Tom",
	"High Mid Tom",		/* c4 */
	"Crash Cymbal 1",
	"High Tom",
	"Ride Cymbal 1",
	"Chinese Boom",
	"Ride Bell",
	"Tamborine",
	"Splash cymbal",
	"Cowbell",
	"Crash Cymbal (2)",
	"Vibra Slap",
	"Ride Cymbal (2)",
	"Hi bongo",		/* c5 */
	"Lo bongo",
	"Mute High Conga",
	"Open High Conga",
	"Low Conga",
	"High Timbale",
	"Low Timbale",
	"High Agogo",
	"Low Agogo",
	"Cabasa",
	"Maracas",
	"Short Hi Whistle",
	"Long Low Whistle",	/*c6 */
	"Short Guiro",
	"Long Guiro",
	"Claves",
	"High Woodblock",
	"Low Woodblock",
	"Mute Cuica",
	"Open Cuica",
	"Mute Triangle",
	"Open Triangle",
	"Shaker",
	"Jingle Bell",
	"Tring",	/* C7 */
	"Castinets",	
	"Mute Sudro",	
	"Open Sudro",	
];

const szCCList = [
	"Bank Select",
	"Modulation",
	"Breath Control",
	"Undefined 3",
	"Foot",
	"Portamento Time",
	"Date Entry",
	"Volume	",
	"Balance",
	"Undefined 9",
	"Pan",
	"Expression",
	"Effort Control 1",
	"Effort Control 2",
	"Undefined 14",
	"Undefined 15",
	"General Purpose 1",
	"General Purpose 2",
	"General Purpose 3",
	"General Purpose 4",
	/* 20-31 are undefined */
	"Undefined 20",
	"Undefined 21",
	"Undefined 22",
	"Undefined 23",
	"Undefined 24",
	"Undefined 25",
	"Undefined 26",
	"Undefined 27",
	"Undefined 28",
	"Undefined 29",
	"Undefined 30",
	"Undefined 31",
	/* LSB for control changes 0-31		32-63 */
	"lsb-32", "lsb-33", "lsb-34", "lsb-35", "lsb-36", "lsb-37", "lsb-38", 
	"lsb-39", "lsb-40", "lsb-41", "lsb-42", "lsb-43", "lsb-44", "lsb-45", 
	"lsb-46", "lsb-47", "lsb-48", "lsb-49", "lsb-50", "lsb-51", "lsb-52", 
	"lsb-53", "lsb-54", "lsb-55", "lsb-56", "lsb-57", "lsb-58", "lsb-59", 
	"lsb-60", "lsb-61", "lsb-62", "lsb-63",

	"Sustain Pedal",
	"Portamento",
	"Pedal Sustenuto",
	"Pedal Soft",
	"Legato Foot Switch",
	"Hold 2",
	"Sound Variation",
	"Harm Content",
	"Release Time",
	"Attack Time",
	"Brightness",
	"Reverb",
	"Delay",
	"Pitch Transpose",
	"Flange",
	"Special FX",
	"General Purpose 5",
	"General Purpose 6",
	"General Purpose 7",
	"General Purpose 8",
	"Portamento Control",
	/* 85-90 are undefined */
	"Undefined 85",
	"Undefined 86",
	"Undefined 87",
	"Undefined 88",
	"Undefined 89",
	"Undefined 90",
	"FX Depth",
	"Tremelo Depth",
	"Chorus Depth",
	"Celesta Depth",
	"Phaser Depth",
	"Data Inc",
	"Data Dec",
	"Non Reg Param LSB",
	"Non Ref Param MSB",
	"Reg Param LSB",
	"Reg Param MSB",
	/* 102-119 are undefined */
	"Undefined 102",
	"Undefined 103",
	"Undefined 104",
	"Undefined 105",
	"Undefined 106",
	"Undefined 107",
	"Undefined 108",
	"Undefined 109",
	"Undefined 110",
	"Undefined 111",
	"Undefined 112",
	"Undefined 113",
	"Undefined 114",
	"Undefined 115",
	"Undefined 116",
	"Undefined 117",
	"Undefined 118",
	"Undefined 119",
	"All Sound Off",
	"Reset All Controllers",
	"Local Control",
	"All Notes Off",
	"Omni Mode Off",
	"Omni Mode On",
	"Mono Mode On",
	"Poly Mode On",
];

const szNoteName = [
	"C ",
	"Db",
	"D ",
	"Eb",
	"E ",
	"F ",
	"Gb",
	"G ",
	"Ab",
	"A ",
	"Bb",
	"B ",
];


function getProgram(programIndex) {
    if (programIndex < 0 || programIndex > 127) {
        return 'unknown';
    }

    return szPatchList[programIndex];
}


function getDrum(drumIndex) {
    if (drumIndex < 0 || drumIndex > 127) {
        return 'unknown';
    }

    return szGMDrums[drumIndex];
}


function getCC(controlChangeIndex) {
    if (controlChangeIndex < 0 || controlChangeIndex > 127) {
        return '';
    }

    return szCCList[controlChangeIndex];
}


function getNoteFromMIDI(midiNote) {
    if (midiNote < 0 || midiNote > 127) {
        return 'err';
    }

    return `${szNoteName[midiNote%12]}${Math.floor(midiNote/12)}`;
}


module.exports = {
    getProgram,
    getDrum,
    getCC,
    getNoteFromMIDI,
    // Aliases
    getControlChange: getCC,
};
