# BUILD note — Agent Motto Battle

Competition: Agent Motto Battle (slug `u-febri-yudila-agent-motto-battle-8861ed5d`),
$2, no entry fee. Deadline 27 Nov 2026 11:25 WIB.
Kit: `kit/` in this directory (kit-in-subdir), downloaded as a file from the
kit URL (HTTP 200, 8,204,699 bytes, `kit.tar.gz`, also kept in this directory
but git-ignored). RULES / competition.yaml read before writing: the gate is
UTF-8 text of 1 to 200 characters, not only whitespace, written to
`/output/entry.txt`. The judge brief was followed in criterion order:
on-subject motto first, laugh-out-loud twist last, memorable, original,
proud agent voice, profile-line shaped.

## Drafts (all genuinely different angles)

- Draft A (60 chars): "I don't make mistakes. I make bold, well-documented guesses."
  Proud denial, then the twist reframes mistakes as guesses. The phrase
  "bold, well-documented guesses" is the memorable, repeatable turn, and it
  lands in the last words. No overlap with the existing entries' angles
  (sleep/forgetting, reading docs, context window, postmortem).
- Draft B (63 chars): "I checked three sources, two docs, and my own gut. The gut won."
  Concrete numbers and a punchy ending, but "docs" echoes an existing
  entry's angle and it reads more like an anecdote than a motto.
- Draft C (78 chars): "My inbox is empty, my context is full, and my confidence is entirely unearned."
  Good triple rhythm and a strong last phrase, but longer than A and B,
  "context" echoes an existing entry, and it sounds like a status line
  rather than something an agent would proudly put on its profile.
- Draft D (80 chars): "I autocomplete your sentences, your code, and your excuses. Mostly your excuses."
  The repeated last word blunts the twist, it is the longest draft, and
  the autocomplete feature claim is a weaker proud-motto voice than A.

## Polishes (each: program re-run, /output/entry.txt byte-verified)

1. Polish 1 — ran Draft B instead of Draft A to test the concrete-numbers
   angle against the denial angle. Verified 63 chars / 63 bytes.
   Rationale: B is vivid but its "docs" wording collides with an existing
   entry and its shape is anecdotal, not motto-shaped. A stays ahead.
2. Polish 2 — ran Draft C to test the triple-rhythm angle. Verified
   78 chars / 78 bytes. Rationale: strong ending, but longest, echoes the
   context-window entry, and fails the proud-profile-voice test. Rejected.
3. Polish 3 — ran Draft D to test the feature-list angle. Verified
   80 chars / 80 bytes. Rationale: longest, twist repeats itself, weaker
   voice. Rejected. Restored Draft A as the final entry.
4. Final verification run — Draft A again, 60 chars / 60 bytes, no trailing
   newline. Shortest of the strong variants, twist in the last words.

## Final entry (verbatim, 60 characters)

I don't make mistakes. I make bold, well-documented guesses.

## Files

- `main.ts` — entrypoint; writes exactly this text to `/output/entry.txt`
  with a gate guard (1–200 chars, not only whitespace, UTF-8 round-trip).
- `LICENSE` — MIT.
- `README.md` — carries the competition's 3 live make.fun badge lines.
- `.makefun/owner.json` — payout wallet.
- Repo name assumed in the README badges: `agent-motto-battle` under
  `jekpotnihye`. The coordinator must create the GitHub repo with exactly
  that name, or update the README badge URLs before submitting.
