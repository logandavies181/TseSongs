import { Builder, Chord, o, run } from "tsesound/index.ts"

import "tsesoundGlobalDef"

import { registerInstruments } from "./instruments.ts"

const b = new Builder()

registerInstruments(b)
b.addBars(60, 4, 26)

const lead: Chord[] = [
  o(b4, 1, 0.3),
  o(b4, 1, 0.3),
  o(b4, 1, 0.3),
  o(b4, 1, 0.3),
  o(e5, 1, 0.3),
]
b.pushChords(0, "lead", lead, 0.3)

run(b)
