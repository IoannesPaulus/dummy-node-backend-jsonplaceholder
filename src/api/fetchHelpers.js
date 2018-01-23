function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  const err = new Error(response.statusText);
  err.status = response.status;
  return Promise.reject(err);
}

function json(response) {
  return response.json();
}

module.exports = {
  status: status,
  json: json
};
