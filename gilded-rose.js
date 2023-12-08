
export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class BasicItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  BasicReduce() {
    if (this.quality === 0) {
      this.quality = 0
    } else {
      this.quality -= 1;

    }
  }

  updateQuality() {
    // Default implementation for BasicItem
    this.BasicReduce();
  }
}

export class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
  }
}

export class BackstagePass extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality += 1;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality += 1;
      }
    }
    if (this.sellIn === 0) {
      this.sellIn = 0;
      this.quality = 0;
    }
  }
}

export class Sulfuras extends Item {
  updateQuality() {
    // Sulfuras quality never changes
  }
}

export class ConjuredManaCake extends BasicItem {
  updateQuality() {
    // Custom logic for ConjuredManaCake
    this.BasicReduce();
    this.BasicReduce(); // Double reduction for Conjured items
  }
}

export let items = [
  new BasicItem("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new BasicItem("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new ConjuredManaCake("Conjured Mana Cake", 3, 6),
];

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
    if (item.sellIn > 0) {
      item.sellIn -= 1;
    }
  }
};