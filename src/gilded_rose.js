function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

let updateRateMap = new Map();
updateRateMap.set("+5 Dexterity Vest", -1);
updateRateMap.set("Aged Brie", 1);
updateRateMap.set("Elixir of the Mongoose", -1);
updateRateMap.set("Sulfuras, Hand of Ragnaros", 0);
updateRateMap.set("Backstage passes to a TAFKAL80ETC concert", 2);
updateRateMap.set("Conjured Mana Cake", -2);

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == "Sulfuras, Hand of Ragnaros") continue;

    // decrease sell_in by 1 unit
    items[i].sell_in = items[i].sell_in - 1;

    const { name, sell_in, quality } = items[i];
    let updateRate = updateRateMap.get(name);

    /* sellInFactor: sets how much will degrade the quality depending
     on sell_in being positive or updateRate being positive (the item will not degrade)*/
    let sellInFactor = sell_in > 0 || updateRate > 0 ? 1 : 2;

    if (name == "Backstage passes to a TAFKAL80ETC concert") {
      let updateRate =
        sell_in === 0 ? -quality : sell_in <= 5 ? 3 : sell_in <= 10 ? 2 : 1;
      let updatedQuality = quality + updateRate;
      items[i].quality = updatedQuality <= 50 ? updatedQuality : 50;
      continue;
    }
    let updatedQuality = items[i].quality + updateRate * sellInFactor;

    items[i].quality =
      updatedQuality >= 0 ? (updatedQuality <= 50 ? updatedQuality : 50) : 0;
  }
  return items;
}

module.exports = { update_quality };
