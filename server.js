let express = require('express');
let app = express();
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);