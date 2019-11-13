const Parser = require('rss-parser');

const parser = new Parser();

response = (req, res) => {
    parser.parseURL('https://www2.yggtorrent.pe/rss?action=generate&type=subcat&id=2171', function (err, feed) {
        if (err)
            res.send(err);
        else
            res.json(feed);
    })
};

module.exports = response;
