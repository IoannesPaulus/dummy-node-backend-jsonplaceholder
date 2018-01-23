function set(rate) {
  console.log(`Setting throttle rate: ${rate}`);
}

function canAccept() {
  return true;
}

module.exports = {
  set: set,
  canAccept: canAccept
};
