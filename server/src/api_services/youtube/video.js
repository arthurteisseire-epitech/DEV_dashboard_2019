const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/videos';


module.exports = (req, res) => {

    const params = {
        part: 'statistics',
        key: process.env.YOUTUBE_API_KEY,
        id: req.user.youtube_video_id
    };

    axios.get(ROOT_URL, {params: params}).then((response) => {
        console.log(response.data);
        res.json(response.data.items);
    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};
