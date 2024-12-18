let audioCtx;
let oscList = [];
let gainPiano;

// Initialize AudioContext
export function initPiano() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  gainPiano = audioCtx.createGain();
  gainPiano.connect(audioCtx.destination);

  // Create oscillator list for each key
  for (let i = 0; i < 256; i++) {
    oscList[i] = null;
  }
}

export function playNote(freq, waveform = "sine") {
  if (!audioCtx) {
    console.error("AudioContext not initialized. Call initAudio() first.");
    return null;
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = waveform; // Set the waveform type (sine, square, etc.)
  osc.frequency.value = freq;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  gain.gain.setValueAtTime(0.3, audioCtx.currentTime); // Set the volume
  osc.start();

  return { osc, gain }; // Return the oscillator and gain for later use
}

// Stop a note by disconnecting its oscillator
export function stopNote(oscillatorData) {
  if (oscillatorData) {
    const { osc, gain } = oscillatorData;

    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1); // Fade out
    osc.stop(audioCtx.currentTime + 0.1);
  }
}

export function createNoteTable() {
  const noteFreq = [];
  for (let i=0; i< 9; i++) {
    noteFreq[i] = [];
  }

  noteFreq[3]["C"] = 130.8128;
  noteFreq[3]["C#"] = 138.5913;
  noteFreq[3]["D"] = 146.8324;
  noteFreq[3]["D#"] = 155.5635;
  noteFreq[3]["E"] = 164.8138;
  noteFreq[3]["F"] = 174.6141;
  noteFreq[3]["F#"] = 184.9972;
  noteFreq[3]["G"] = 195.9977;
  noteFreq[3]["G#"] = 207.6523;
  noteFreq[3]["A"] = 220.0000;
  noteFreq[3]["A#"] = 233.0819;
  noteFreq[3]["B"] = 246.9417;

  noteFreq[4]["C"] = 261.6256;
  noteFreq[4]["C#"] = 277.1826;
  noteFreq[4]["D"] = 293.6648;
  noteFreq[4]["D#"] = 311.1270;
  noteFreq[4]["E"] = 329.6276;
  noteFreq[4]["F"] = 349.2282;
  noteFreq[4]["F#"] = 369.9944;
  noteFreq[4]["G"] = 391.9954;
  noteFreq[4]["G#"] = 415.3047;
  noteFreq[4]["A"] = 440.0000;
  noteFreq[4]["A#"] = 466.1638;
  noteFreq[4]["B"] = 493.8833;

  noteFreq[5]["C"] = 523.2511;
  noteFreq[5]["C#"] = 554.3653;
  noteFreq[5]["D"] = 587.3295;
  noteFreq[5]["D#"] = 622.2540;
  noteFreq[5]["E"] = 659.2551;
  noteFreq[5]["F"] = 698.4565;
  noteFreq[5]["F#"] = 739.9888;
  noteFreq[5]["G"] = 783.9909;
  noteFreq[5]["G#"] = 830.6094;
  noteFreq[5]["A"] = 880.0000;
  noteFreq[5]["A#"] = 932.3275;
  noteFreq[5]["B"] = 987.7666;

  noteFreq[6]["C"] = 1046.502;
  return noteFreq;
}