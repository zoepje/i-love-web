<script>
// @ts-nocheck
	import * as config from '$lib/config'

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
      sectionColor.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }
  }
  // #endregion Guitar
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
    
    <section bind:this={sectionColor}>
      <h2>Strum and change my color</h2>
    </section>
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
    min-width: 300px;
    width: 30%;
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
        
        & .trigger {
          cursor: pointer;
        }
      }
    }

    & section {
      height: 40%;
      background-color: red;
      
      & h2 {
        color: black;
        text-align: center;
        margin-block: auto;
      }
    }
  }
  /* #endregion Guitar */
</style>