const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

const middleware = require("./utils/middleware");

app.use(middleware.requestLogger);

require("./routes/main")(app);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

require("./conference")(server);

if (module === require.main) {
  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log("Press Ctrl+C to quit.");
  });
}

module.exports = server;
