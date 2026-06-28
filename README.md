# TabooParty Decks

Remote deck content for the TabooParty iOS app, served via GitHub Pages.

- **Live URL:** `https://ridvanimren.github.io/tabooparty-decks/decks.json`
- **Format:** a JSON array of deck objects (the app's `DeckFileDTO` wire shape).
- Each deck carries its own `language` (`en` / `tr`); the app filters by the
  active language.

## Updating decks

Edit `decks.json`, commit, push. Live within ~10 min (Fastly CDN TTL). The app
revalidates by ETag, so a changed file is picked up on the next launch fetch.

- **New free deck** → add the object, push. Done.
- **New premium deck** → add the object (with `isPremium: true` and a
  `productId`), push, **and** create the matching in-app purchase in App Store
  Connect. No app binary release required.

## Deck object shape

```json
{
  "id": "starter",
  "language": "en",
  "isPremium": false,
  "productId": null,
  "palette": "coral",
  "glyph": "square.stack.3d.up.fill",
  "price": null,
  "title": "Starter Pack",
  "description": "...",
  "cards": [
    { "id": "s-en-001", "target": "Pizza", "taboo": ["Cheese", "Slice"], "difficulty": "easy" }
  ]
}
```

## Cover visuals — `palette` + `glyph`

A deck cover is a `palette` gradient with a white `glyph` (SF Symbol) on top.
Both are remotely editable — change them here, no app release.

- **`palette`** — one of a fixed brand set (adding a *new* color needs an app
  release): `coral`, `violet`, `emerald`, `amber`, `rose`, `teal`, `indigo`,
  `crimson`, `sky`, `lime`, `magenta`, `plum`, `slate`, `bronze`, `cobalt`.
  Omitted → `coral`.
- **`glyph`** — any SF Symbol name available on the app's iOS deployment target
  (e.g. `film.fill`, `globe.europe.africa.fill`, `fork.knife`). Omitted →
  `square.stack.3d.up.fill`. Pick from Apple's SF Symbols app; an invalid name
  renders blank, so verify it exists.
