<script>
  let value = 50; // The value of the knob (range input)

  // Update the rotation of the knob based on the value
  $: rotation = (value - 50) * 2.7; // Map range (0-100) to degrees (-135 to 135)
</script>

<div class="knob-container">
  <!-- Knob SVG -->
  <div class="knob" style="transform: rotate({rotation}deg);">
    <svg viewBox="0 0 70 70">
      <g class="control__knob">
        <!-- Outer circle -->
        <circle fill="#c0c0c0" stroke="#323232" stroke-width="2" stroke-miterlimit="10" cx="35" cy="35" r="30" />
        <!-- Small indicator circle -->
        <circle fill="#FAFAFA" stroke="#7C7C7C" stroke-width="2" stroke-miterlimit="10" cx="35" cy="15" r="5" />
      </g>
    </svg>
    <text x="5" y="15" fill="#323232" font-size="3rem">0</text>
    <text x="65" y="15" fill="#323232" font-size="3rem">10</text>
  </div>

  <!-- Range Input -->
  <input
    class="range"
    type="range"
    min="0"
    max="100"
    step="1"
    bind:value
    aria-label="Guitar Amp Knob"
  />
</div>

<div class="value-display">
  Value: {value}
</div>

<style>
  .knob-container {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 100px;
  }

  .knob {
    transform: rotate(-135deg); /* Default rotation (minimum) */
    transform-origin: center;
    transition: transform 0.2s ease; /* Smooth rotation */
  }

  .knob svg {
    width: 100%; /* Scale SVG to fit the container */
    height: 100%;
  }

  .range {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0; /* Hide the range input */
    cursor: pointer; /* Pointer for user interaction */
  }

  .value-display {
    text-align: center;
    margin-top: 10px;
    font-size: 1rem;
    font-family: monospace;
    color: #323232;
  }
</style>
