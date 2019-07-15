const express = require('express');
const app = express()
const axios = require('axios');

const PORT = 3000

app.get('/', (req, res) => res.send("Everyday I'm Strugglin'"))

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))