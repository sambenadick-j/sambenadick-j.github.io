const app = require("./app")

const port = process.env.PORT || 3000;
console.log(port);

app.listen(port, () => { console.log(`http://127.0.0.1:${port}`); });