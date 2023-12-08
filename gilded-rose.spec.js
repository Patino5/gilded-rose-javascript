import { expect, describe, it } from "vitest";
import { BasicItem, BackstagePass, AgedBrie, Sulfuras, Item, items, updateQuality } from "./gilded-rose.js";

describe('Basic Items', () => {
  it('reduces the quality and sellIn of Dexterity Vest, Elixir of the Mongoose, and Conjured Mana Cake items by 1', () => {
    const dexterityVest = new BasicItem("+5 Dexterity Vest", 10, 20);
    const elixir = new BasicItem("Elixir of the Mongoose", 5, 7);
    const manaCake = new BasicItem("Conjured Mana Cake", 3, 6);

    items.push(dexterityVest);
    items.push(elixir);
    items.push(manaCake);

    updateQuality();

    expect(dexterityVest.sellIn).toBe(9);
    expect(dexterityVest.quality).toBe(19);
    expect(elixir.sellIn).toBe(4);
    expect(elixir.quality).toBe(6);
    expect(manaCake.sellIn).toBe(2);
    expect(manaCake.quality).toBe(5);
  });

  it('never allows quality to be negative', () => {
    const testItem = new BasicItem("basic", 5, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(0);
  });
});

describe('Backstage Passes', () => {
  it('increases the quality by 1 if the quality is less than 50', () => {
    const backstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20);

    items.push(backstagePass);

    updateQuality();

    expect(backstagePass.sellIn).toBe(14);
    expect(backstagePass.quality).toBe(21);
  });

  it('increases the quality by 2 if sellIn is less than 11 and quality is less than 50', () => {
    const backstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 25);

    items.push(backstagePass);

    updateQuality();

    expect(backstagePass.sellIn).toBe(9);
    expect(backstagePass.quality).toBe(27);
  });

  it('increases the quality by 3 if sellIn is less than 6 and quality is less than 50', () => {
    const backstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 25);

    items.push(backstagePass);

    updateQuality();

    expect(backstagePass.sellIn).toBe(4);
    expect(backstagePass.quality).toBe(28);
  });

  it('drops the quality to 0 if sellIn is equal to 0', () => {
    const backstagePass = new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 0, 28);

    items.push(backstagePass);

    updateQuality();

    expect(backstagePass.sellIn).toBe(0);
    expect(backstagePass.quality).toBe(0);
  });
});

describe('Other Items', () => {
  it('increases the quality of Brie each day by 1 up to 50 max', () => {
    const brie = new AgedBrie("Aged Brie", 2, 0);

    items.push(brie);

    updateQuality();

    expect(brie.sellIn).toBe(1);
    expect(brie.quality).toBe(1);
  });

  it('the quality of Brie is 50 max', () => {
    const brie = new AgedBrie("Aged Brie", 5, 50);

    items.push(brie);

    updateQuality();

    expect(brie.sellIn).toBe(4);
    expect(brie.quality).toBe(50);
  });

  it("the Sulfuras, Hand of Ragnaros never changes", () => {
    const handOfRagnaros = new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80);

    items.push(handOfRagnaros);

    updateQuality();

    expect(handOfRagnaros.sellIn).toBe(0);
    expect(handOfRagnaros.quality).toBe(80);
  });
});
