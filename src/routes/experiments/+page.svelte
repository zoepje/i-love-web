<script>
	import * as config from '$lib/config';
  import { createNoteTable, stopNote, playNote, initPiano, playSong, stopAllNotes } from "$lib/piano-functions";
  import { songs } from '$lib/songs.js';
  import { onMount } from 'svelte';

  // #region  ReuseMe 
  let animations = {};
  
  function toggleAnimation(key) {
    animations = { 
      ...animations, 
      [key]: !animations[key] 
    };
  }
  // #endregion ReuseMe

  // #region Guitar
  let an = false;
  let mySound;
  let sectionColor;
  let colorIndex = 0;
  let soundOn = true;
  let colors = ["#C46210", "#0048BA", "#9966CC", "#4B6F44"];

  function toggleSoundOnOff()  {
    if (soundOn == true) {
      soundOn = false
      mySound.pause();
      mySound.currentTime = 0;
    } else if (soundOn == false) {
      soundOn = true
    }
  }

  function playSound(mySound) {
    if (soundOn !== false){
      if (mySound.currentTime !== 0){
        mySound.pause();
        mySound.currentTime = 0;
        mySound.play();
      }
      mySound.play();
    }
  }

  function changeColor() {
    if (colors.length > 0) {
      sectionColor.style.setProperty('--old-color', colors[colorIndex - 1])
      sectionColor.style.setProperty('--new-color', colors[colorIndex])
      colorIndex = (colorIndex + 1) % colors.length;

      an = false;
      setTimeout(() => {
        an = true;
      }, 0);
    }
  }
  // #endregion Guitar

  // #region Audio API
  let audioElement; 
  let playButton; 
  let playing = false;
  let volumeControl; 
  let pannerControl; 
  let audioContext; // The AudioContext
  let track; // MediaElementSourceNode
  let gainNode; // For volume control
  let pannerNode; // For stereo panning

  // Initialize the AudioContext and audio graph on user interaction
  function initAudio() {
    if (!audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();

      // Create MediaElementSource and connect to the audio graph
      track = audioContext.createMediaElementSource(audioElement);
      gainNode = audioContext.createGain();
      pannerNode = audioContext.createStereoPanner();

      // Connect nodes: audio -> gain -> panner -> destination
      track.connect(gainNode).connect(pannerNode).connect(audioContext.destination);

      // Add listeners for volume and panner sliders
      volumeControl.addEventListener('input', (e) => {
        gainNode.gain.value = parseFloat(e.target.value);
      });

      pannerControl.addEventListener('input', (e) => {
        pannerNode.pan.value = parseFloat(e.target.value);
      });
    }

    // Resume the AudioContext (necessary for autoplay policy)
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  // Play/Pause functionality
  function togglePlay() {
    initAudio(); // Ensure AudioContext is initialized and resumed

    if (playButton.dataset.playing === 'false') {
      audioElement.play();
      playButton.dataset.playing = 'true';
      playButton.setAttribute('aria-checked', 'true');
      playing = true;
    } else {
      audioElement.pause();
      playButton.dataset.playing = 'false';
      playButton.setAttribute('aria-checked', 'false');
      playing = false;
    }
  }

  onMount(() => {
    // Reset button state when the audio ends
    audioElement.addEventListener('ended', () => {
      playButton.dataset.playing = 'false';
      playButton.setAttribute('aria-checked', 'false');
      playing = false;
    });
  });
  // #endregion Audio API

  // #region Piano
  let keyboard;
  let wavePicker;
  let songPicker;

  let noteFreq = createNoteTable(); // Get the frequency table
  let activeNotes = new Map();

  onMount(() => {
    initPiano(); // Initialize AudioContext
  });

  function startNoteHandler(event) {
    const key = event.target.getAttribute("data-note");
    const octave = event.target.getAttribute("data-octave");

    if (key && octave && !activeNotes.has(key)) {
      const freq = noteFreq[octave][key];
      const waveform = wavePicker?.value || "sine";
      const oscData = playNote(freq, waveform);

      // Store the oscillator data so it can be stopped later
      activeNotes.set(key, oscData);

      event.target.classList.add("active");
    }
  }

  function stopNoteHandler(event) {
    const key = event.target.getAttribute("data-note");
    const octave = event.target.getAttribute("data-octave");

    if (key && activeNotes.has(key)) {
      const oscData = activeNotes.get(key);
      stopNote(oscData);
      activeNotes.delete(key); // Remove the note from activeNotes

      event.target.classList.remove("active");
    }
  }

  function handleSongChange() {
    stopAllNotes(); 

    const selectedSongKey = songPicker.value; // Get the selected song key
    const waveform = wavePicker?.value || "sine"; // Get waveform or default to "sine"

    if (selectedSongKey) {
      playSong(selectedSongKey, noteFreq, waveform);
    }
  }
  // #endregion Piano
</script>

<svelte:head>
  <title>{config.title} - Experiments</title>
</svelte:head>

<h1>Experiments</h1>
<div class="experiments">   
  <div class="variable-fonts ex">
    <h2>Font animation</h2>
    <p class:animate="{animations['font']}">The five boxing wizards jump quicly.</p>
    <button on:click={() => toggleAnimation('font')}>
      <span class:hide="{animations['font']}">Animate me</span>
      <span class="stop" class:show="{animations['font']}">Stop</span>
    </button>
  </div>

  <div class="container-interaction ex">
    <div class="guitar">
      <label><input id="sound" type="checkbox" value="sound" checked on:change={toggleSoundOnOff}>Sound</label>
      <svg class="guitarSVG" viewBox="0 0 1256 3200">
        <filter id="f2" x="-100%" y="-100%" width="300%" height="300%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="-33" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        <g class="guitarBody">
          <path d="M 626 1600 C 1135 1600 1116 1738 1055 2176 C 1035 2323 1721 3176 622 3194 C -465 3176 221 2323 201 2176 C 140 1738 121 1600 630 1600 Z" fill="var(--body2)" transform="translate(0 -50)"/>
          <path d="M 626 1600 C 1135 1600 1116 1738 1055 2176 C 1035 2323 1721 3176 622 3194 C -465 3176 221 2323 201 2176 C 140 1738 121 1600 630 1600 Z" fill="var(--body)"/>
          <circle cx="628" cy="2072" r="156" fill="var(--sound-hole)" />
          <circle cx="628" cy="2072" r="162" fill="none" stroke="var(--sound-hole-ring)" stroke-width="5" />
          <path d="M 390 2490 H 862 V 2570 H 798 Q 626 2635 454 2570 H 390 Z" fill="var(--bridge-head)"/>
          <path d="M484 2527 L 772 2513" stroke-width="10" stroke="var(--nut)" stroke-linecap="round" />
        </g>
        
        <g class="guitarNeck">
          <path d="M 530 1910 H 722 V 462 H 530 V 1910" fill="var(--fretboard)" />
          <path d="M 462 345 L 562 325 M 462 231 L 562 211 M 462 112 L 562 92 M 790 345 L 690 325 M 790 231 L 690 211 M 790 112 L 690 92" stroke="var(--tuners)" stroke-width="14"/>
          <g class="dots" fill="var(--fretdots)">
            <circle cx="626" cy="934" r="10" />
            <circle cx="575" cy="1102" r="10" />
            <circle cx="677" cy="1102" r="10" />
            <circle cx="626" cy="1259" r="10" />
            <circle cx="575" cy="1456" r="10" />
            <circle cx="677" cy="1456" r="10" />
            <circle cx="626" cy="1625" r="10" />
            <circle cx="626" cy="1720" r="10" />
          </g>
          <g class="tuners" fill="var(--tuners)">
            <circle cx="462" cy="345" r="26" />
            <circle cx="462" cy="231" r="26" />
            <circle cx="462" cy="112" r="26" />
            <circle cx="790" cy="345" r="26" />
            <circle cx="790" cy="231" r="26" />
            <circle cx="790" cy="112" r="26" />
          </g>
          <path d="M 530 458 H 722 Q 745 414 746 400 L 766 60 Q 769 7 717 7 H 535 Q 487 7 490 60 L 506 400 Q 507 414 530 458 Z" fill="var(--bridge-head)"/>
          <path d="M 528 455 H 724" stroke-width="14" stroke="var(--nut)" stroke-linecap="round" />
          <path class="frets" d="M 530 580 H 722 M 530 695 H 722 M 530 791 H 722 M 530 891 H 722 M 530 976 H 722 M 530 1064 H 722 M 530 1145 H 722 M 530 1223 H 722 M 530 1293 H 722 M 530 1364 H 722 M 530 1426 H 722 M 530 1485 H 722 M 530 1545 H 722 M 530 1600 H 722 M 530 1648 H 722 M 530 1696 H 722 M 530 1744 H 722 M 530 1785 H 722 M 530 1825 H 722 M 530 1866 H 722" stroke-width="5" stroke="var(--frets)" stroke-linecap="round" />
        </g>
        <g class="strings" fill="none" stroke-width="7" stroke="var(--strings)">
          <path class="string1" d="M 542 2560 Q 542 1507 542 455 L 567 325">
            <animate class="string" attributeName="d" values="M 542 2560 Q 542 1507 542 455 L 567 325" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
          <path class="string2" d="M 576 2559 Q 576 1507 576 455 L 567 211">
            <animate class="string" attributeName="d" values="M 576 2559 Q 576 1507 576 455 L 567 211" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
          <path class="string3" d="M 610 2557 Q 610 1507 610 455 L 567 92">
            <animate class="string" attributeName="d" values="M 610 2557 Q 610 1507 610 455 L 567 92" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
          <path class="string4" d="M 642 2555 Q 642 1507 642 455 L 685 92">
            <animate class="string" attributeName="d" values="M 642 2555 Q 642 1507 642 455 L 685 92" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
          <path class="string5" d="M 676 2553 Q 676 1507 676 455 L 685 211">
            <animate class="string" attributeName="d" values="M 676 2553 Q 676 1507 676 455 L 685 211" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
          <path class="string6" d="M 710 2550 Q 710 1507 710 455 L 685 325">
            <animate class="string" attributeName="d" values="M 710 2550 Q 710 1507 710 455 L 685 325" begin="indefinite" dur="0.5s" repeatCount="none" />
          </path>
        </g>
        <g class="stringDots" fill="var(--tuners)">
          <g class="topDots">
            <circle cx="562" cy="325" r="20" />
            <circle cx="562" cy="211" r="20" />
            <circle cx="562" cy="92" r="20" />
            <circle cx="690" cy="325" r="20" />
            <circle cx="690" cy="211" r="20" />
            <circle cx="690" cy="92" r="20" />
          </g>
          <g class="bottomDots">
            <circle cx="542" cy="2560" r="12" />
            <circle cx="576" cy="2559" r="12" />
            <circle cx="610" cy="2557" r="12" />
            <circle cx="645" cy="2555" r="12" />
            <circle cx="678" cy="2553" r="12" />
            <circle cx="712" cy="2550" r="12" />
          </g>
        </g>
        <rect class="guitarPick" height="100" width="100" fill="rgba(255,255,255,0)" x="0" y="0" />
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <g class="trigger" fill="rgba(0,0,255,0)" on:click={playSound(mySound)} on:click={changeColor}>
          <rect height="2112" width="64" x="508" y="448" />
          <rect height="2112" width="64" x="546" y="448" />
          <rect height="2112" width="64" x="578" y="448" />
          <rect height="2112" width="64" x="610" y="448" />
          <rect height="2112" width="64" x="646" y="448" />
          <rect height="2112" width="64" x="678" y="448" />
        </g>
      </svg>
      <audio bind:this={mySound} src='/strum.wav' />  
    </div>
    
    <section bind:this={sectionColor} class:active={an} style="--old-color: red; --new-color: red;">
      <h2>Strum and change my color</h2>
    </section>
  </div> 

  <div class="audio-api ex">
    <h2>Stereo</h2>
    <section class="master-controls">
			<input bind:this={volumeControl} type="range" id="volume" class="control-volume" min="0" max="2" value="1" list="gain-vals" step="0.01" data-action="volume" />
			<datalist id="gain-vals">
				<option value="0" label="min">
				<option value="2" label="max">
			</datalist>
			<label for="volume">VOL</label>

			<input bind:this={pannerControl} type="range" id="panner" class="control-panner" list="pan-vals" min="-1" max="1" value="0" step="0.01" data-action="panner" />
			<datalist id="pan-vals">
				<option value="-1" label="left">
				<option value="1" label="right">
			</datalist>
			<label for="panner">PAN</label>
		</section>

    <button bind:this={playButton} class="play-button" data-playing="false" role="switch" aria-checked="false" on:click={togglePlay}>
      <span class:hide={playing}>Play</span>
      <span class="stop" class:show={playing}>Pause</span>
    </button>

    <audio bind:this={audioElement} src="/Electro_Funk.mp3"/>
  </div>

  <div class="piano ex">
    <h2>Keyboard</h2>
    <p> Play a fun song! To sustain a note, click and hold a key, then move your mouse off the keyboard before releasing the click. The note will keep playing until you stop it by clicking on the key again.</p>
    <div class="container-keyboard">
      
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="keyboard" bind:this={keyboard}   
        on:mousedown={startNoteHandler}
        on:mouseup={stopNoteHandler}
        on:mouseleave={stopNoteHandler}
        on:touchstart={startNoteHandler}
        on:touchend={stopNoteHandler} >
        <div class="white-key key c" data-note="C" data-octave="3"></div>
        <div class="black-key key cs" data-note="C#" data-octave="3"></div>
        <div class="white-key key d" data-note="D" data-octave="3"></div>
        <div class="black-key key ds" data-note="D#" data-octave="3"></div>
        <div class="white-key key e" data-note="E" data-octave="3"></div>
        <div class="white-key key f" data-note="F" data-octave="3"></div>
        <div class="black-key key fs" data-note="F#" data-octave="3"></div>
        <div class="white-key key g" data-note="G" data-octave="3"></div>
        <div class="black-key key gs" data-note="G#" data-octave="3"></div>
        <div class="white-key key a" data-note="A" data-octave="3"></div>
        <div class="black-key key as" data-note="A#" data-octave="3"></div>
        <div class="white-key key b" data-note="B" data-octave="3"></div>

        <div class="white-key key c" data-note="C" data-octave="4"></div>
        <div class="black-key key cs" data-note="C#" data-octave="4"></div>
        <div class="white-key key d" data-note="D" data-octave="4"></div>
        <div class="black-key key ds" data-note="D#" data-octave="4"></div>
        <div class="white-key key e" data-note="E" data-octave="4"></div>
        <div class="white-key key f" data-note="F" data-octave="4"></div>
        <div class="black-key key fs" data-note="F#" data-octave="4"></div>
        <div class="white-key key g" data-note="G" data-octave="4"></div>
        <div class="black-key key gs" data-note="G#" data-octave="4"></div>
        <div class="white-key key a" data-note="A" data-octave="4"></div>
        <div class="black-key key as" data-note="A#" data-octave="4"></div>
        <div class="white-key key b" data-note="B" data-octave="4"></div>

        <div class="white-key key c" data-note="C" data-octave="5"></div>
        <div class="black-key key cs" data-note="C#" data-octave="5"></div>
        <div class="white-key key d" data-note="D" data-octave="5"></div>
        <div class="black-key key ds" data-note="D#" data-octave="5"></div>
        <div class="white-key key e" data-note="E" data-octave="5"></div>
        <div class="white-key key f" data-note="F" data-octave="5"></div>
        <div class="black-key key fs" data-note="F#" data-octave="5"></div>
        <div class="white-key key g" data-note="G" data-octave="5"></div>
        <div class="black-key key gs" data-note="G#" data-octave="5"></div>
        <div class="white-key key a" data-note="A" data-octave="5"></div>
        <div class="black-key key as" data-note="A#" data-octave="5"></div>
        <div class="white-key key b" data-note="B" data-octave="5"></div>

        <div class="white-key key c" data-note="C" data-octave="6"></div>
      </div>
    </div>

    <div class="waveform">
      <span>Current waveform: </span>
      <select name="waveform" bind:this={wavePicker}>
        <option value="sine" selected>Sine</option>
        <option value="square">Square</option>
        <option value="sawtooth">Sawtooth</option>
        <option value="triangle">Triangle</option>
        <!-- <option value="custom">Custom</option> -->
      </select>
    </div>

    <div class="songs">
      <span>Play song:</span>
      <select name="song" bind:this={songPicker} on:change={handleSongChange}>
        <option value="" selected> select a song </option>
        {#each songs as song}
          <option value="{song.value}">{song.title}</option>
        {/each}
      </select> 
    </div>
  </div>
</div>


<style>
  h1 {
    margin-inline: auto;
    text-align: center;
  }

  .experiments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 2rem;
    margin-block: auto;
  }

  .ex {
    flex: 1 1;
    min-width: 250px;
    max-width: 600px;
    height: var(--size-15);
    padding: var(--size-4);
    background-color: var(--border);
    border-radius: var(--radius-4);
  }

  .hide, .stop {
    display: none;
  }

  .show {
    display: block;
  }

  button {
    width: calc(100% - (2*var(--size-4)));
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 600px) {
    .ex {
      min-width: 400px;
    }
  }

  /* #region Variable-fonts */
  @keyframes fonts {
    5% {
      font-variation-settings: "BLDA" 100, "TRMD" 0, "TRMC" 0, "SKLD" 0, "TRML" 0, "SKLA" 0, "TRMF" 0, "TRMK" 0, "BLDB" 0, "WMX2" 0, "TRMB" 0, "TRMA" 0, "SKLB" 0, "TRMG" 0, "TRME" 0;
    }
    25% {
      font-variation-settings: "BLDA" 500, "TRMD" 500, "TRMC" 404, "SKLD" 299, "TRML" 339, "SKLA" 399, "TRMF" 595, "TRMK" 688, "BLDB" 93, "WMX2" 49, "TRMB" 392, "TRMA" 357, "SKLB" 688, "TRMG" 394, "TRME" 293;
    }
    45% {
      font-variation-settings: "BLDA" 0, "TRMD" 1000, "TRMC" 750, "SKLD" 0, "TRML" 250, "SKLA" 1000, "TRMF" 250, "TRMK" 250, "BLDB" 10, "WMX2" 750, "TRMB" 500, "TRMA" 500, "SKLB" 1000, "TRMG" 750, "TRME" 500;
    }
    65% {
      font-variation-settings: "BLDA" 475, "TRMD" 200, "TRMC" 546, "SKLD" 208, "TRML" 894, "SKLA" 567, "TRMF" 501, "TRMK" 234, "BLDB" 983, "WMX2" 12, "TRMB" 4, "TRMA" 293, "SKLB" 183, "TRMG" 928, "TRME" 560;
    }
    85% {
      font-variation-settings: "BLDA" 178, "TRMD" 287, "TRMC" 263, "SKLD" 657, "TRML" 394, "SKLA" 348, "TRMF" 1000, "TRMK" 783, "BLDB" 92, "WMX2" 298, "TRMB" 348, "TRMA" 387, "SKLB" 24, "TRMG" 287, "TRME" 870;
    }
    100% {
      font-variation-settings: "BLDA" 0, "TRMD" 0, "TRMC" 0, "SKLD" 0, "TRML" 0, "SKLA" 0, "TRMF" 0, "TRMK" 0, "BLDB" 0, "WMX2" 0, "TRMB" 0, "TRMA" 0, "SKLB" 0, "TRMG" 0, "TRME" 0;
    }
  }

  .variable-fonts {
    position: relative;

    & p {
      font-size: var(--font-size-4);
      font-family: 'Decovar Alpha';
      color: var(--color-2);
    }
  }

  .variable-fonts p.animate {
    animation: fonts 5s infinite;
  }
  /* #endregion Variable-fonts */

  /* #region Guitar */
  .container-interaction {
    & .guitar {
      height: 40%;
      display: flex;

      & label {
        width: 20%;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      & .guitarSVG {
        /* Guitar colors */
        --bridge-head: #5f3232;
        --body: #b75200;
        --body2: #502f23;
        --sound-hole: #222222;
        --sound-hole-ring: #ca971b;
        --nut: #d2b48c;
        --frets: #b3b3b3;
        --fretboard: #493b2b;
        --tuners: #cc9000;
        --fretdots: #bdbcd2;
        --strings: #ffffff;

        transform: rotate(45deg);
        width: 80%;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        touch-action: none;
        -webkit-touch-callout: none;
        
        & .trigger {
          cursor: pointer;
        }
      }
    }

    & section {
      height: 40%;
      background-color: var(--new-color);
      
      & h2 {
        color: black;
        text-align: center;
        margin-block: auto;
      }
    }
  }

  @property --new-color {
    syntax: "<color>";
    inherits: true;
    initial-value: red;
  }

  @property --old-color {
    syntax: "<color>";
    inherits: true;
    initial-value: red;
  }

  @keyframes colorChange {
    from {
      background-color: var(--old-color);
    }
    to {
      background-color: var(--new-color);
    }
  }

  .container-interaction section.active {
    animation: colorChange 1s;
  }
  /* #endregion Guitar */

  /* #region AudioAPI */
  .audio-api {
    position: relative;
  }

  input[type=range] {
    -webkit-appearance: none;
    background: transparent;
    width: 150px;
  }

  input[type=range]::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -1vh;
    height: 4vh; width: 2vw;
    border: 0.5vmin solid var(--surface-2);
    border-radius: var(--radius-3);
    background-color: var(--color-1);
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    height: 4vh; width: 2vw;
    border: 0.5vmin solid var(--surface-2);
    border-radius: var(--radius-3);
    background-color: var(--color-1);
    cursor: pointer;
  }

  input[type=range]::-ms-thumb {
    height: 4vh; width: 2vw;
    border: 0.5vmin solid var(--surface-2);
    border-radius: var(--radius-3);
    background-color: var(--color-1);
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-runnable-track {
    height: 2vh;
    cursor: pointer;
    background-color: var(--surface-2);
    border-radius: var(--radius-3);
  }

  input[type=range]::-moz-range-track {
    height: 2vh;
    cursor: pointer;
    background-color: var(--surface-2);
    border-radius: var(--radius-3);
  }

  input[type=range]::-ms-track {
    height: 2vh;
    cursor: pointer;
    background-color: var(--surface-2);
    border-radius: var(--radius-3);
  }

  @media only screen and (min-width: 600px) {
    .master-controls {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(2, auto);
      grid-template-areas:
          "volin panin"
          "vollab panlab";
      justify-items: center;
      align-items: center;
    }

    .control-volume {
      grid-area: volin;
    }

    label[for="volume"] {
      grid-area: vollab;
      margin-top: 15px;
    }

    .control-panner {
      grid-area: panin;
    }

    label[for="panner"] {
      grid-area: panlab;
      margin-top: 15px;
    }
  }

  .control-volume::before {
    content: 'min';
  }

  .control-volume::after {
    content: 'max';
  }

  .control-panner::before {
    content: 'left';
  }

  .control-panner::after {
    content: 'right';
  }

  /* #endregion AudioAPI */

  /* #region Keyboard */
  .piano p {
    display: none;
  }

  @media (hover: hover){
    .piano p {
      display: block;
    }
  }

  .container-keyboard {
    max-width: calc(100vw - 7rem);
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    margin-block: 10px;
  }

  .keyboard {
    width: auto;
    padding: 0;
    margin: 0;
  }

  .key {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    touch-action: none;
    -webkit-touch-callout: none;
  }

  .white-key {
    width: 20px;
    height: 80px;
    box-shadow: 0 2px darkgray;
    background-color: var(--surface-2-light);
    z-index: 1;
  }

  .black-key {
    width: 10px;
    height: 40px;
    box-shadow: 0 2px rgb(49, 49, 49);
    background-color: var(--surface-2-dark);
    top: -38px;
    z-index: 2;
  }

  .key:hover {
    background-color: var(--color-1);
  }

  .key:active,
  .active {
    background-color: var(--color-2);
    box-shadow: unset;
  }

  .c:first-of-type {
    margin: 0 -9px 0 0;
  }

  .e, .b {
    margin: 0 0 0 -9px;
  }

  .d,.g,.a {
    margin: 0 -9px 0 -9px;
  }

  .c, .f {
    margin: 0 -9px 0 -4px;
  }

  .songs {
    padding-top: 1rem;
  }
  /* #endregion Keyboard */
</style>



