const express = require("express");

const app = express();

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
