

const express = require('express')
var yahooFinance = require('yahoo-finance');
var cors = require('cors')
const app = express()
const port = 8080


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get('/stock-snapshot/:symbol', async (req, res) => {
    var a = yahooFinance.quote({
        symbol: req.params.symbol,
        modules: ['price'] // see the docs for the full list
    }, (err, quotes) => {
        res.send(quotes);
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})