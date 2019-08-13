const express = require('express');

const app = express();

// Add config directories here...
app.use(express.static('dist/browser'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
