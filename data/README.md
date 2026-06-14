# Resume Site Data

This folder contains public-safe source data for the CV site.

## Files

- `resume-site-source.md` is the human-readable source document for resume-site refreshes, AI-assisted content generation, and manual review.
- `profile.public.json` is the structured public profile data intended to feed the React site or a future generator for `src/data/profile.ts`.

## Current Source

The current public data was refreshed from `Rob_Weatherly_Extended_Resume_Data.md`, modified 2026-06-14 4:55 PM Eastern.

Canonical resume-site facts reflected here:

- Displayed site title: Azure Infrastructure Architect / Lead Cloud Engineer.
- Resume headline: Azure Infrastructure Architect | Lead Cloud Engineer | Lead Technical Engineering.
- Slalom role: Senior Consultant and Azure Infrastructure Architect, May 2022 to present.
- Contact: r.weatherly@gmail.com, LinkedIn, Metro Detroit, MI. Phone remains omitted.
- Education: National Institute of Technology, technical/vocational IT training.
- Certifications: none currently listed.

## Public-Safe Rules

- Do not include client names, internal project names, Notion transcripts, local file paths, phone numbers, or private strategy notes.
- Keep detailed private source evidence in the separate resume working folder, not in this public repo.
- Use industry labels and capability descriptions instead of client-identifying details.
- Do not list AZ-900, an Associate's degree, or any other certification/degree claim unless Rob explicitly changes that later.
- Treat `src/data/profile.ts` as the current runtime data file until the site is wired to this data. The next content-refresh step should keep the existing layout and update runtime content from these files.
