const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


module.exports = (req, res) => {

    const params = {
        part: 'snippet',
        key: process.env.YOUTUBE_API_KEY,
        q: req.query.term,
        type: 'video'
    };

    axios.get(ROOT_URL, {params: params}).then((response) => {
        res.json(response.data.items);
    }).catch((error) => {
        res.send(error);
    });
};
