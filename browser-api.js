function format(data) {
  if (typeof data === "string") {
    return new TextEncoder("utf-8").encode(data);
  } else {
    return new Uint8Array(data);
  }
}

// (Uint8Array | String) -> Promise HexString
function sha256(data) { 
  var buffer = format(data);
  return crypto.subtle
    .digest("SHA-256", buffer)
    .then(function(buffer) {
      var hex = "";
      var bytes = new Uint8Array(buffer);
      for (var i = 0; i < bytes.length; ++i) {
        var chr = bytes[i].toString(16);
        hex += chr.length === 1 ? "0" + chr : chr;
      }
      return hex;
    });
}

module.exports = sha256;
