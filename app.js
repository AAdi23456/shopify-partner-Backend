const express = require('express');
const app = express();
const logger = require('./logger');
const routes = require('./routes/index');
const cors = require('cors');


app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});


app.use('/', routes);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
