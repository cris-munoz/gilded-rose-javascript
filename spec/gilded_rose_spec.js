const { update_quality } = require("../src/gilded_rose");
const { updatedItems } = require("../mocks/item");

describe("Gilded Rose", function () {
  it("should update quality", function () {
    expect(update_quality()).toEqual(updatedItems);
  });
});
