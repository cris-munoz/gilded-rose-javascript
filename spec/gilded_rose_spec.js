const { update_quality, items } = require("../src/gilded_rose");
const { updatedItems } = require("../mocks/item");

describe("Gilded Rose", function () {
  it("should update quality", function () {
    // console.log(items);
    expect(update_quality()).toEqual(updatedItems);
  });
});
