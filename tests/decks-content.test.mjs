import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const decksURL = new URL("../decks.json", import.meta.url);

test("Turkish internet net020 keeps its internet-specific content", async () => {
  const decks = JSON.parse(await readFile(decksURL, "utf8"));
  const internetDeck = decks.find(
    (deck) => deck.id === "internet" && deck.language === "tr",
  );
  const card = internetDeck?.cards.find(({ id }) => id === "net020");

  assert.ok(card, "expected Turkish internet/net020 to exist");
  assert.equal(card.target, "Spam Mail");
  assert.deepEqual(card.taboo, [
    "E-posta",
    "Gereksiz",
    "Klasör",
    "Reklam",
    "Taşmak",
  ]);
});

test("Turkish cards keep their native playable copy", async () => {
  const expectedCards = [
    {
      deckId: "starter",
      cardId: "s116",
      target: "Tüyleri Diken Diken Olmak",
      taboo: ["Soğuk", "Cilt", "Korku", "Kol", "Ürperti"],
    },
    {
      deckId: "internet",
      cardId: "net013",
      target: "Doomscrolling",
      taboo: ["Telefon", "Kötü Haber", "Akış", "Yatak", "Bitmeyen"],
    },
    {
      deckId: "internet",
      cardId: "net033",
      target: "Her Yoruma Atlayan Tip",
      taboo: ["Cevap", "Sürekli", "Sinir Bozucu", "Gönderi", "Tartışma"],
    },
    {
      deckId: "internet",
      cardId: "net050",
      target: "Facepalm",
      taboo: ["El", "Yüz", "Çaresizlik", "Vurmak", "Aptalca"],
    },
    {
      deckId: "popculture",
      cardId: "pc056",
      target: "Tek Şarkılık Şöhret",
      taboo: ["Parça", "Bir Defa", "Unutulmak", "Liste", "Hit"],
    },
    {
      deckId: "world",
      cardId: "wd009",
      target: "Amazon Ormanı",
      taboo: ["Brezilya", "Yağmur", "Ağaç", "Nehir", "Yeşil"],
    },
    {
      deckId: "world",
      cardId: "wd014",
      target: "Kanguru",
      taboo: ["Avustralya", "Zıplamak", "Kese", "Sıçramak", "Yavru"],
    },
    {
      deckId: "world",
      cardId: "wd046",
      target: "Yağmur Ormanı",
      taboo: ["Ağaç", "Nemli", "Amazon", "Islak", "Tropik"],
    },
    {
      deckId: "afterdark",
      cardId: "ad009",
      target: "Ghostlamak",
      taboo: ["Mesaj", "Cevap", "Kaybolmak", "Görmezden", "Flört"],
    },
    {
      deckId: "afterdark",
      cardId: "ad015",
      target: "Friendzone",
      taboo: ["Hoşlanmak", "Arkadaş", "Ret", "Sadece Dostuz", "Duygular"],
    },
    {
      deckId: "afterdark",
      cardId: "ad028",
      target: "Platonik Aşk",
      taboo: ["Hoşlanmak", "Gizli", "Kelebekler", "Duygular", "Sevimli"],
    },
    {
      deckId: "afterdark",
      cardId: "ad043",
      target: "Olgun Kadın",
      taboo: ["Yaşça Büyük", "Genç", "Flört", "Çekici", "Randevu"],
    },
    {
      deckId: "afterdark",
      cardId: "ad049",
      target: "Gizli Sevgili",
      taboo: ["Aldatmak", "Kaçamak", "Diğeri", "İlişki", "Saklamak"],
    },
    {
      deckId: "afterdark",
      cardId: "ad052",
      target: "Cinsel Eğitim",
      taboo: ["Anne Baba", "Çocuk", "Konuşma", "Tuhaf", "Anlatmak"],
    },
    {
      deckId: "afterdark",
      cardId: "ad054",
      target: "Body Shot",
      taboo: ["Tekila", "Tuz", "Limon", "Yalamak", "Bar"],
    },
    {
      deckId: "afterdark",
      cardId: "ad058",
      target: "Artı Bir",
      taboo: ["Davet", "Düğün", "Randevu", "Misafir", "Götürmek"],
    },
  ];
  const decks = JSON.parse(await readFile(decksURL, "utf8"));

  for (const expected of expectedCards) {
    const deck = decks.find(
      ({ id, language }) =>
        id === expected.deckId && language === "tr",
    );
    const card = deck?.cards.find(({ id }) => id === expected.cardId);
    const cardPath = `${expected.deckId}/tr/${expected.cardId}`;

    assert.ok(card, `expected ${cardPath} to exist`);
    assert.equal(
      card.target,
      expected.target,
      `${cardPath} target does not match`,
    );
    assert.deepEqual(
      card.taboo,
      expected.taboo,
      `${cardPath} taboo words do not match`,
    );
  }
});
