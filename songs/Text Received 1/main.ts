import { Builder, Chord, o, run } from "tsesound/index.ts"

import "tsesoundGlobalDef"

import { registerInstruments } from "./instruments.ts"

const b = new Builder()

registerInstruments(b)
b.addBars(60, 4, 26)

const lead: Chord[] = [
  o(fs4, 0.125),
  o(a4, 0.125),
  o(e5, 0.125),
  o(d5, 0.125),
]
b.pushChords(0, "lead", lead, 0.3)

run(b)
