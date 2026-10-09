import { Builder, Chord, o, run } from "tsesound/index.ts"

import "tsesoundGlobalDef"

import { registerInstruments } from "./instruments.ts"

const b = new Builder()

registerInstruments(b)
b.addBars(60, 4, 26)

const lead: Chord[] = [
  o(e5, 0.5, 0.5),
  o(b4, 0.5, 0.5),
  o(e5, 0.5, 0.5),
  o(b4, 0.5, 0.5),

  o(f5, 0.5, 0.5),
  o(c5, 0.5, 0.5),
  o(f5, 0.5, 0.5),
  o(c5, 0.5, 0.5),

  o(g5, 0.5, 0.5),
  o(d5, 0.5, 0.5),
  o(g5, 0.5, 0.5),
  o(d5, 0.5, 0.5),

  o(a5, 0.5, 0.5),
  o(a5, 0.5, 0.5),
  o(a5, 0.5, 0.5),
  o(a5, 0.5, 0.5),
]
b.pushChords(0, "lead", lead, 0.3)

run(b)
