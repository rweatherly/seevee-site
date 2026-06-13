# Resume Site Data

This folder contains public-safe source data for the CV site.

## Files

- `resume-site-source.md` is the human-readable source document. Use it for resume-site refreshes, AI-assisted content generation, and manual review.
- `profile.public.json` is the structured public profile data intended to feed the React site or a future generator for `src/data/profile.ts`.

## Rules

- Keep this folder public-safe. Do not include client names, internal project names, Notion transcripts, Slalom internal artifacts, local file paths, phone numbers, or private strategy notes.
- Keep detailed private source evidence in the separate resume working folder, not in this public repo.
- Use industry labels and capability descriptions instead of client-identifying details.
- Do not list certifications or degrees unless they are confirmed and intentionally public.
- Treat `src/data/profile.ts` as the current runtime data file. It can later be generated from `profile.public.json`, but that wiring should be handled as a separate code change.
