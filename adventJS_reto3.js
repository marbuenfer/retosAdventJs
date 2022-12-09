function distributeGifts(packOfGifts, reindeers) {
  const wightGifts = packOfGifts.join("").length;
  const wightReindeer = reindeers.join("").length * 2;
  return wightReindeer / wightGifts;
}
const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(packOfGifts, reindeers)); // 2
