var crypto = require("crypto");

function format(data) {
  return new Buffer(data);
}

// (Uint8Array | Buffer | String) -> Promise HexString
function sha256 (data, encoding) {
  return Promise.resolve("" +
    crypto.createHash("sha256")
      .update(format(data), encoding)
      .digest()
      .toString("hex"));
}

module.exports = sha256;
