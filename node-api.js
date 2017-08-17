var crypto = require("crypto");

function format(data) {
  if (typeof data === "string" && data.slice(0,2) === "0x") {
    var array = new Uint8Array((data.length - 2) / 2);
    for (var i = 2, l = data.length; i < l; i += 2)
      array[(i - 2) / 2] = parseInt(data.slice(i,i+2), 16);
    var buffer = new Buffer(array);
  } else {
    var buffer = new Buffer(data);
  }
  return buffer;
}

// (Uint8Array | HexString | String) -> Promise HexString
function sha256 (data, encoding) {
  return Promise.resolve("0x" +
    crypto.createHash("sha256")
      .update(format(data), encoding)
      .digest()
      .toString("hex"));
}

module.exports = sha256;
