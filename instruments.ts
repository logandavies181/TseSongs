import { Builder } from "../tsesound/index.ts"

export function registerInstruments(b: Builder): void {
  b.addSynth("lead", [
    {
      opcode: "vco2 iAmp, iFreq, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 2, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 3, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 4, 8",
    },
    {
      opcode: "oscili iAmp, iFreq",
    },
    {
      opcode: "oscili iAmp, iFreq * 2",
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
      .addEnvelope("mxadsr 0.01, 0.2, 0.3, 1")
      .addFilter("tonex", "iFreq*20")
      .addFilter("clip", "0, 0.5")
  })

  b.addSynth("rhythm", [
    {
      opcode: "vco2 iAmp, iFreq, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 2, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 3, 8",
    },
    {
      opcode: "vco2 iAmp, iFreq * 4, 8",
    },
    {
      opcode: "oscili iAmp, iFreq",
    },
    {
      opcode: "oscili iAmp, iFreq * 2",
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
      .addEnvelope("mxadsr iDur/2, 1, 0.6, 2")
      .addFilter("tonex", "iFreq*10")
      .addFilter("clip", "0, 0.5")
  })
}
