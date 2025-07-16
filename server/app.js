const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();
const PORT = 5002;


app.use(cors({ origin: true, credentials: true }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('smartlifecover');
});

app.listen(PORT, () => {
    console.log('Server is running on port 5002');
});


app.use(cors({
    origin: '*'
}));


app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
