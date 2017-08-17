function format(data) {
  if (typeof data === "string") {
    if (data.slice(0,2) === "0x") {
      var buffer = new Uint8Array((data.length - 2) / 2);
      for (var i = 2, l = data.length; i < l; i += 2)
        buffer[(i - 2) / 2] = parseInt(data.slice(i,i+2), 16);
    } else {
      var buffer = new TextEncoder("utf-8").encode(data);
    }
  } else {
    var buffer = new Uint8Array(data);
  }
  return buffer;
}

// (Uint8Array | HexString | String) -> Promise HexString

function sha256(data) { 
  var buffer = format(data);
  return crypto.subtle
    .digest("SHA-256", buffer)
    .then(buffer => {
      var hex = "0x";
      var bytes = new Uint8Array(buffer);
      for (var i = 0; i < bytes.length; ++i) {
        var chr = bytes[i].toString(16);
        hex += chr.length === 1 ? "0" + chr : chr;
      }
      return hex;
    });
}

module.exports = sha256;

