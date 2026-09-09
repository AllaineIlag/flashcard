// Web Audio API Procedural Tone Synthesizer (Zero network audio dependencies)
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTone(freq: number, type: OscillatorType = 'sine', duration = 0.12, volume = 0.15) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // AudioContext blocked until user interaction
  }
}

export function playFlipSound(enabled = true) {
  if (!enabled) return;
  playTone(520, 'sine', 0.08, 0.1);
}

export function playCorrectSound(enabled = true) {
  if (!enabled) return;
  playTone(587.33, 'triangle', 0.1, 0.15); // D5
  setTimeout(() => playTone(880, 'triangle', 0.22, 0.18), 80); // A5
}

export function playWrongSound(enabled = true) {
  if (!enabled) return;
  playTone(320, 'sawtooth', 0.14, 0.12);
  setTimeout(() => playTone(240, 'sawtooth', 0.2, 0.12), 100);
}

export function playFanfareSound(enabled = true) {
  if (!enabled) return;
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, High C
  notes.forEach((freq, idx) => {
    setTimeout(() => playTone(freq, 'triangle', 0.35, 0.2), idx * 140);
  });
}
