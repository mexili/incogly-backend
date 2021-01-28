const express = require("express");
const app = express();

const middleware = require("./utils/middleware");

app.use(middleware.requestLogger);

require("./routes/main")(app);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
