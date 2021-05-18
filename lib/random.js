function random(min, max) {
  return ~~(Math.random() * (max - min + 1) + min);
}

module.exports = random;
// Function that creates random time delays
