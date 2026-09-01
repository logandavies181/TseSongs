import { Builder, c, Chord, o, r, run } from "../tsesound/index.ts"

import { registerInstruments } from "./instruments.ts"

const b = new Builder()

registerInstruments(b)
b.addBars(60, 4, 19)

const emaj = [e3, gs3, b3]
const bmaj = [b2, ds3, fs3]
const csmin = [cs3, es3, gs3]
const gsmaj = [gs3, bs3, ds4]
const amaj = [a3, cs4, e4]

const chords: Chord[] = [
  c(emaj, 4, 0.8),

  c(bmaj, 4, 0.8),

  c(csmin, 4, 0.8),

  c(gsmaj, 4, 0.8),

  //

  c(emaj, 4, 0.8),

  c(bmaj, 4, 0.8),

  c(csmin, 4, 0.8),

  c(amaj, 4, 0.8),
]
b.pushChordsMany(2, 0, "rhythm", chords, 0.5)

const lead: Chord[] = [
  // Offset to sit behind the beat
  r(0.1),

  o(b4, 3, 0.1),
  o(gs4, 1, 0.2),

  o(b4, 3.5, 0.1),
  o(gs4, 0.5),

  o(e5, 1.5, 0.2),
  o(ds5, 0.5, 0.2),
  o(cs5, 1, 0.2),
  o(b4, 1, 0.2),

  r(0.1),
  o(bs4, 3.9, 0.1),

  //

  o(b4, 3, 0.1),
  o(gs4, 1, 0.2),

  o(b4, 3.5, 0.1),
  o(gs4, 0.5),

  o(e5, 1.5, 0.2),
  o(ds5, 0.5, 0.2),
  o(cs5, 1, 0.2),
  o(b4, 1, 0.2),

  o(cs5, 0.5, 0.25),
  o(ds4, 0.5, 0.25),
  o(b4, 0.5, 0.25),
  o(cs4, 0.5, 0.25),
  o(a4, 1, 0.1),

  o(gs4, 0.5, 0.25),
]
b.pushChordsMany(1, 8, "lead", lead, 0.5)

run(b)
