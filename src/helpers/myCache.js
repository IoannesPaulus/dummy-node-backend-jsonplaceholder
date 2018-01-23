function get(key) {
  console.log(`Getting from cache: ${key}`);
  return null;
}

function put(key, body, duration) {
  console.log(`Putting into cache: ${key}, ${duration}`);
}

module.exports = {
  get: get,
  put: put
};
