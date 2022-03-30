const { Item, update_quality } = require("../src/gilded_rose");
var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

describe("Gilded Rose", function () {
  it("should do something", function () {
    // console.log(items);
    expect(update_quality(true)).toEqual(items);
  });
});
