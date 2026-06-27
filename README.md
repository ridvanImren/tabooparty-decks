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
  "price": null,
  "title": "Starter Pack",
  "description": "...",
  "cards": [
    { "id": "s-en-001", "target": "Pizza", "taboo": ["Cheese", "Slice"], "difficulty": "easy" }
  ]
}
```
