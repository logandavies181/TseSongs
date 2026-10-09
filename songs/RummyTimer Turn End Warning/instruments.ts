import { Builder } from "tsesound/index.ts"

export function registerInstruments(b: Builder): void {
  b.addSynth("lead", [
    {
      opcode: "vco2 iAmp, iFreq",
    },
    {
      opcode: "vco2 iAmp * 2, iFreq",
    },
  ], (mi) => {
    mi
      .addMirroredVoice({
        detune: 1.00001,
        pan: 0.6,
      })
      .addMirroredVoice({
        detune: 1.00002,
        pan: 0.7,
      })
      .addEnvelope("mxadsr 0.0025, 0.2, 0.1, 0.5")
      .addFilter("tonex", "iFreq*10")
      .addFilter("clip", "0, 0.5")
  })
}
