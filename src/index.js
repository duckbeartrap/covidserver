const express = require('express');
const cors = require('cors');

const analyticsRouter = require('./routes/analytics');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/analytics', analyticsRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

