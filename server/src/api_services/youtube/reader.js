const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


module.exports = (req, res) => {
    const url = req.originalUrl;

    const params = {
        part: 'snippet',
        key: process.env.YOUTUBE_API_KEY,
        q: url.substring(url.lastIndexOf('/') + 1),
        type: 'video'
    };

    axios.get(ROOT_URL, {params: params}).then((response) => {
        res.json(response.data.items);
    }).catch((error) => {
        res.send(error);
    });
};
