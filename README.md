## nano-sha256

Use the native implementation of sha256 on both browser and Node.js. 588 bytes (gzipped).

```javascript
const nanoSha256 = require(".");

// ByteArray
nanoSha256([65,66,67]).then(console.log);

// UTF-8 String
nanoSha256("ABC").then(console.log);

// Uint8Array
nanoSha256(new Uint8Array([65,66,67])).then(console.log);

// Buffer
nanoSha256(new Buffer([65,66,67])).then(console.log);
```
