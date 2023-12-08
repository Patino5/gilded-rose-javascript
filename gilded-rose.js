export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class BasicItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  BasicReduce() {
    this.sellIn -= 1
    this.quality -= 1
    console.log('hit');
  }
}

export let items = [];
const dexterityVest = new BasicItem("+5 Dexterity Vest", 10, 20)
items.push(dexterityVest);

items.push(new Item("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new BasicItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  
  for (let item of items) {  
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality -= 1;
        }
      }
    } else {
      
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality += 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality += 1;
            }
          } 
          if (item.sellIn === 0) {
            item.sellIn = 0
            item.quality = 0
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros" && item.sellIn > 0) {
      item.sellIn -= 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
              item.quality -= 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality += 1;
        }
      }
    }
    
  };
}
// console.log(dexterityVest.BasicReduce());
// console.log(dexterityVest);
// console.log(items);