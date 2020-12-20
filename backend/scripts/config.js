const fs = require('fs');
const path = require('path');

function handler(data, serverless, options) {
  console.log('Received data', data);
  console.log('Received options', options);

  let config = [`BUCKET_NAME=${data.examplebucketurl}`, `VALUE=${2}`].join(
    '\n'
  );

  fs.writeFileSync(path.join(__dirname, `../../.${options.stage}.env`), config);
}

module.exports = { handler };
